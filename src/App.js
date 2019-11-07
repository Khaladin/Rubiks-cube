import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var cubex = -22,    // initial rotation
cubey = -38,
cubez = 0;
function rotate(variableName, degrees) {
  console.log(variableName);
    window[variableName] = window[variableName] + degrees;
    rotCube(cubex, cubey, cubez);
}
function rotCube(degx, degy, degz){
    let segs = "rotateX("+degx+"deg) rotateY("+degy+"deg) rotateZ("+degz+"deg) translateX(0) translateY(0) translateZ(0)";
    console.log(segs);
    document.getElementById("D3Cube").style.transform = `translate(${segs})`
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
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="wrapD3Cube">
          <div id="D3Cube">
            <div id="side1">Words on this side</div>
            <div id="side2">Words on this side</div>
            <div id="side3">Words on this side</div>
            <div id="side4">Words on this side</div>
            <div id="side5">Words on this side</div>
            <div id="side6">Words on this side</div>
          </div>
        </div>

        <div>
          <div onClick={() => turnLeft()}>Left</div>
          <div onClick={() => turnRight()}>Right</div> <br />
          <div onClick={() => flipCube()}>Flip</div>
        </div>
      </header>
    </div>
  );
}

export default App;
