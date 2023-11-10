// shapes.js

// Class for Triangle
class Triangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  // Class for Circle
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  // Class for Square
  class Square {
    constructor(side) {
      this.side = side;
    }
  
    calculateArea() {
      return Math.pow(this.side, 2);
    }
  }
  
  // Export the classes
  module.exports = {
    Triangle,
    Circle,
    Square,
  };
  