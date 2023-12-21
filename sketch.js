var y = 0;

// slider stuff
let slider;
let blackCircleX = 100;
const whiteCircleX = 219; // Fixed X-coordinate for the white circle
const whiteCircleY = 200; // Fixed Y-coordinate for the white circle
const circleRadius = 100; 

// star stuff
let stars = [];
let i;
let bullets = [];
let meteorites = {x:200,y:0,r:100};
let counter = 0;
let d;
let count = 0;
let count2 = 0;

let speedy = 1;

function setup() {

  createCanvas(windowWidth / 3.17, windowHeight / 2).parent('canvas-container');

  slider = createSlider(0, width, width / 1.9);
  slider.addClass('slider'); // Add a custom class to the slider
  slider.style('width', '370px');
}



function draw() {
  frameRate(30);
  // Get the slider value to update the black circle's x position
  blackCircleX = slider.value();

  // Set the background to black
  background('#111111');

  // Draw the white circle at a fixed position
  fill(255);
  noStroke();
  ellipse(whiteCircleX, whiteCircleY, circleRadius * 2);
  // Draw the black circle at the position controlled by the slider
  fill('#111111');
  noStroke();
  ellipse(blackCircleX, whiteCircleY, circleRadius * 2);


  // stars appear, 
  let s = new Star(random (0,width), random (0,height), random (1,2), random (2,7), 5, 250, 250, 200);
  for (i = 0; i < random(3); i+=1) {
  stars.push(s);}
  for (let star of stars) {
  star.createStar();
  }
  
  astro();


  if (blackCircleX > 0 &&  blackCircleX < 120) {
    fill(255, 0, 0)
    textSize(20); 
    textFont('Montserrat');
    text('waning gibbous', width/2.7, y, 500, 300);
    // ellipse(width/2, y, 50, 50);
    y+=speedy;
    }

  if (blackCircleX > 120 &&  blackCircleX < 130) {
    fill(255, 153, 51);
    textSize(20);
    textFont('Montserrat');
    text('last quarter', width/2.7, y, 500, 100);
    // ellipse(width/2, y, 50, 50);
    y+=speedy;
    }
  
    else {}

    if (blackCircleX > 130 &&  blackCircleX < 220) {
      fill(255, 255, 0);
      textSize(20);
      textFont('Montserrat');
      text('waning crescent', width/2.7, y, 500, 100);
      // ellipse(width/2, y, 50, 50);
      y+=speedy;
      }
    
      else {}

  if (blackCircleX > 220 &&  blackCircleX < 230) {
    fill(0, 255, 0);
    textSize(20);
    textFont('Montserrat');
    text('new moon', width/2.5, y, 500, 300);
    // ellipse(width/2, y, 50, 50);
    y+=speedy;
    }

    if (blackCircleX > 230 &&  blackCircleX < 320) {
      fill(0, 155, 255);
      textSize(20);
      textFont('Montserrat');
      text('waxing crescent', width/2.7, y, 500, 300);
      // ellipse(width/2, y, 50, 50);
      y+=speedy;
      }

      if (blackCircleX > 320 &&  blackCircleX < 340) {
        fill(102, 102, 255);
        textSize(20);
        textFont('Montserrat');
        text('first quarter', width/2.7, y, 500, 300);
        // ellipse(width/2, y, 50, 50);
        y+=speedy
        }

        if (blackCircleX > 340 &&  blackCircleX < 430) {
          fill(255, 102, 255);
          textSize(20);
          textFont('Montserrat');
          text('full moon', width/2.5, y, 500, 300);
          // ellipse(width/2, y, 50, 50);
          y+=speedy;
          }
  
    else {}


    if (y > 380||y<0) {
      speedy*= -1;

      }

    else {}

}


class Star {
  constructor(_x,_y,_r1,_r2,_npoints,_colr,_colg,_colb) {
    this.x = _x;
    this.y = _y;
    this.r1 = _r1;
    this.r2 = _r2;
    this.npoints = _npoints;
    this.colr = _colr;
    this.colg = _colg;
    this.colb = _colb;
    
    this.sx = 0;
    this.sy = 0;
    this.angle = TWO_PI / _npoints;
    this.halfAngle = TWO_PI / _npoints / 2;
    
  }

  createStar() {
    noStroke();
    fill(this.colr,this.colg,this.colb, 20);
    beginShape();
    
    for (let j = 0; j < TWO_PI; j += this.angle) {
      this.sx = this.x + cos(j) * this.r2;
      this.sy = this.y + sin(j) * this.r2;
      vertex(this.sx, this.sy);
      this.sx = this.x + cos(j+this.halfAngle) * this.r1;
      this.sy = this.y + sin(j+this.halfAngle) * this.r1;
      vertex(this.sx, this.sy);
      }
    endShape(CLOSE);
  }
}

function astro(x,y,r) {
  noStroke();
  fill(200, 200, 200, 60);

}


