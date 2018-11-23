const graphPosition1 = 0;
let graphPosition2 = 0;
let graphPosition3 = 0;
const margin = 10;

let slider;
let sliderValue = 0;
let button;

let reversed = false;

let fx = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let gx = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  1,0.9875,0.975,0.9625,0.95,0.9375,0.925,0.9125,0.9,0.8875,0.875,0.8625,0.85,0.8375,0.825,0.8125,0.8,0.7875,0.775,0.7625,0.75,0.7375,0.725,0.7125,0.7,0.6875,0.675,0.6625,0.65,0.6375,0.625,0.6125,0.6,0.5875,0.575,0.5625,0.55,0.5375,0.525,0.5125,0.5,0.4875,0.475,0.4625,0.45,0.4375,0.425,0.4125,0.4,0.3875,0.375,0.3625,0.35,0.3375,0.325,0.3125,0.3,0.2875,0.275,0.2625,0.25,0.2375,0.225,0.2125,0.2,0.1875,0.175,0.1625,0.15,0.1375,0.125,0.1125,0.1,0.0875,0.075,0.0625,0.05,0.0375,0.025,0.0125,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0);

  graphPosition2 = windowHeight/3;
  graphPosition3 = windowHeight/3*2;

  // slider = createSlider(-fx.length/2, fx.length/2, 0, 1);
  // slider.position(10, 10);
  // slider.style('width', '150px');

  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(loopThroughConvolution);
}

function draw() {
  background(255);
  const sampleWidth = (windowWidth - 2 * margin) / fx.length;
  // sliderValue = slider.value();
  // put drawing code here

  // f(x)
  drawGraph(graphPosition1, windowHeight, windowWidth);
  drawSignal(fx, graphPosition1, windowHeight, windowWidth, {r: 255, g: 0, b: 0});

  if(reversed) gx = gx.reverse();
  // g(x)

  drawGraph(graphPosition2, windowHeight, windowWidth);
  drawSignal(gx, graphPosition2, windowHeight, windowWidth, {r: 0, g: 0, b: 255});

  gx = gx.reverse();
  reversed = true;
  // f*g
  drawGraph(graphPosition3, windowHeight, windowWidth);

  let newDat = offsetData(gx, sliderValue);

  // f(tao)
  drawSignal(fx, graphPosition3, windowHeight, windowWidth, {r: 255, g: 0, b: 0});

  // overlapped area
  let overlappedData = findOverlap(fx, newDat);
  drawOverlap(overlappedData, graphPosition3, windowHeight, windowWidth, {r: 255, g: 255, b: 0});

  // convolution line
  let convolutionLine = [];
  stroke(0);
  noFill();
  beginShape();
  for(let i = -fx.length/2; i < fx.length/2; i++) {
    let newDat = offsetData(gx, i);
    let od = findOverlap(fx, newDat);
    convolutionLine.push(calculateArea(od));
    vertex(i * sampleWidth + windowWidth/2, windowHeight - margin - calculateArea(od) * windowHeight*2);
  }
  endShape();

  // g(t - tao)
  drawSignal(newDat, graphPosition3, windowHeight, windowWidth, {r: 0, g: 0, b: 255});

  fill(0);
  noStroke();
  let area = convolutionLine[parseInt(sliderValue + fx.length / 2, 10)];
  ellipse(sliderValue * sampleWidth + windowWidth / 2, windowHeight - margin - area * windowHeight * 2, 8, 8);

  if(mouseIsPressed) {
    let dx = mouseX - pmouseX;

    sliderValue += dx * 0.5;
  }
}

function loopThroughConvolution () {
  sliderValue = -fx.length/2;
  let t = setInterval(function () {
    sliderValue += 2;

    if(sliderValue >= fx.length/2) clearInterval(t);
  }, 33);
}

function drawGraph(yOrigin, windowHeight, windowWidth) {
  // Line color
  stroke(0);
  // Horizontal axis line
  line(windowWidth/2, yOrigin+margin, windowWidth/2, yOrigin+windowHeight/3-margin);

  // Vertical axis line
  line(margin, yOrigin+windowHeight/3-margin, windowWidth-margin, yOrigin+windowHeight/3-margin);
}

function drawSignal(data, yOrigin, windowHeight, windowWidth, color) {
  const dataLength = data.length;
  const sampleWidth = (windowWidth - 2 * margin) / dataLength;

  let lastx = margin;
  let lasty = windowHeight/3 - margin;

  strokeWeight(1.5);
  stroke(color.r, color.g, color.b);

  for(let i = 0; i < dataLength; i++) {
    let x = margin + sampleWidth * i;
    let y = yOrigin + windowHeight / 3 - margin - (data[i] * (windowHeight / 3 - 2 * margin));

    line(lastx, lasty, x, y);

    lastx = x;
    lasty = y;
  }
}

function drawOverlap(data, yOrigin, windowHeight, windowWidth, color) {
  const dataLength = data.length;
  const sampleWidth = (windowWidth - 2 * margin) / dataLength;

  let lastx = margin;
  let lasty = windowHeight/3 - margin;

  noStroke();
  fill(color.r, color.g, color.b);
  beginShape();

  for(let i = 0; i < dataLength; i++) {
    let x = margin + sampleWidth * i;
    let y = yOrigin + windowHeight / 3 - margin - (data[i] * (windowHeight / 3 - 2 * margin));


    vertex(x, y);

    lastx = x;
    lasty = y;
  }

  endShape(CLOSE);
}

function offsetData (data, offset) {
  let length = data.length;
  let zeros = Array.apply(null, Array(length)).map(Number.prototype.valueOf,0);
  let newData = [...zeros, ...data, ...zeros];
  // console.log(newData);

  let returnData = [];
  for(let i = 0; i < length; i++) {
    // console.log(newData[i+offset])
    returnData.push(newData[parseInt(i-offset+length, 10)]);
  }

  // console.log(returnData)

  return returnData;
}

function findOverlap(f, g) {
  if(f.length !== g.length) return null;

  let returnData = [];

  for(let i = 0; i < f.length; i++) {
    let fv = f[i];
    let gv = g[i];

    if(fv > gv) {
      returnData.push(gv);
    } else {
      returnData.push(fv);
    }
  }

  return returnData;
}

function calculateArea(data) {
  let area = 0;
  for(let i = 0; i < data.length; i++) {
    area += data[i];
  }

  area /= data.length;

  return area;
}
