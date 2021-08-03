export { }
class BankAccount {
     private _bankName: string;

     get bankName(): string {
          return this._bankName;
     }

     set bankName(name) {
          this._bankName = name;
     }

}

let account=new BankAccount();
account.bankName="HDFC";
console.log(account.bankName);