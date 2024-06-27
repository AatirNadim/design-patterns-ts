interface Transport {
  duration: number;
  deliver(): void;
}

class RoadTransport implements Transport {
  duration: number = 2;
  deliver(): void {
    console.log("Delivering by road");
  }
}

class WaterTrasport implements Transport {
  duration: number = 5;
  deliver(): void {
    console.log("Delivering by water");
  }
}
