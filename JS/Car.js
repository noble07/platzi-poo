class Car {
  id;
  license;
  driver;
  passenger;

  constructor(license, driver) {
    this.license = license;
    this.driver = driver;
  }

  printDataCar() {
    console.log(
      `
        License: ${this.license} \n
        Driver Name: ${this.driver.name} \n
        Driver Document: ${this.driver.document}\n
        Car Passengers: ${this.passenger}\n
      `
    );
  }
}

module.exports = Car;
