export {}

class BankAccount {
     public rateOfIntrest = 2;
     getLoan(value: number) {
          return value * this.rateOfIntrest;
     }
}
//inheritance
class SavingsAccount extends BankAccount {
     public rateOfIntrest = 3;

     //Polymorphism
     //Override method 
     getLoan(value: number) {
          return value * this.rateOfIntrest;
     }

}

let savingsAccount = new SavingsAccount();
console.log(savingsAccount.getLoan(20));

//let bankAccount = new BankAccount();
//console.log(bankAccount.getLoan(20));



