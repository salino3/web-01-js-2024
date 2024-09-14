class Vehicle extends Item {
  constructor(name = "Object", material, brand, wheels, year, owner) {
    super(name, material, brand, wheels, year, owner);
    this.brand = brand;
    this.wheels = wheels;
    this.year = year;
    this.owner = owner;
  }
}
