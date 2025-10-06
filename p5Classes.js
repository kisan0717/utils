class MyPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    point(this.x, this.y);
  }
}

class MyLine {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  draw() {
    line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
  }
}