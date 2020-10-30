class Stone {
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
     

        this.image = loadImage("stone.png");
 
        this.body = Bodies.circle(x,y,radius/2)
        World.add(world,this.body);
        console.log(this.body)
    }

    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}