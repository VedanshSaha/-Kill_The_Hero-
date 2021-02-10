class Block {
    constructor(x,y){
    this.body = Bodies.rectangle(x,y,50,50)
    this.width = 50;
    this.height = 50;
    World.add(world,this.body)
    this.image = loadImage("mon.png")
    }
    display(){
     imageMode(CENTER)
    //  fill("lime")
     image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}