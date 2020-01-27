let num = 7;
let circles = [];
let distance = 0;

function setup() {
  createCanvas(400, 400);
  distance = width/num;
  print(distance);
  for (let i = 0; i < num; i++) {
    circles[i] = distance*i + distance/2;
  }
  print(circles);
}

function draw() {
  background(0);
  fill(255,0,255);
  for(let i = 0; i < circles.length; i++) {
    circles[i] += random(-1,1);
    ellipse(circles[i] , height/2, 20, 20);
  }  
}