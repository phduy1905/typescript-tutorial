# TRAINING PROCESS

---

1. OOP

- Understand OOP principles: encapsulation, abstraction, inheritance, polymorphism

  - Encapsulation: By using private, protected access modifier, properties inside a class could not be modified from outside.

  ```
  class BankAccount {

  public minimumBalance: number;

  get balance(): number {
    return this._balance;
  }
  private _balance: number;

  deposit(amount: number): number {
    this._balance = this._balance + amount;
    return this._balance;
  }

  withdraw(amount: number): number {
    if (amount <= this.minimumBalance) {
      this._balance = this._balance - amount;
      return this._balance;
    }
  }
  }

  ```

  the \_balance property is encapsulated because it is private. Only code within the Bank Account class can modify it.

  - Abstraction: Abstract class and interface only define general properties or methods, sub-class will base on those rules to implement interface or extend abstract class.

```
  interface Fee {
    chargeFee(amount: number );
  }

  // parent BankAccount and sibling SavingsAccount do not implement Fee interface
  class BankAccount { ... }
  class SavingsAccount extends BankAccount { ... }

  // checking implements Fee
  class CheckingAccount extends BankAccount implements Fee {
    chargeFee(amount: number) {}
  }

```

CheckingAccount can implements Fee interface while its parent class BankAccount or its sibling SavingsAccount don't need to implement this interface.

- Inheritance: Subclass extends the properties and methods of superclass.

```
class BankAccount {
 get balance(): number {
     return this._balance;
 }
 private _balance: number;

 deposit(amount: number): number {
     return this._balance + amount;
 }

 withdraw(amount: number): number {
     if (amount < this._balance ){
         return this._balance - amount;
     }
     else {
         throw new Error("The withdraw amount must be less or equal than the balance.")
     }
 }
}
```

You can inherit the BankAccount class by using the 'extends' keyword in child class.

CheckingAccount inherits all the code from the parent class, then adds its own code to apply a monthly fee.

SavingsAccount calculates interest.

```
class CheckingAccount extends BankAccount {
    protected monthlyFeeAmount: number = 5.00;
    chargeFee(): number {
        return this.monthlyFeeAmount;
    }
}

class SavingsAccount extends BankAccount {
    private _interestRate;
    public calculateInterest(){
        return this.balance * this._interestRate;
    }
}

```

- Polymorphism: Multiple classes inherit from a parent and override the same functionality
  Polymorphism allows you to specify discrete logic that is customized for each specific child class.

```
  class CheckingAccount {
    open(initialAmount: number) {
      // code to open account and save in database
    }
  }

  class BusinessCheckingAccount extends CheckingAccount {
    open(initialAmount: number) {
      if (initialAmount < 1000) {
        throw new Error("Business accounts must have an initial deposit of 1.000 Euros")
      }
      super.open(initialAmount);
    }
  }

  class PersonalCheckingAccount extends CheckingAccount {
    open(initialAmount: number) {
      if (initialAmount <= 0) {
        throw new Error("Personal accounts must have an initial deposit of more than zero Euros")
      }
      super.open(initialAmount);
    }
  }

  Both BusinessCheckingAccount and PersonalCheckingAccount override the open function to return different result.
```

2. Solid Principle

- Single responsibility principle: each class just handle one work
- Open / Close Principle: open for extending, close for modifying
- Liskov Substitution Principle: objects of subclasses should behave in the same way as objects of superclass.
- Interface Segregation Principle: Interface should be devided to be smaller and more specific
- Dependancy Inversion Principle: High-level module should not depend on low-level module. Both types should depend on abstraction.

3. TypeScript: Learning basic properties of TypeScript:

- Variable Declaration: let/const name:type = value;
- Dynamic (any) types
- Type Aliases: type StringOrNum = string | number;
- Function Signature: let name: (param: type) => number / string / void;
- DOM & Type Casting: const form = document.querySelector('form') as HTMLFormElement;
- Class:

```
class name{
var1: type;
var2: type;

constructor(a: type, b: type){
  this.var1 = a;
  this.var2 = b;
}

methods(){
// Code
}
}
```

- Public, private & protected modifier
- Interface: Enforce certain structure of a class or object

```
  interface IEmployee {
      empCode: number;
      name: string;
      getSalary:(number)=>number;
  }

  class Employee implements IEmployee {
      empCode: number;
      name: string;

      constructor(code: number, name: string) {
                  this.empCode = code;
                  this.name = name;
      }

      getSalary(empCode:number):number {
          return 20000;
      }
  }
```

4. Node JS
5. Nest JS
6. Design Pattern
7. Database Design
