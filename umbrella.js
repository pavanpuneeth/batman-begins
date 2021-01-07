class Umbrella{
    constructor(x, y){
        var options = { 
        'isStatic': true
        }
        this.umbrella = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.image = loadImage("walking_2.png");
        World.add(world, this.umbrella);
    }
 
      display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70,300,300);
      }



}
/*class Bob {
    constructor(x, y,) {
        var options = { 
          'isStatic' : false,
          'restitution':1,
          'friction':0.5,
          'density':0.105
        }
        this.body = Bodies.circle(x, y, 40, options);
        this.width = 80;
        this.height = 80;
        this.bodyDiameter = 85;
       // this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
       // pos.x = mouseX;
        //pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        circle(0, 0, this.width, this.height);
        pop();
      }
    }
    */
    