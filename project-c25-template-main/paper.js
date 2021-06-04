class Paper
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.paperWidth=50;
		this.paperHeight=70;

		
		this.image=loadImage("paper.png")
		this.bottomBody=Bodies.circle(this.x, this.y, this.paperWidth, this.paperheight, {isStatic:false})
		
		

		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			
			//strokeWeight(4);
			angleMode(RADIUS);
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			//strokeWeight(4);
			angleMode(RADIUS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			//strokeWeight(4);
			angleMode(RADIUS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.paperHeight/2,this.paperWidth, this.paperHeight)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}