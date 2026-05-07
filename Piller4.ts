// pollymorphism
class SpecialVehicle {
  move() {
    console.log("The vehicle is moving");
  }
}

class Car extends SpecialVehicle {
  move() {
    console.log("The car is driving");
  }
}

class Bike extends SpecialVehicle {
  move() {
    console.log("The bike is riding");
  }
}

const object1 = new Car();
const object2 = new Bike();
// object1.move();
// object2.move();




//abstract class
abstract class Payment {
  abstract processPayment(amount: number): void;

  printReceipt(amount: number): void {
    console.log(`Payment of $${amount} processed.`);
  }
}

class CreditCardPayment extends Payment {
  processPayment(amount: number): void {
    console.log(`Credit Card Payment of $${amount} processed.`);
  }
}

const payment1 = new CreditCardPayment();
// payment1.processPayment(100);
// payment1.printReceipt(400);



//encaptulation
class Account {
    private balance: number = 0;

    deposit(amount: number) {
        amount > 0 ? this.balance += amount : this.balance;
    }

    getBalance() {
        return this.balance;
    }
}

const myAccount = new Account();
myAccount.deposit(100);
myAccount.deposit(-50);
// console.log(myAccount.getBalance()); 