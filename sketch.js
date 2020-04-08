const Engine = Matter.Engine;
const World  = Matter.World ;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
const boxes = [];
var throwerBall1, slingShot;
var ground1 ;
var gound2 ;
//var score  = 0 ;
var timer = 10 ;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(900,350,200,20);
    ground2 = new Ground(width/2,height-10,width,20);
    


    //ground2
    for(var i = 0 ; i<3;i++){
    boxes[i] = new Box(900,275,50,50);
    }
    
    throwerBall1 = new throwerBall(80,350,50 );

//    throwerBall1.debug = true ;

    slingshot = new SlingShot(throwerBall1.body,{x:200, y:50});
}

function draw(){
    background("red");
    Engine.update(engine);
    strokeWeight(4);
    textSize(30);
  ////  text(""+score ,600,30);
    textSize(80);
    text(""+timer,600,200);


  //if(collide(box,throwerBall1)){
 /*   if(slingshot.rematch(throwerBall1.body)){

    balling = balling +1 ;

}*/
   
    ground1.display();
    ground2.display();

   if(timer >0){
    for(var box of boxes){
        box.display();
    }


    if (frameCount % 60 == 0){
        timer = timer - 1 ;
    }

    throwerBall1.display();
  
    slingshot.display();  

/*
    if(isTouching(throwerBall1,boxes)){
        score= score+1;
    }*/
    
   }

    
  
    
}
function mouseDragged(){
    Matter.Body.setPosition(throwerBall1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.go();
}
function keyPressed(){
    if(keyCode === 32){
        throwerBall1.visible = false ;
        throwerBall1.y=0;
        throwerBall1.x=0;
        throwerBall1.visible = true ;
        slingshot.rematch(throwerBall1.body);
    }
}