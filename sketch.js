var circles = [
  { x: 100, y: 100, d: 100 },
  { x: 200, y: 50, d: 50 },
  { x: 250, y: 150, d: 50 },
  { x: 200, y: 350, d: 50 },
];

function setup() {
  createCanvas(400, 400);
}

function draw( ) {
  background(220);
  var index = 0;
  while(index < circles.length) {
    ellipse(circles[index].x, circles[index].y, circles[index].d);
	  index += 1;
  }
  if (mouseIsPressed) {
    // add a circle where the mouse is
    // not this: ellipse(mouseX, mouseY, 10);
    fill ("blue")
    circles[circles.length] = { x: mouseX, y: mouseY, d: 50 };
  }
}
