class ground{

    constructor(x,y){
        
       
       
        this.x = x;
        this.y = y

        this.body = Bodies.rectangle(x,y,800,15,{isStatic: true});
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rect(pos.x,pos.y,800,15);
    }


}