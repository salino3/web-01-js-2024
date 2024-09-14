class Animal {
  constructor(name, sound, alive = true) {
    this.name = name;
    this.sound = sound;
    this.alive = alive;
  }

  getStatus() {
    return this.alive ? "Alive" : "Not Alive";
  }

  showInfo() {
    return `Name: ${this.name}\nSound: ${
      this.sound
    }\nStatus: ${this.getStatus()}`;
  }
}

const animal1 = new Animal("Cat", "Miau");
const animal2 = new Animal("Elephant", "Trumpet");
const animal3 = new Animal("Giraffe", "Grunt");

console.log(animal1.showInfo());
console.log(animal2.showInfo());
console.log(animal3.showInfo());

console.log(animal1.getStatus());
