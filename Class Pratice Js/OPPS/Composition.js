class Engine {
  run() {
    console.log("Engine running...");
  }
}

class Car {
  constructor() {
    this.engine = new Engine(); // has-a relationship
  }

  start() {
    this.engine.run();
  }
}

const c = new Car();
c.start();
