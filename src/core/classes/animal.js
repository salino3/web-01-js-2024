class Animal {
  constructor(name, sound, energy = 100) {
    this.name = name;
    this.sound = sound;
    this.energy = energy;
    this.alive = this.energy > 0; // Set alive based on initial energy
  }

  getStatus() {
    return this.alive ? "Alive" : "Not Alive";
  }

  setEnergy(energyvalue) {
    if (energyvalue === undefined) {
      return (this.energy = 100);
    } else {
      this.energy = energyvalue;
      this.alive = this.energy > 0;
      return this.energy;
    }
  }

  showInfo() {
    return `Name: ${this.name || ".."}\nSound: ${
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
