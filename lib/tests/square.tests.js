const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<rect width="200" height="200" fill="blue" />');