class Person extends Animal {
  constructor(name, sound, energy, profession) {
    // Call the constructor of the parent class Animal
    super(name, sound, energy);
    // Add additional property specific to Person
    this.profession = profession;
  }

  showInfo() {
    return `${super.showInfo()}\nProfession: ${this.profession}`;
  }
}

const person1 = new Person("Person", "Speak", 120, "Veterinarian");
// delete person1.name;
// console.log(typeof person1.name); // undefined
const person2 = new Person("Person", "Speak", 100, "Teacher");
const person3 = new Person("Person", "Speak", -10, "Police");

console.log(person1.showInfo());
console.log(person1.energy);
console.log(person2.alive);
console.log(person3.alive);
