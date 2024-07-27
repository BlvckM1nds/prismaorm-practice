// URL: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript

// OOJS 1
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  };

  calcPerimater() {
    const perimeter = this.sideLength * this.sides;
    console.log(`The perimeter of this ${this.name} is ${perimeter}.`);
  };
};

const rectangle = new Shape('rectangle', 4, 5);
const triangle = new Shape('triangle', 3, 3);

rectangle.calcPerimater();
triangle.calcPerimater();

// OOJS 2
class Square extends Shape {
  constructor(sideLength) {
    super('square', 4, sideLength);
  };
  
  calcArea() {
    const area = this.sideLength ** 2;
    console.log(`The area of this ${this.name} is ${area}.`);
  };
};

const square = new Square(5);
square.calcPerimater();
square.calcArea();