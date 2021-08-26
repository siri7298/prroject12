var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf
var selectsprites

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leavesImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=mouseX;

  drawSprites();

selectsprites=Math.round(random(1,2));

if(frameCount % 80==0){
  createApples();
  if(selectsprites==1){
    createApples();
  }
  else{
if(selectsprites==2)
createleaves();
  }
}
else{

}
}
//creating apples
function createApples(){
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale=0.05
  apple.velocityY=3
  
  }

  function createleaves(){
    leaves=createSprite(random(50,350),40,10,10)
    leaves.addImage(leavesImg)
    leaves.scale=0.05
    leaves.velocityY=3
    
    }