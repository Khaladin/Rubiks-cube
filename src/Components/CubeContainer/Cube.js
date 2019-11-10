import React from 'react';

const Cube = () => {
  return(
    <div className="scene">
      <div className="cube">
        <div className="cube-face cube-face-front">front</div>
        <div className="cube-face cube-face-back">back</div>
        <div className="cube-face cube-face-right">right</div>
        <div className="cube-face cube-face-left">left</div>
        <div className="cube-face cube-face-top">top</div>
        <div className="cube-face cube-face-bottom">bottom</div>
      </div>
    </div>
  )
}

export default Cube;
