class Dustbin {
    constructor(x, y, width, height) {

      this.image=loadImage("dustbingreen.png")

      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      World.add(world,this.body)
     
     

    } 

    display(){
     push()
      imageMode(CENTER);
      fill(83,17,0);
      
      image(this.image,600,550 ,  this.width, this.height);
      pop()
    }
  };
                 