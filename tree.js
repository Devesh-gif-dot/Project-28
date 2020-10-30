class Tree {
     constructor(x,y,width,height){
        
        this.height  =height
        this.width = width
        this.x = x;
        this.y = y

        this.body = Bodies.rectangle(x,y,width,height,{isStatic: true});
        World.add(world,this.body);
        this.image = loadImage('tree.png');
    }
    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}