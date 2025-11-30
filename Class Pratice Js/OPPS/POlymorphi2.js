class Vehicle {
  start() {
    console.log("Vehicle starting...");
  }
}

class Bike extends Vehicle {
  start() {
    console.log("Bike starts with kick");
  }
}

const v = new Vehicle();
const b = new Bike();

v.start();
b.start();
