"use strict";
exports.__esModule = true;
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    Object.defineProperty(BankAccount.prototype, "bankName", {
        get: function () {
            return this._bankName;
        },
        set: function (name) {
            this._bankName = name;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var account = new BankAccount();
account.bankName = "HDFC";
console.log(account.bankName);
