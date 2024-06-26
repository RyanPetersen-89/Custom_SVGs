const Circle = require('../lib/Circle.js'); // This imports the Circle class

test('Circle render method with color blue', () => {
    const shape = new Circle(); // This create a new Circle instance
    shape.setColor("blue"); // This sets the color of the circle to blue
    // This checks if the rendered SVG matches the expected output
    expect(shape.render().replace(/\s+/g, ' ').trim()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="100" fill="blue"/> <text x="150" y="125" font-size="70" text-anchor="middle" fill=""></text> </svg>');
});