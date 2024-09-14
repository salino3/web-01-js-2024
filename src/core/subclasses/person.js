class Person extends Animal {
  constructor(name, sound, energy, namePerson, profession, sex, age) {
    // Call the constructor of the parent class Animal
    super(name, sound, energy);
    // Add additional properties specific to Person
    this.namePerson = namePerson;
    this.profession = profession;
    this.sex = sex;
    this.age = age;
  }

  showInfo() {
    return `${super.showInfo()}\nProfession: ${this.profession}`;
  }
}

const person1 = new Person(
  "Person",
  "Speak",
  120,
  "Ana",
  "Veterinarian",
  "Woman",
  23
);
// delete person1.name;
// console.log(typeof person1.name); // undefined
const person2 = new Person("Person", "Speak", 100, "Joe", "Teacher", "Man", 40);
const person3 = new Person(
  "Person",
  "Speak",
  -10,
  "Tom",
  "Policeman",
  "Man",
  76
);

console.log(person1.showInfo());
console.log(person1.energy);
console.log(person2.alive);
console.log(person3.alive);