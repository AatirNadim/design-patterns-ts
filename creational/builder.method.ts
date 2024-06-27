class Car {
  constructor() {}
}

class Manual {
  constructor() {}
}

interface Builder {
  reset(): void;
  setSeats(): void;
  setEngine(): void;
  setGPS(): void;
}

class CarBuilder implements Builder {
  private car: Car;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.car = new Car();
  }

  setSeats(): void {
    console.log("Setting seats");
  }

  setEngine(): void {
    console.log("Setting engine");
  }

  setGPS(): void {
    console.log("Setting GPS");
  }

  getResult(): Car {
    return this.car;
  }
}

class ManualBuilder implements Builder {
  private manual: Manual;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.manual = new Manual();
  }

  setSeats(): void {
    console.log("Setting seats");
  }

  setEngine(): void {
    console.log("Setting engine");
  }

  setGPS(): void {
    console.log("Setting GPS");
  }

  getResult(): Manual {
    return this.manual;
  }
}

class Director {
  buildSportsCar(builder: Builder): void {
    builder.setSeats();
    builder.setEngine();
    builder.setGPS();
  }

  buildSUV(builder: Builder): void {
    builder.setSeats();
    builder.setEngine();
    builder.setGPS();
  }
}

class Application {
  makeCar() {
    const director = new Director();
    const builder = new CarBuilder();

    director.buildSportsCar(builder);
    const car = builder.getResult();
    return car;
  }
}

export {};
