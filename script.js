let point1 = new MyPoint(10, 0);
let point2 = new MyPoint(10, 500);
let point3 = new MyPoint(0, 490);
let point4 = new MyPoint(500, 490);
let line1 = new MyLine(point1,point2);
let line2 = new MyLine(point3,point4);

function setup() {
  createCanvas(500, 500);
 
  background(200);
}

function draw() {
  background(200);
  
  strokeWeight(1);
  stroke(0);
  line1.draw();
  line2.draw();

}

