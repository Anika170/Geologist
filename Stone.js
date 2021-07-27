class Stone{
constructor(x,y,r){
this.r=r
var options={
	restitution: 0.8,
    friction: 0.9,
	density: 12
	}
this.body=Bodies.circle(x,y,r,options)
World.add(world,this.body)
}
display(){
ellipse(this.body.position.x,this.body.position.y,this.r)
}
}