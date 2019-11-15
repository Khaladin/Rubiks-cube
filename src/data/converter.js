const fs = require('fs');
const util = require('util');
const parse = require('csv-parse');
const transform = require('stream-transform');

// convert fs methods to promises for 'transform'
const writeFile = util.promisify(fs.writeFile);
const appendFile = util.promisify(fs.appendFile);

const converter = ({ outputPath, inputPath, log = true }) =>
  new Promise(async (resolve, reject) => {
    try {
      // create an empty file to stream to
      await writeFile(outputPath, '');

      // open streams to input/output files (needed to be able to pipe the data)
      const source = fs.createReadStream(inputPath);
      const destination = fs.createWriteStream(outputPath);

      // config for csv-parse lib
      const parser = parse({
        // data is tab-delimited
        delimiter: '\t',
        // tells lib to associate column name with column value in each row
        columns: true,
        // don't want accidental quotes inside a column to be interpreted as a wrapper
        quote: false
      });

      let outputIndex = 0;

      const transformer = transform(rawRow => {
        const currentRecordIndex = outputIndex;
        outputIndex += 1;
        // just want to know that this thing is working
        if (outputIndex % 1000 === 0 && log === true) {
          console.info('processing row', outputIndex);
        }

        // -----------------------------------------------------------
        // This is where we can customize the output. With this block of code commented out, the tsv will be converted directly to json without any changes to the data.
        //   const { competitionId } = rawRow;
        //   if (year) {
        //     if (!competitionId.endsWith(year)) {
        //       if (currentRecordIndex === 0) {
        //         return '['
        //       } else {
        //         return
        //       }
        //     }
        //   }
        // -----------------------------------------------------------

        const result =
          currentRecordIndex === 0
            ? `[${JSON.stringify(rawRow)}`
            : `,${JSON.stringify(rawRow)}`;
        return result;
      });

      destination.on('finish', async () => {
        if (outputIndex === 0) {
          // no output was added, so insert an empty list (valid json)
          await appendFile(outputPath, '[]');
        } else {
          // need the closing bracket for valid json
          await appendFile(outputPath, ']');
        }

        console.info('Done converting file');
        console.info('Number of rows: ', outputIndex);

        resolve();
      });

      // This is where the work gets kicked off. This works like middleware in redux - a "stream" processes a chunk
      // of data at a time - instead of loading the whole file into memory - and we run that chunk from the source file,
      // through the parser, then transformer, and finally to destination.
      source
        .pipe(parser)
        .pipe(transformer)
        .pipe(destination);
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  convert: converter
};
