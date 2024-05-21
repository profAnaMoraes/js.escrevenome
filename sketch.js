function setup() {
    createCanvas(400, 400);
   background ("green");
  }
  
  function draw() {
    stroke ("blue")
    fill ("red")
    
    if(mouseIsPressed) {
    rect (mouseX,mouseY,30,30);
    }
  }