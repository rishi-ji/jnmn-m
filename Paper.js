class Paper {
    constructor(x, y) {
      var options = {
        isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
      }
      this.image=loadImage("paper.png")
      this.body=Bodies.circle(x,y,20,options)
      this.radius=20      
      World.add(world,this.body)
      
    }
    display(){
      push()
       imageMode(CENTER);
       fill(83,17,0);
       
       image(this.image,60,550 ,  this.width, this.height);
       pop()
     }
   };
  