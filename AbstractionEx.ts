export { }

//Abstraction is a process where you show only “relevant” data 
//and “hide” unnecessary details of an object from the user.

interface Fee {
     chargeFee(amount: number):number;
}

class BankAccount implements Fee {
     chargeFee(amount: number) :number{
          return amount * 100;
     }
}

let fees: Fee = new BankAccount();
console.log(fees.chargeFee(10));