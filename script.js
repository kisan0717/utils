let graphPoints = [];

let point1 = new MyPoint(10, 0);
let point2 = new MyPoint(10, 500);
let point3 = new MyPoint(0, 10);
let point4 = new MyPoint(500, 10);
let line1 = new MyLine(point1, point2);
let line2 = new MyLine(point3, point4);

function graph(fun) {
  const can = document.getElementById("defaultCanvas0");
  const resolotion = 0.1;
  const depth = 100;
  const resMultiplier = resolotion * depth;
  const width = can.clientWidth * resMultiplier;
  const height = can.clientHeight * resMultiplier;
  graphPoints = [];

  for (let x = 0; x < width; x++) {

    for (let y = 0; y < height; y++) {

      if (fun(x / depth, y / depth)) {
        graphPoints.push(new MyPoint(x / resMultiplier, y / resMultiplier));
      }

    }
  }

  let validList = [];
  for (let i = 0; i < graphPoints.length; i++) {
    let currentPoint = graphPoints[i];
    let duplicate = false;
    for (let j = 0; j < validList.length; j++) {
      let validListPoint = validList[j];
      if (currentPoint.x == validListPoint.x && currentPoint.y == validListPoint.y) {
        duplicate = true;
      }
    }
    if (duplicate) {
      continue;
    } else {
      validList.push(currentPoint);
    }
  }
  graphPoints = validList;
}

function x1(x, y) {
  const marginOfError = 0.05;
  const leftVariable = y;
  const rightVariable = Math.tan(x);
  const difference = Math.abs(leftVariable - rightVariable);

  if (difference < marginOfError) return true;
  return false;
}

function setup() {
  createCanvas(500, 500);
  graph(x1);

  background(200);
}

function draw() {
  background(200);

  strokeWeight(1);
  stroke(0);

  // for (let i = 0; i < graphPoints.length - 1; i++) {
  //   let L = new MyLine(graphPoints[i], graphPoints[i + 1]);
  //   L.draw();
  // }

  for (let i = 0; i < graphPoints.length; i++) {
    graphPoints[i].draw();
  }
}

