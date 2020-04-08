class throwerBall{
   constructor(x,y,r){
     var options_ball = {

      'density' : 1 ,
      'friction' : 1 ,
      'gravity' : 0.2 ,
      'speed' :0.1  ,
      'restitution' :0.5

     }
     this.body = Bodies.circle(x,y,r,options_ball);
     this.r  = r ;
     World.add(world,this.body);
   }
   change(){
    if(slingShot.isTouching("box")){
        options_ball = {

          'density' : 0.5 ,
          'friction' : 0.1 ,
          'gravity' : 0.72 ,
          'speed' :1  ,
          'restitution' : 0.8

        } 

        fill(0,255,150);

      }

   }
   display(){
    const pos = this.body.position ;
    const angle = this.body.angle ;
    push();
    translate(pos.x , pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    ellipse(0,0,this.r);
    pop();

   }
}