var car,wall;
var speed,weight;


function setup() {
  engine = Engine.create();

  speed=random(55,90);
  weight=random(400,1500)

  car=createSprite(50,200,50,50);

  wall=createSprite(1500,200,60,height/2);
  wall.shapecolour(80,80,80);

  car.velocityX=speed;

  var canvas = createCanvas(1600,400);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
  car.display();
  wall.display();

  drawSprites();
}