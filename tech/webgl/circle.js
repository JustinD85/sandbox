//This holds ids of previous setIntervals, to be cleared
const intervals = [];

//Clears intervals for each id
function clearIntervals() {
  intervals.forEach(i => clearInterval(i));
  //resets intervals variable by removing all contents of array
  intervals.splice(0);
}

//Entry point
function main() {
  
  //Grabs all canvases on the DOM
  const canvases = document.querySelectorAll(".glCanvas");
  
  //Calculate circle radians, i think
  const availRadians = 2 * Math.PI;
  const parentRadius = document.querySelector("#container").of; //parameterize this
  // allocates even space for all elements, does not take into account element width
  const slot = availRadians / canvases.length;
  //formula: Math.cos(radian) * radiusOfCircle + offSetOfParentElement
  const x = i => Math.cos(slot * i) * parentRadius + parentRadius;
  const y = i => Math.sin(slot * i) * parentRadius + parentRadius;

  canvases.forEach((canvas, i) => {
    //Set position in circle
    canvas.style.top = y(i) + "px";
    canvas.style.left = x(i) + "px";

    //Initialize the GL context
    const gl = canvas.getContext("webgl"); //THE REAL MAGIC HERE <<<<<<<-------<<<<<<<<

    if (gl === null) {
      alert("unable to init webgl, your browser is weak");
      return;
    }

    function randNum() {
      return Math.random();
    }

    function randColors() {
      //Set clear color to black ,full opaque
      gl.clearColor(randNum(), randNum(), randNum(), 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
    randColors(randNum());//this is for one invocation uncomment below for rainbow
    // intervals.push(setInterval(randColors, randNum() * 900 + 150));
  });
}

window.onload = main;
// setInterval(() => {
//   clearIntervals();
//   main();
// }, 3000);
