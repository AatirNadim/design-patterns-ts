type Dimensions = {
  width: number;
  height: number;
};

interface Shape {
  dimensions: Dimensions;
  clone(): Shape;
}

class Rectangle implements Shape {
  dimensions: Dimensions;
  constructor(dimensions: Dimensions) {
    this.dimensions = dimensions;
  }
  clone(): Shape {
    return new Rectangle(this.dimensions);
  }
}

class Circle implements Shape {
  dimensions: Dimensions;
  constructor(dimensions: Dimensions) {
    this.dimensions = dimensions;
  }
  clone(): Shape {
    return new Circle(this.dimensions);
  }
}

class Application {
  shapes: Shape[];

  constructor() {
    this.shapes = [];
  }
  addShape(shape: Shape) {
    this.shapes.push(shape);
  }
  cloneShapes(): Shape[] {
    return this.shapes.map((shape) => shape.clone());
  }
}

export {};
