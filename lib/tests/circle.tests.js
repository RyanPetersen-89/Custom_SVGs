const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />');