const Square = require('../lib/square'); // This imports the Square class

test('Square render method with color blue', () => {
    const shape = new Square(); // This create a new Square instance
    shape.setColor("blue"); // This sets the color of the square to blue
    // This checks if the rendered SVG matches the expected output
    expect(shape.render().replace(/\s+/g, ' ').trim()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" fill="blue"/> <text x="100" y="125" font-size="70" text-anchor="middle" fill=""></text> </svg>');
});