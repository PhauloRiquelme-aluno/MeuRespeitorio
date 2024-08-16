function setup() {
  createCanvas(400, 400);
  background(255);
}

let oldx = 0;
let oldy = 0;
let start = 0;

function draw() {
  stroke(0,0,255,100);
  fill(255,random(0,25),random(0,25));
  if(mouseIsPressed)
  {
    if (start < 3) {
      oldx = mouseX;
      oldy = mouseY;
      start++;
    }
    else
      line(mouseX,mouseY,oldx,oldy);
  }
  else
  {
    start = 0;
  }
  oldx = mouseX;
  oldy = mouseY;
}
