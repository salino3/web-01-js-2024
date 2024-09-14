class Vehicle extends Item {
  constructor(name = "Object", material, brand, wheels, year) {
    super(name, material, brand, wheels, year);
    this.brand = brand;
    this.wheels = wheels;
    this.year = year;
  }
}
