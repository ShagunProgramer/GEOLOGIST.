class Stone{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options={
      restitution:0.8,
    friction:0.9,
      density:10
	}
    this.body = Bodies.rectangle(x, y,50,50, options);
    this.width = 50;
    this.height = 50;
	World.add(world, this.body);
    }
    display()
	{
			var rubberpos=this.body.position;	
			var angle = this.body.angle;
	
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			rotate(angle);
			stroke("black");
			fill("darkblue");

			rect(0,0,this.width,this.height)
		
			pop()
	}
}