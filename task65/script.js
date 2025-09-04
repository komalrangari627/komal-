// OOP Example in JavaScript

class Car {
    constructor(name, wheels, doors, canDrive, canSwim, canFly) {
        this.name = name;
        this.wheels = wheels;
        this.doors = doors;
        this.canDrive = canDrive;
        this.canSwim = canSwim;
        this.canFly = canFly;
    }

    // Method to print car info
    getInfo() {
        console.log("Car name is: " + this.name);
        console.log("Car has " + this.doors + " doors");
        console.log("Car has " + this.wheels + " wheels");

        console.log(`Car ${this.canDrive ? "can drive ✅" : "can't drive ❌"}`);
        console.log(`Car ${this.canFly ? "can fly ✈️" : "can't fly ❌"}`);
        console.log(`Car ${this.canSwim ? "can swim 🚤" : "can't swim ❌"}`);
        console.log("------------------------------------");
    }

    // Action methods
    drive() {
        console.log(this.name + " is driving 🚗...");
    }

    stop() {
        console.log(this.name + " has stopped 🛑...");
    }

    reverse() {
        console.log(this.name + " is reversing ⏪...");
    }
}

// ✅ Create objects (instances)
let swift = new Car("Swift VXI", 4, 5, true, false, false);
let dizre = new Car("Dzire VXI", 4, 5, true, false, false);
let flyingCar = new Car("SkyRider", 4, 2, true, false, true);

// ✅ Display information
swift.getInfo();
dizre.getInfo();
flyingCar.getInfo();

// ✅ Call methods
swift.drive();
swift.stop();
swift.reverse();

console.log("------------------------------------");

// ✅ Working with Number and Date
let num1 = Number("100");   // convert string to number
let num2 = Number("20.5");
console.log("Converted numbers:", num1, num2);

let date = new Date("2025-01-01");
console.log("Date is:", date.toDateString());
