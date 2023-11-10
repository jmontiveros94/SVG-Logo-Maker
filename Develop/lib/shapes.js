// this class will be the class that Circle, Triangle, and Square inherit
class Shape {
    constructor(color) {
        this.color = color;
    }
};
// Class for Triangle
// super extends the color class of shape
class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    // renders the shape
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
};
  // Class for Circle
  class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    // renders the shape
    render() {
        return `<polygon points="150,10 240,190 60,190" fill="${this.color}" />`;
    }
  }
 
  
  // Class for Square
  class Square extends Shape {
    constructor(color) {
        super(color);
    }
    // renders the shape 
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // Exports the classes
  module.exports = {
    Triangle,
    Circle,
    Square,
  };
  