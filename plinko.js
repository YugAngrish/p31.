class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic:true,
            friction:1,
            density:5
        }
      
        World.add(world,this.body)
    }
    display(){
        for(var i=30;i>20;i=i+30){
            ellipse(i,this.body.position.y,20,20)
            
        }
    }
}