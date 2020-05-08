let Engine=Matter.Engine,
World=Matter.World,
Bodies=Matter.Bodies;

var balls=[];
var land;


function setup(){
    createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;
        Engine.run(engine);


    var options={
        isStatic:true
    }

    land=Bodies.rectangle(200,height,width,40,options);
    World.add(world,land);




}
function mouseDragged(){
    balls.push(new Box(mouseX,mouseY,random(10,40),random(40,10)));
}

function draw(){
    background(255);


    fill("red");
    rectMode(CENTER);
    rect(land.position.x,land.position.y,width,40);


    for(var i=0; i < balls.length; i++){
        balls[i].show();
    }

}