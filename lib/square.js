//This requires/imports the Shape parent class as a requirment for the Square function and constructors to run properly
const Shape = require('./Shape.js')

// child of Shape, render a Square using svg literal template
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" fill="${this.shapeColor}"/>
              <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
    };
};
// This exports the Square file so that it can be accessed by other files when called on.
module.exports = Square;