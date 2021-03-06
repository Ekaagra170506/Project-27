class Bob {
    constructor(x,y,radius) {
      var options = {
          restitution:1,
          friction:0,
          density:0.8
      }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill(255,20,147);
      ellipse(pos.x, pos.y, this.radius,this.radius);
    }
  };