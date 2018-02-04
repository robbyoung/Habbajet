"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BudgetBinding = /** @class */ (function () {
    function BudgetBinding() {
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
        this.setTotalAmountString();
    };
    return BudgetBinding;
}());
exports.BudgetBinding = BudgetBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFPSTtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFFRCw0Q0FBb0IsR0FBcEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksU0FBaUI7UUFDekIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNyQyxHQUFHLENBQUEsQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLFNBQVMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUN6RCxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxJQUFJLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnVkZ2V0QmluZGluZyB7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3RhbEFtb3VudDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRvdGFsQW1vdW50U3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHdlZWtseUFtb3VudDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSAwXHJcbiAgICAgICAgdGhpcy5zZXRUb3RhbEFtb3VudFN0cmluZygpO1xyXG4gICAgICAgIHRoaXMud2Vla2x5QW1vdW50ID0gMjAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRvdGFsQW1vdW50U3RyaW5nKCkge1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnRTdHJpbmcgPSAnJCcgKyB0aGlzLnRvdGFsQW1vdW50LnRvRml4ZWQoMik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVG90YWwoc3VjY2Vzc2VzOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgd2Vla2x5SW5jb21lID0gdGhpcy53ZWVrbHlBbW91bnQ7XHJcbiAgICAgICAgZm9yKGxldCBmYWlsdXJlcyA9IDA7IGZhaWx1cmVzICsgc3VjY2Vzc2VzIDwgNzsgZmFpbHVyZXMrKykge1xyXG4gICAgICAgICAgICB3ZWVrbHlJbmNvbWUgLz0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgKz0gd2Vla2x5SW5jb21lO1xyXG4gICAgICAgIHRoaXMuc2V0VG90YWxBbW91bnRTdHJpbmcoKTtcclxuICAgIH1cclxufSJdfQ==