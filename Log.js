class Log extends BaseClass{
    constructor(x, y, height, angle) {
     super(x,y,20,height,angle)
    // this.width = 20;
      //this.height = height;
     this.image=loadImage("sprites/wood2.png")
     Matter.Body.setAngle(this.body,angle)
    }
  };
  