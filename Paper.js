class Paper{
 constructor(x,y,radius){
 var position={
 isstatic:false,
 restitution:0.3,
 friction:0.5,
 density:1.2
 }
 this.p=Bodies.circle(x,y,radius,position);
 World.add(world,this.p);
 this.r=radius;
    }
    display(){
        var pos=this.p.position
 rectMode(CENTER)
 fill("purple")
 rect(pos.x,pos.y,this.r);
    }
}