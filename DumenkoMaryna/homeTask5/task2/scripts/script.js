document.addEventListener('DOMContentLoaded', function() {
   // Создать иерархию объектов из задания 4.2 с помощью классов ES6
   class Shape {
    constructor() {
        this.color = "#fff";
        this.lineWeight = 12;
    }

    setColor(color) {
        this.color = color;
    }
   }

   class Triangle extends Shape {
    constructor(sideFirst, sideSecond,sideThird) {
        super();
        this.sideFirst = sideFirst;
        this.sideSecond = sideSecond;
        this.sideThird = sideThird;
    }

    calcPerimeter() {
        return this.sideFirst + this.sideSecond + this.sideThird;
    }
    calcArea() {
        var halfPerimeter = (this.calcPerimeter())/2;
        return Math.sqrt(halfPerimeter*(halfPerimeter - this.sideFirst)*(halfPerimeter - this.sideSecond)*(halfPerimeter - this.sideThird));
    }
  }
        
  class Rectangle extends Shape {
    constructor(sideFirst, sideSecond) {
        super();
        this.sideFirst = sideFirst;
        this.sideSecond = sideSecond;
    }

    calcPerimeter() {
        return 2*(this.sideFirst + this.sideSecond);
    }
  }

    var myTriangle = new Triangle(15, 20.22);  
    var myRectangle = new Rectangle(15, 20); 

    myTriangle.setColor("#000")
    myRectangle.setColor("#abf")

    console.log(myTriangle.color);
    console.log(myRectangle.color);

    class IsoscelecTriangle extends Triangle {
        checkBaseSide() {
            if(this.sideFirst === this.sideSecond) {
                return this.sideThird;
            } else {
                if(this.sideFirst === this.sideThird) {
                    return this.sideSecond
                } else if(this.sideSecond === this.sideThird) {
                    return this.sideFirst;
                }
            }
        }
    }

    class RightTriangle extends Triangle {
        checkHypotenuse() {
            this.hypotenuse = Math.max(this.sideFirst, this.sideSecond, this.sideThird);
        }
    }

    var myRightTriangle = new RightTriangle(12, 16, 20);
    var myIsoscelecTriangle = new IsoscelecTriangle(21, 22, 22);

    console.log(myRightTriangle.calcPerimeter())
    console.log(myRightTriangle.color)
    console.log(myIsoscelecTriangle.calcPerimeter())
    console.log("Base side " + myIsoscelecTriangle.checkBaseSide())

    class Square extends Rectangle {
        calcArea() {
            return this.sideFirst*this.sideSecond;
        }
    }

    class Rhombus extends Rectangle {
        constructor(sideFirst, height) {
            super();
            this.sideFirst = this.sideSecond = sideFirst;
            this.height = height;
        }
        calcArea() {
            return this.sideFirst*this.height;
        }
    }

    var mySquare = new Square(21, 22);
    var myRhombus = new Rhombus(12, 22);

    console.log(mySquare.calcPerimeter())
    mySquare.setColor("#abc")
    console.log(mySquare.color)
    console.log(myRhombus.lineWeight)
    console.log(myRhombus.calcPerimeter())
})
