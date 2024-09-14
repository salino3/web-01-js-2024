class Car extends Vehicle {
  constructor(name, material, brand, wheels, year, model, doors) {
    super(name, material, brand, wheels, year, model, doors);
    this.model = model;
    this.doors = doors;
  }
}

let car1 = new Car("Car", "Many", "Alfa Romeo", 4, 2022, "Giulietta", 5);

console.log("Car1: ", car1);
