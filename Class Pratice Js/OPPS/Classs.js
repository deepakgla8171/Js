class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }

  show() {
    console.log(`Name: ${this.name}, Roll: ${this.roll}`);
  }
}

const s1 = new Student("Deepak", 101);
s1.show();
