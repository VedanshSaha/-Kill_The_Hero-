class Fly{
    constructor(bodyA,pointB){
    var chain1 = { bodyA: bodyA,
                   pointB: pointB,
                   stifness: 0.00001,
                   length:70
    }
    this.pointB = pointB
    this.chain2 = Constraint.create(chain1)
    World.add(world,this.chain2); 
    }
    detach(){
        this.chain2.bodyA = null
    }
    attach(){
        this.chain2.bodyA = hero.body;
    }
    display(){
        if(this.chain2.bodyA){
    strokeWeight(3)
    fill(0)
    var pointB = this.pointB;
    line(this.chain2.bodyA.position.x,this.chain2.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}
}