function Box(x, y, w, h){
  var options={
 //restitution:1,
    friction:0
    }
  this.body=Bodies.rectangle(x, y, w, h,options);
  World.add(world,this.body);
  this.w= w;
  this.h= h;
  this.isOffscreen=function(){
    var pos=this.body.position;
    return(pos.y>height+100);
  }
  this.removeFromWorld=function(){
    World.remove(world,this.body);
  }

  this.show=function(){
    var pos=this.body.position;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill("blue");
    rect(0,0,this.w,this.h);
    pop();
  }
}
