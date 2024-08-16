function setup() {
  createCanvas(400, 400);
  background(255);
}

let oldx = 0;
let oldy = 0;
let start = false;

function draw() {
  stroke(0,0,255,100);
  fill(255,random(0,25),random(0,25));
  if(mouseIsPressed)
  {
    if (!start) {
      oldx = mouseX;
      oldy = mouseY;
    }
    line(mouseX,mouseY,oldx,oldy);
  }
  start = mouseIsPressed;
  oldx = mouseX;
  oldy = mouseY;
}
