class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
  }
  
class Triangle extends Shape{
    constructor(width, height){
        super(width, height);
    }

    area(){
        return this.width*this.height/2;
    }   
}

class Rect extends Shape{
    constructor(width, height){
        super(width, height);
    }

    area(){
        return this.width*this.height;
    }   
}

t = new Triangle(3,4)
t.area()

r = new Rect(5,7)
r.area()