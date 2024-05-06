//shapes.test.js

const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('render() method should return SVG string for triangle with specified color', () => {
        const triangle = new Triangle('red');
        const svg = triangle.render();
        expect(svg).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
    });
});

describe('Circle', () => {
    test('render() method should return SVG string for circle with specified color', () => {
        const circle = new Circle('blue');
        const svg = circle.render();
        expect(svg).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});

describe('Square', () => {
    test('render() method should return SVG string for square with specified color', () => {
        const square = new Square('green');
        const svg = square.render();
        expect(svg).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
    });
});