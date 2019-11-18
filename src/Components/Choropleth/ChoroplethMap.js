import React from 'react';
import * as d3 from 'd3';

const ChoroplethMap = () => {
  const earth = d3.geoEqualEarth();
  const path = d3.geoPath(earth);
  const projection = d3
    .geoMercator()
    .scale(70)
    .center([0, 20]);

  return <div></div>;
};

export default ChoroplethMap;
