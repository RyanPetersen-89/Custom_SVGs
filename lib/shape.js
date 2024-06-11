// This parent class that will extend to child classes (Circle, Square, Triangle)
class Shape {
  constructor(shapeColor = '', text = '', textColor = '') {
      this.shapeColor = shapeColor;
      this.text = text;
      this.textColor = textColor;
  }
  setColor(color) {
    this.shapeColor = color;
  }
};

module.exports = Shape;