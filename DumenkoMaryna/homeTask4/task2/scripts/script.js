document.addEventListener('DOMContentLoaded', function() {
    // Создать иерархию объектов с помощью прототипного наследования (3 уровня)
    var shape = {
        color: "#fff",
        lineWeight: 12,
        setColor: function (color) {
            this.color = color;
        }
    }

    var triangle = {
        sideFirst: 15,
        sideSecond: 20,
        sideThird: 25,
        calcPerimeter: function () {
            return this.sideFirst + this.sideSecond + this.sideThird;
        }, 
        calcArea: function () {
            var halfPerimeter = (this.calcPerimeter())/2;
            return Math.sqrt(halfPerimeter*(halfPerimeter - this.sideFirst)*(halfPerimeter - this.sideSecond)*(halfPerimeter - this.sideThird));
        }
    }

    var rectangle = {
        sideFirst: 15,
        sideSecond: 20,
        calcPerimeter: function () {
            return 2*(this.sideFirst + this.sideSecond);
        }, 
        
    }

    triangle.__proto__ = shape;
    rectangle.__proto__ = shape;

    var isoscelecTriangle = {
        sideFirst: 16,
        sideSecond: 16,
        sideThird: 20,
        checkBaseSide: function () {
            if(this.sideFirst === this.sideSecond) {
                return this.sideThird;
            } else {
                if(this.sideFirst === this.sideThird) {
                    return this.sideSecond
                } else if(this.sideSecond === this.sideThird) {
                    return this.sideFirst;
                }
            }
        },
    }
    
    var rightTriangle = {
        sideFirst: 12,
        sideSecond: 20,
        sideThird: 16,
        checkHypotenuse: function () {
            this.hypotenuse = Math.max(this.sideFirst, this.sideSecond, this.sideThird);
        }
    }

    isoscelecTriangle.__proto__ = triangle;
    rightTriangle.__proto__ = triangle;
    
    var square = {
        calcArea: function () {
            return this.sideFirst*this.sideSecond;
        }
    }
    var rhombus = {
        sideFirst: 20,
        height: 25,
        calcArea: function () {
            return this.sideFirst*this.height;
        }
    }

    square.__proto__ = rectangle;
    rhombus.__proto__ = rectangle;

    //Создать туже самую цепочку насследования но с помощью функционального наследования (создание объектов с помощью
    // конструктора - new и задание прототипа через Function.prototype)

    // 1 рівень ієрархії використовуємо var shape
        
    function Triangle(sideFirst, sideSecond,sideThird) {
        this.sideFirst = sideFirst;
        this.sideSecond = sideSecond;
        this.sideThird = sideThird;
        this.calcPerimeter = function() {
            return this.sideFirst + this.sideSecond + this.sideThird;
        }
        this.calcArea = function() {
            var halfPerimeter = (this.calcPerimeter())/2;
            return Math.sqrt(halfPerimeter*(halfPerimeter - this.sideFirst)*(halfPerimeter - this.sideSecond)*(halfPerimeter - this.sideThird));
        }
    }

    function Rectangle(sideFirst, sideSecond) {
        this.sideFirst = sideFirst;
        this.sideSecond = sideSecond;
        this.calcPerimeter = function() {
            return 2*(this.sideFirst + this.sideSecond);
        }
    }
    
    Triangle.prototype = shape;
    Rectangle.prototype = shape;

    var myTriangle = new Triangle(15, 20.22);  
    var myRectangle = new Rectangle(15, 20); 

    myTriangle.setColor("#000")
    myRectangle.setColor("#abf")

    console.log(myTriangle.color);
    console.log(myRectangle.color);

    function IsoscelecTriangle() {
        Triangle.apply(this, arguments);
        this.checkBaseSide = function() {
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

    function RightTriangle() {
        Triangle.apply(this, arguments);
        this.checkHypotenuse = function() {
            this.hypotenuse = Math.max(this.sideFirst, this.sideSecond, this.sideThird);
        }
    }
    
    IsoscelecTriangle.prototype = Object.create(Triangle.prototype);
    RightTriangle.prototype = Object.create(Triangle.prototype);

    var myRightTriangle = new RightTriangle(12, 16, 20);
    var myIsoscelecTriangle = new IsoscelecTriangle(21, 22, 22);

    console.log(myRightTriangle.calcPerimeter())
    console.log(myRightTriangle.color)
    console.log(myIsoscelecTriangle.calcPerimeter())
    console.log("Base side " + myIsoscelecTriangle.checkBaseSide())

    function Square() {
        Rectangle.apply(this, arguments);
        this.calcArea = function() {
            return this.sideFirst*this.sideSecond;
        }
    }

    function Rhombus(sideFirst, height) {
        Rectangle.apply(this);
        this.sideFirst = this.sideSecond = sideFirst;
        this.height = height;
        this.calcArea = function() {
            return this.sideFirst*this.height;
        }
    }
    
    Square.prototype = Object.create(Rectangle.prototype);
    Rhombus.prototype = Object.create(Rectangle.prototype);

    var mySquare = new Square(21, 22);
    var myRhombus = new Rhombus(12, 22);

    console.log(mySquare.calcPerimeter())
    console.log(mySquare.color)
    console.log(myRhombus.lineWeight)
    console.log(myRhombus.calcPerimeter())
})
