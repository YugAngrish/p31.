const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;

engine = Engine.create();
world = engine.World;

var ground
var particles = []
var plinkos = []
var divisions = []

function setup() {

  createCanvas(800,800);

  var divisionHeight=300

  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j = 40 ; j<=width;j=j+50){
  plinkos.push(new Plinko(j,75))
  }
  for(var j = 40 ; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
    }
    for(var j = 0 ; j<plinkos.length;j++){
      particles[j].display()
      }
      for(var k = 0 ; k<divisions.length;k++){
        particles[k].display()
        }

     if(frameCount%60===0){
       particles.push(new Particle(random(width/2-10,width/2+10,10,10)))
     }   
  ground = new Ground(750)
 // p1 = new Plinko(20,40)
  Engine.run(engine)
}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
  drawSprites();
  //p1.display();
  ground.display();
}
