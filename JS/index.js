/** Ejecutar con Node */
const Account = require("./Account");
const Car = require("./Car");

const car = new Car("AW456", new Account("Andres Herrera", "AND123"));
car.passenger = 4;
car.printDataCar();
