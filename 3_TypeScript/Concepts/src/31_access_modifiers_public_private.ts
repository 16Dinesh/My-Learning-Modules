class BankAccount {
  public owner: string;

  private balance = 0;

  #otp = 123456;

  constructor(owner: string) {
    this.owner = owner;
  }

  deposit(amt: number) {
    if (amt <= 0) throw new Error("amount must be positive");
    this.balance += amt;
  }

  getBalance() {
    return this.balance;
  }

  verifyOtp(code: number) {
    return this.#otp === code; //only accessibjle inside the class
  }
}

const acc = new BankAccount("Sangam");
acc.deposit(5000);
console.log(acc.getBalance());

// acc.balance
// acc.#otp


// PUBLIC 

class User {
  public name: string; // public (explicit)
  age: number;         // public (implicit)

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const u = new User("Zeke", 21);

console.log(u.name); // OK
console.log(u.age);  // OK

// protected

class Account {
  public owner: string;
  private balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const account = new Account("Zeke", 100);

account.owner;          // OK
account.getBalance();   // OK
