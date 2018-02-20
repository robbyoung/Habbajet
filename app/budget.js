"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Dialogs = require("ui/dialogs");
var BudgetBinding = /** @class */ (function () {
    function BudgetBinding(saveObject) {
        this.saveObject = saveObject;
        this.totalAmount = 0;
        this.setTotalAmountString();
        this.weeklyAmount = 200;
    }
    BudgetBinding.prototype.setTotalAmountString = function () {
        this.totalAmountString = '$' + this.totalAmount.toFixed(2);
        this.saveObject.setNumber("total", this.totalAmount);
    };
    BudgetBinding.prototype.updateTotal = function (successes) {
        var weeklyIncome = this.weeklyAmount;
        for (var failures = 0; failures + successes < 7; failures++) {
            weeklyIncome /= 2;
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
        return isFinite(amount) && amount > 0 && amount < this.totalAmount;
    };
    return BudgetBinding;
}());
exports.BudgetBinding = BudgetBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEJBQTRCO0FBQzVCLG9DQUFzQztBQUV0QztJQU9JLHVCQUFvQixVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBRUQsNENBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksU0FBaUI7UUFDekIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNyQyxHQUFHLENBQUEsQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLFNBQVMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUN6RCxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxJQUFJLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLFFBQWdCO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUFBLGlCQVdDO1FBVkcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNYLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE9BQU8sRUFBRSx5QkFBeUI7WUFDbEMsWUFBWSxFQUFFLFNBQVM7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDVCxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsTUFBVztRQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkUsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQztBQWpEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1ZGdldEJpbmRpbmcge1xyXG5cclxuICAgIHByaXZhdGUgdG90YWxBbW91bnQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0b3RhbEFtb3VudFN0cmluZzogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyB3ZWVrbHlBbW91bnQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhdmVPYmplY3Q6IGFueSkge1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSAwXHJcbiAgICAgICAgdGhpcy5zZXRUb3RhbEFtb3VudFN0cmluZygpO1xyXG4gICAgICAgIHRoaXMud2Vla2x5QW1vdW50ID0gMjAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRvdGFsQW1vdW50U3RyaW5nKCkge1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnRTdHJpbmcgPSAnJCcgKyB0aGlzLnRvdGFsQW1vdW50LnRvRml4ZWQoMik7XHJcbiAgICAgICAgdGhpcy5zYXZlT2JqZWN0LnNldE51bWJlcihcInRvdGFsXCIsIHRoaXMudG90YWxBbW91bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRvdGFsKHN1Y2Nlc3NlczogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHdlZWtseUluY29tZSA9IHRoaXMud2Vla2x5QW1vdW50O1xyXG4gICAgICAgIGZvcihsZXQgZmFpbHVyZXMgPSAwOyBmYWlsdXJlcyArIHN1Y2Nlc3NlcyA8IDc7IGZhaWx1cmVzKyspIHtcclxuICAgICAgICAgICAgd2Vla2x5SW5jb21lIC89IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ICs9IHdlZWtseUluY29tZTtcclxuICAgICAgICB0aGlzLnNldFRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG90YWwobmV3VG90YWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSBwYXJzZUZsb2F0KG5ld1RvdGFsLnRvRml4ZWQoMikpO1xyXG4gICAgICAgIHRoaXMuc2V0VG90YWxBbW91bnRTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlUHVyY2hhc2UoKSB7XHJcbiAgICAgICAgRGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJOZXcgUHVyY2hhc2VcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJIb3cgbXVjaCBkaWQgeW91IHNwZW5kP1wiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ29uZmlybVwiLFxyXG4gICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwdXJjaGFzZUFtb3VudCA9IF8udG9OdW1iZXIocmVzdWx0LnRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy52ZXJpZnlQdXJjaGFzZShwdXJjaGFzZUFtb3VudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFRvdGFsKHRoaXMudG90YWxBbW91bnQgLSBwdXJjaGFzZUFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2ZXJpZnlQdXJjaGFzZShhbW91bnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBpc0Zpbml0ZShhbW91bnQpICYmIGFtb3VudCA+IDAgJiYgYW1vdW50IDwgdGhpcy50b3RhbEFtb3VudDtcclxuICAgIH1cclxufSJdfQ==