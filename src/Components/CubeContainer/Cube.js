import React from 'react';
import { ChoroplethMap } from '../Choropleth';

const Cube = ({ sideShowing }) => {
  return (
    <>
      <div className="scene">
        <div className={`cube ${sideShowing}`}>
          <div className="cube-face cube-face-front">
            <ChoroplethMap />
          </div>
          <div className="cube-face cube-face-back">back</div>
          <div className="cube-face cube-face-right">right</div>
          <div className="cube-face cube-face-left">left</div>
          <div className="cube-face cube-face-top">top</div>
          <div className="cube-face cube-face-bottom">bottom</div>
        </div>
      </div>
    </>
  );
};

export default Cube;
