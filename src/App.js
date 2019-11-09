import React from 'react';
import $ from 'jquery';

import logo from './logo.svg';

import './App.scss';
import './assets/sass/main.scss'

function App() {
  var cubex = -22,    // initial rotation
cubey = -10,
cubez = 0;
function rotate(variableName, degrees) {
    if (variableName === 'cubey') {
      cubey += degrees;
    } else if (variableName === 'cubez') {
      cubez += degrees;
    } 
    window[variableName] = window[variableName] + degrees;
    rotCube(cubex, cubey, cubez);
}
function rotCube(degx, degy, degz){
    let segs = "rotateX("+degx+"deg) rotateY("+degy+"deg) rotateZ("+degz+"deg) translateX(0) translateY(0) translateZ(0)";
    $('#D3Cube').css({"transform":segs});
}
function turnRight() {
    rotate("cubey", 90);
}
function turnLeft() {
    rotate("cubey", -90);
}
function flipCube() {
    rotate("cubez", -180);
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the intro page
        </p>
        <div id="wrapD3Cube">
          <div id="D3Cube">
            <div id="side1">Words on this side</div>
            <div id="side2">graph here</div>
            <div id="side3">cool graphic</div>
            <div id="side4">Winning slide</div>
            <div id="side5">Words on this side</div>
            <div id="side6">Words on this side</div>
          </div>
        </div>

        <p>
            <a onClick={() => turnLeft()}>Left</a>
            <a onClick={() => turnRight()}>Right</a> <br />
            <a onClick={() => flipCube()}>Flip</a>
        </p>
      </header>
    </div>
  );
}

export default App;
