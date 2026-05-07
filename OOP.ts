class Ride {
  rider: String;
  distance: number;

  constructor(rider: string, distance: number) {
    this.rider = rider;
    this.distance = distance;
  }

  calculateOil() {
    return this.distance * 0.5;
  }

  calculateFare() {
    return this.distance * 2;
  }
}

const ride1 = new Ride("john", 10);
// console.log(ride1);
// console.log(ride1.calculateOil());
// console.log(ride1.calculateFare());

//type Guard
function printId(id: number | string) {
  if (typeof id === "number") {
    // Type Guard
    console.log(id.toFixed(2));
  } else {
    console.log(id.toUpperCase());
  }
}
// printId(10);

type TDriver = { driverName: string };
type TAdmin = { role: string };

const driver: TDriver = { driverName: "Sam" };
const admin: TAdmin = { role: "Manager" };

function getUserInfo(user: TDriver | TAdmin) {
  if ("driverName" in user) {
    // Type Guard
    console.log(`Driver Name: ${user.driverName}`);
  } else {
    console.log(`Admin Role: ${user.role}`);
  }
}

// getUserInfo(driver);
// getUserInfo(admin);

//instance of
class Car {
  driver() {
    console.log("Driving a car");
  }
}

class Bike {
  ride() {
    console.log("Riding a bike");
  }
}

function operateVehicle(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    // Type Guard
    vehicle.driver();
  } else {
    vehicle.ride();
  }
}
// operateVehicle(new Car());
// operateVehicle(new Bike());

//access modifiers
class Driver {
  name: string;
  private nid: string;
  protected earnings: number;

  constructor(name: string, nid: string, earnings: number) {
    this.name = name;
    this.nid = nid;
    this.earnings = earnings;
  }
}

const driver2 = new Driver("Alice", "123456789", 5000);
// console.log(driver2.name); // Accessible
// console.log(driver2.nid); // Error: Property 'nid' is private and only accessible within class 'Driver'.
// console.log(driver2.earnings); // Error: Property 'earnings' is protected and only accessible within class 'Driver' and its subclasses.

class ProDriver extends Driver {
  certifiedDriver() {
    console.log(`Pro Driver: ${this.name}, Earnings: ${this.earnings}`); // Accessible due to protected access modifier
  }
  constructor() {
    super("Bob", "987654321", 10000);
    this.earnings = 15000;
  }
}

const nextGenDriver = new ProDriver();
// console.log(nextGenDriver);
// nextGenDriver.certifiedDriver();

class Wallet {
  private _balance: number = 0;
  get balance() {
    return this._balance;
  }
  set deposite(amount: number) {
    if (amount > 0) {
      this._balance += amount;
    }
  }
}

const wlt = new Wallet();
wlt.deposite = 500;
// console.log(`Balance: ${wlt.balance}`);






