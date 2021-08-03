"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.rateOfIntrest = 2;
    }
    BankAccount.prototype.getLoan = function (value) {
        return value * this.rateOfIntrest;
    };
    return BankAccount;
}());
//inheritance
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rateOfIntrest = 3;
        return _this;
    }
    //Polymorphism
    //Override method 
    SavingsAccount.prototype.getLoan = function (value) {
        return value * this.rateOfIntrest;
    };
    return SavingsAccount;
}(BankAccount));
var savingsAccount = new SavingsAccount();
console.log(savingsAccount.getLoan(20));
//let bankAccount = new BankAccount();
//console.log(bankAccount.getLoan(20));
