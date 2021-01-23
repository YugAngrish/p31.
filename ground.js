class Ground{

    constructor(y){
        var options = {
       setStatic:true
        }
      this.body=Bodies.rectangle(width/2,y,1000,20,options);
        this.width=2000
        this.height=20
        World.add(world,this.body)
    }
    display(){

        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}