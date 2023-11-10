const { Triangle, Circle, Square } = require('./shapes');

describe('Shape', () => {
    describe ('Circle', () => {
        test ('should return the SVG file for circles', () => {
            const circle = new Circle('red');
            expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
        });
    });
    describe ('Square', () => {
        test ('should return the SVG code for a square', () => {
            const square = new Square('blue');
            expect(square.render()).toEqual(`<rect x="70" y="20" width="160" height="160" fill="blue" />`);
        });
    });
    describe ('Triangle', () => {
        test ('should return the SVG code for a triangle', () => {
            const triangle = new Triangle('green');
            expect(triangle.render()).toEqual(`<polygon points="150,10 240,190 60,190" fill="green" />`);
        });
    });
});
