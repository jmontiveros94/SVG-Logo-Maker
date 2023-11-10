const { Triangle, Circle, Square } = require('./shapes');

// Test cases for Triangle class
describe('Triangle', () => {
  it('calculates area correctly', () => {
    const triangle = new Triangle(5, 8);
    expect(triangle.calculateArea()).toBe(20);
  });
});

// Test cases for Circle class
describe('Circle', () => {
  it('calculates area correctly', () => {
    const circle = new Circle(3);
    expect(circle.calculateArea()).toBeCloseTo(28.27, 2);
  });
});

// Test cases for Square class
describe('Square', () => {
  it('calculates area correctly', () => {
    const square = new Square(4);
    expect(square.calculateArea()).toBe(16);
  });
});

