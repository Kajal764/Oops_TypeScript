"use strict";
exports.__esModule = true;
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.prototype.chargeFee = function (amount) {
        return amount * 100;
    };
    return BankAccount;
}());
var fees = new BankAccount();
console.log(fees.chargeFee(10));
