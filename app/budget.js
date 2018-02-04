"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BudgetBinding = /** @class */ (function () {
    function BudgetBinding(saveObject) {
        this.saveObject = saveObject;
        this.totalAmount = 0;
        this.setTotalAmountString();
        this.weeklyAmount = 200;
    }
    BudgetBinding.prototype.setTotalAmountString = function () {
        this.totalAmountString = '$' + this.totalAmount.toFixed(2);
    };
    BudgetBinding.prototype.updateTotal = function (successes) {
        var weeklyIncome = this.weeklyAmount;
        for (var failures = 0; failures + successes < 7; failures++) {
            weeklyIncome /= 2;
        }
        this.totalAmount += weeklyIncome;
        this.saveObject.setNumber("total", this.totalAmount);
        this.setTotalAmountString();
    };
    BudgetBinding.prototype.setTotal = function (newTotal) {
        this.totalAmount = parseFloat(newTotal.toFixed(2));
        this.setTotalAmountString();
    };
    return BudgetBinding;
}());
exports.BudgetBinding = BudgetBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFPSSx1QkFBb0IsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDNUIsQ0FBQztJQUVELDRDQUFvQixHQUFwQjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxTQUFpQjtRQUN6QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3JDLEdBQUcsQ0FBQSxDQUFDLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDO1lBQ3pELFlBQVksSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLElBQUksWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxRQUFnQjtRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1ZGdldEJpbmRpbmcge1xyXG5cclxuICAgIHByaXZhdGUgdG90YWxBbW91bnQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0b3RhbEFtb3VudFN0cmluZzogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyB3ZWVrbHlBbW91bnQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhdmVPYmplY3Q6IGFueSkge1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSAwXHJcbiAgICAgICAgdGhpcy5zZXRUb3RhbEFtb3VudFN0cmluZygpO1xyXG4gICAgICAgIHRoaXMud2Vla2x5QW1vdW50ID0gMjAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRvdGFsQW1vdW50U3RyaW5nKCkge1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnRTdHJpbmcgPSAnJCcgKyB0aGlzLnRvdGFsQW1vdW50LnRvRml4ZWQoMik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVG90YWwoc3VjY2Vzc2VzOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgd2Vla2x5SW5jb21lID0gdGhpcy53ZWVrbHlBbW91bnQ7XHJcbiAgICAgICAgZm9yKGxldCBmYWlsdXJlcyA9IDA7IGZhaWx1cmVzICsgc3VjY2Vzc2VzIDwgNzsgZmFpbHVyZXMrKykge1xyXG4gICAgICAgICAgICB3ZWVrbHlJbmNvbWUgLz0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgKz0gd2Vla2x5SW5jb21lO1xyXG4gICAgICAgIHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJ0b3RhbFwiLCB0aGlzLnRvdGFsQW1vdW50KTtcclxuICAgICAgICB0aGlzLnNldFRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG90YWwobmV3VG90YWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSBwYXJzZUZsb2F0KG5ld1RvdGFsLnRvRml4ZWQoMikpO1xyXG4gICAgICAgIHRoaXMuc2V0VG90YWxBbW91bnRTdHJpbmcoKTtcclxuICAgIH1cclxufSJdfQ==