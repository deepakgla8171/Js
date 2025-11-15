//  const Person = function(name, age){
//           this.firstName = name;
//           this.age = age;
//           this.birthYear = 2025-age;

//         };
//         Person.prototype.introduce = function(){
//              console.log(`my name is ${this.firstName}, and i an ${age}, year old, i am was born in ${this.birthYear}`);
//         }
//         const person1 = new Person("Deepak", 21);
//         console.log(person1);
//         person1.introduce();


// const Person = function(name, age){
//     this.firstName = name;
//     this.age = age;
//     this.birthYear = 2025 - age;
// };

// Person.prototype.introduce = function(){
//     console.log(`My name is ${this.firstName}, and I am ${this.age} years old, I was born in ${this.birthYear}`);
// };

// const person1 = new Person("Deepak", 21);
// console.log(person1);
// person1.introduce();




class Person{
    constructor(name,age){
       this.firstName= name;
       this.age = age;
       this.birthYaer = 2025 - age;

    }
    intro(){
        console.log(`Hy my name is ${this.name}, and i am ${this.age}, years ols`)
    }
}
const person1 = new Person("Deepak", 21);
person1.intro();