class TrafficLight {
  lightIndex: number = 0;

  constructor() {
    this.lightIndex = 0;
  }

  static get colors() {
    return ["green", "yellow", "red"];
  }

  get light() {
    return TrafficLight.colors[this.lightIndex];
  }

  next() {
    this.lightIndex++;
    // This is intentionally wrong!
    if (this.lightIndex >= TrafficLight.colors.length) {
      this.lightIndex = 0;
    }
  }
}

export default TrafficLight;
