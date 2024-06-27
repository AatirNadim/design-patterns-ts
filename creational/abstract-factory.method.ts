interface Furniture {
  material: string;
}

class Chair implements Furniture {
  material: string;
  constructor(material: string) {
    this.material = material;
  }
}

class Table implements Furniture {
  material: string;
  constructor(material: string) {
    this.material = material;
  }
}

interface FurnitureFactory {
  createChair(): Chair;
  createTable(): Table;
}

class ModernFurniture implements FurnitureFactory {
  createChair(): Chair {
    return new Chair("plastic");
  }
  createTable(): Table {
    return new Table("glass");
  }
}

class VictorianFurniture implements FurnitureFactory {
  createChair(): Chair {
    return new Chair("wood");
  }
  createTable(): Table {
    return new Table("wood");
  }
}
