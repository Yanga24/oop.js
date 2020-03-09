let Person = require("../src/oop");

let person = new Person(
  "Ryan",
  30,
  "male",
  "being a hardarse, agile, ssd hard drives"
);

describe("hello", function() {
  person.sayHello();
  it("should have name", function() {
    expect(person.name).toBe("Ryan");
  });

  it("should have age", function() {
    expect(person.age).toBe(30);
  });
 
  it("should have gender", function() {
    expect(person.gender).toBe("male");
  });
  it("should have interest", function() {
    expect(person.interest).toBe("being a hardarse, agile, ssd hard drives");
  });

  it("should contain a massage", function() {
    expect(person.sayHello).toBeDefined()
  });
});
