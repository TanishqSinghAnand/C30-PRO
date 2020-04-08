class Box {
constructor(x,y,width,height){
  this.body = Bodies.rectangle(x,y,width,height);
  this.width = width ;
  this.height = height ;
  World.add(world , this.body);
}

display(){

if(this.body.speed <1){
  const pos = this.body.position ;
  const angle = this.body.angle ;
  push();
  translate(pos.x , pos.y);
  rotate(angle);
  rectMode(CENTER);
  fill("green");
  rect(0,0,this.width,this.height);
  pop();
}
else{

  World.remove(world , this.body);
  push();
  this.visibility = this.visibility - 5 ;
  tint(255,this.visibility)
  fill ("red");
 // rect(0,0,this.width , this.height);
  pop();
}

}
}
