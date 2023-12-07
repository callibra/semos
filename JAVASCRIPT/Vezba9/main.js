// Base class
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`This is a ${this.make} ${this.model}.`);
    }
}

// First set of successors
class Car extends Vehicle {
    constructor(make, model, numDoors) {
        super(make, model);
        this.numDoors = numDoors;
    }

    startEngine() {
        console.log(`${this.make} ${this.model}'s engine started.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, numWheels) {
        super(make, model);
        this.numWheels = numWheels;
    }

    revEngine() {
        console.log(`${this.make} ${this.model}'s is speed motorcycle.`);
    }
}

// Second set of successors
class Truck extends Vehicle {
    constructor(make, model, payloadCapacity) {
        super(make, model);
        this.payloadCapacity = payloadCapacity;
    }

    loadCargo() {
        console.log(`${this.make} ${this.model} is loading cargo.`);
    }
}

class Bicycle extends Vehicle {
    constructor(make, model, type) {
        super(make, model);
        this.type = type;
    }

    pedal() {
        console.log(`${this.make} ${this.model} is pedaling.`);
    }
}

// Instances of the classes
const car = new Car('Toyota', 'Corolla', 4);
const motorcycle = new Motorcycle('Suzuki', 'Hayabusa', 2);

const truck = new Truck('Ford', 'Maverick', '1000 kg');
const bicycle = new Bicycle('Trek', 'Mountain Bike', 'Off-road');

// Using methods
car.displayInfo();
car.startEngine();

motorcycle.displayInfo();
motorcycle.revEngine();

truck.displayInfo();
truck.loadCargo();

bicycle.displayInfo();
bicycle.pedal();