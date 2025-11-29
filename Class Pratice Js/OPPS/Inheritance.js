class Animal {
  sound() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {}

const d = new Dog();
d.sound();
