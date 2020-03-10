class Person {
  
  constructor(name, age, gender, interest) {
    
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
  }
  
  sayHello() {
    let hello = `Hello, my name is ${this.name} I am ${this.age} years old. I am a ${this.gender} My interests are being a ${this.interest}.`;
    return hello;
  }
}

let Ryan = new Person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  "ssd hard drives"
]);

let greeting = Ryan.sayHello();
console.log(greeting)


module.exports = Person;
