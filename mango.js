class mango {

    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        var options ={
            isStatic: true,
            restitution: 0,
            friction: 1,
        }

        this.image = loadImage("mango.png");
 
        this.body = Bodies.circle(x,y,radius/2,options)
        World.add(world,this.body);
        //console.log(this.body)
    }

    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }

    collision(Body1,Body2){
        var distance = dist(Body2.position.x,Body2.position.y,this.body.position.x,this.body.position.y);
          console.log(Body1);  
        if(distance <= this.radius + Body1.radius){
            Matter.Body.setStatic(this.body, false);
          
            
        }else{
            
        }
    }
    

}