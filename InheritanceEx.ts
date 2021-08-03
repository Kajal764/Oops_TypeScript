export { }

class BankAccount {
     public balance: number;
     constructor(balance: number) {
          this.balance = balance;
     }
}

//inheritance
class SavingsAccount extends BankAccount {
     constructor(balance: number) {
          super(balance)
     }
}

let savingsAccount = new SavingsAccount(30000);
console.log(savingsAccount.balance);