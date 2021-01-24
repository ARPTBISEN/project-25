class Paper{
    constructor(){
        var option={
            'restitution':0.3,
            'density':1.2,
            'friction':0.5
        }
     this.body=Bodies.circle(150,20,18.1,option);
     this.image=loadImage("paper.png");
     World.add(world, this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        rotate(angle);
        fill("white")
        imageMode(CENTER);
        ellipseMode(RADIUS);
        noStroke();
        ellipse(pos.x,pos.y,30)
        image(this.image,pos.x,pos.y,90,90)
    
    }
}