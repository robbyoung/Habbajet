"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Dialogs = require("ui/dialogs");
var BudgetBinding = /** @class */ (function () {
    function BudgetBinding(saveObject) {
        this.saveObject = saveObject;
        var totalAmount = this.saveObject.getNumber("total");
        if (totalAmount === undefined) {
            this.totalAmount = 0;
        }
        else {
            this.totalAmount = totalAmount;
        }
        this.setTotalAmountString();
    }
    BudgetBinding.prototype.setTotalAmountString = function () {
        if (this.totalAmount < 0) {
            this.totalAmountString = '-$' + (this.totalAmount * -1).toFixed(2);
        }
        else {
            this.totalAmountString = '$' + this.totalAmount.toFixed(2);
        }
        this.saveObject.setNumber("total", this.totalAmount);
    };
    BudgetBinding.prototype.updateTotal = function (successes, value, factor, slack) {
        if (successes + slack === 0) {
            return;
        }
        var weeklyMax = _.toNumber(value);
        var weeklyIncome = weeklyMax;
        for (var failures = slack; failures + successes < 7; failures++) {
            weeklyIncome /= factor;
        }
        if (this.totalAmount < 0) {
            weeklyIncome *= 0.9;
        }
        this.totalAmount += weeklyIncome;
        this.setTotalAmountString();
    };
    BudgetBinding.prototype.setTotal = function (newTotal) {
        this.totalAmount = parseFloat(newTotal.toFixed(2));
        this.setTotalAmountString();
    };
    BudgetBinding.prototype.makePurchase = function () {
        var _this = this;
        Dialogs.prompt({
            title: "New Purchase",
            message: "How much did you spend?",
            okButtonText: "Confirm",
        }).then(function (result) {
            var purchaseAmount = _.toNumber(result.text);
            if (_this.verifyPurchase(purchaseAmount)) {
                _this.setTotal(_this.totalAmount - purchaseAmount);
            }
        });
    };
    BudgetBinding.prototype.verifyPurchase = function (amount) {
        return isFinite(amount) && amount > 0;
    };
    return BudgetBinding;
}());
exports.BudgetBinding = BudgetBinding;
