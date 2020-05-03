var r,g,b;

function setup() {
  createCanvas(1200,800) ;
  r = createSprite(400,100,50,80);
  r.shapeColor = "red";
  r.debug = true;
  g = createSprite(400,800,80,30);
  gf.shapeColor = "green";
  g.debug = true;
  b = createSprite(300,100,60,60);
  b.shapeColor = "blue,";
  b.debug = true;

  r.velovityY = -5;
  r.velocityX = +5;
  g.velovityY = -5;
  g.velocityX = +5;
  b.velovityY = -5;
  b.velocityX = +5;
}

function draw(){
  background(0,0,0);
  drawSprites();
}