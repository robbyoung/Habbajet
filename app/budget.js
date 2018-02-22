"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Dialogs = require("ui/dialogs");
var BudgetBinding = /** @class */ (function () {
    function BudgetBinding(saveObject) {
        this.saveObject = saveObject;
        this.totalAmount = 0;
        this.setTotalAmountString();
    }
    BudgetBinding.prototype.setTotalAmountString = function () {
        this.totalAmountString = '$' + this.totalAmount.toFixed(2);
        this.saveObject.setNumber("total", this.totalAmount);
    };
    BudgetBinding.prototype.updateTotal = function (successes, value) {
        var weeklyMax = _.toNumber(value);
        var weeklyIncome = weeklyMax;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEJBQTRCO0FBQzVCLG9DQUFzQztBQUV0QztJQUtJLHVCQUFvQixVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsNENBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksU0FBaUIsRUFBRSxLQUFhO1FBQ3hDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzdCLEdBQUcsQ0FBQSxDQUFDLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDO1lBQ3pELFlBQVksSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLElBQUksWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsUUFBZ0I7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQUEsaUJBV0M7UUFWRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ1gsS0FBSyxFQUFFLGNBQWM7WUFDckIsT0FBTyxFQUFFLHlCQUF5QjtZQUNsQyxZQUFZLEVBQUUsU0FBUztTQUN4QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNULElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLENBQUM7WUFDckQsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxNQUFXO1FBQ3RCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2RSxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDO0FBL0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQnVkZ2V0QmluZGluZyB7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3RhbEFtb3VudDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRvdGFsQW1vdW50U3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzYXZlT2JqZWN0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gMFxyXG4gICAgICAgIHRoaXMuc2V0VG90YWxBbW91bnRTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb3RhbEFtb3VudFN0cmluZygpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50U3RyaW5nID0gJyQnICsgdGhpcy50b3RhbEFtb3VudC50b0ZpeGVkKDIpO1xyXG4gICAgICAgIHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJ0b3RhbFwiLCB0aGlzLnRvdGFsQW1vdW50KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUb3RhbChzdWNjZXNzZXM6IG51bWJlciwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB3ZWVrbHlNYXggPSBfLnRvTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICBsZXQgd2Vla2x5SW5jb21lID0gd2Vla2x5TWF4O1xyXG4gICAgICAgIGZvcihsZXQgZmFpbHVyZXMgPSAwOyBmYWlsdXJlcyArIHN1Y2Nlc3NlcyA8IDc7IGZhaWx1cmVzKyspIHtcclxuICAgICAgICAgICAgd2Vla2x5SW5jb21lIC89IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ICs9IHdlZWtseUluY29tZTtcclxuICAgICAgICB0aGlzLnNldFRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG90YWwobmV3VG90YWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSBwYXJzZUZsb2F0KG5ld1RvdGFsLnRvRml4ZWQoMikpO1xyXG4gICAgICAgIHRoaXMuc2V0VG90YWxBbW91bnRTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlUHVyY2hhc2UoKSB7XHJcbiAgICAgICAgRGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJOZXcgUHVyY2hhc2VcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJIb3cgbXVjaCBkaWQgeW91IHNwZW5kP1wiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ29uZmlybVwiLFxyXG4gICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwdXJjaGFzZUFtb3VudCA9IF8udG9OdW1iZXIocmVzdWx0LnRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy52ZXJpZnlQdXJjaGFzZShwdXJjaGFzZUFtb3VudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFRvdGFsKHRoaXMudG90YWxBbW91bnQgLSBwdXJjaGFzZUFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2ZXJpZnlQdXJjaGFzZShhbW91bnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBpc0Zpbml0ZShhbW91bnQpICYmIGFtb3VudCA+IDAgJiYgYW1vdW50IDwgdGhpcy50b3RhbEFtb3VudDtcclxuICAgIH1cclxufSJdfQ==