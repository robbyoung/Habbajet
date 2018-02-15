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
            if (purchaseAmount !== undefined) {
                _this.setTotal(_this.totalAmount - purchaseAmount);
            }
        });
    };
    return BudgetBinding;
}());
exports.BudgetBinding = BudgetBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEJBQTRCO0FBQzVCLG9DQUFzQztBQUV0QztJQU9JLHVCQUFvQixVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBRUQsNENBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksU0FBaUI7UUFDekIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNyQyxHQUFHLENBQUEsQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLFNBQVMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUN6RCxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxJQUFJLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLFFBQWdCO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUFBLGlCQVdDO1FBVkcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNYLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE9BQU8sRUFBRSx5QkFBeUI7WUFDbEMsWUFBWSxFQUFFLFNBQVM7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDVCxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQVcsQ0FBQztZQUN6RCxFQUFFLENBQUEsQ0FBQyxjQUFjLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0M7QUE3Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0ICogYXMgRGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCdWRnZXRCaW5kaW5nIHtcclxuXHJcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdG90YWxBbW91bnRTdHJpbmc6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgd2Vla2x5QW1vdW50OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzYXZlT2JqZWN0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gMFxyXG4gICAgICAgIHRoaXMuc2V0VG90YWxBbW91bnRTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLndlZWtseUFtb3VudCA9IDIwMDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb3RhbEFtb3VudFN0cmluZygpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50U3RyaW5nID0gJyQnICsgdGhpcy50b3RhbEFtb3VudC50b0ZpeGVkKDIpO1xyXG4gICAgICAgIHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJ0b3RhbFwiLCB0aGlzLnRvdGFsQW1vdW50KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUb3RhbChzdWNjZXNzZXM6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB3ZWVrbHlJbmNvbWUgPSB0aGlzLndlZWtseUFtb3VudDtcclxuICAgICAgICBmb3IobGV0IGZhaWx1cmVzID0gMDsgZmFpbHVyZXMgKyBzdWNjZXNzZXMgPCA3OyBmYWlsdXJlcysrKSB7XHJcbiAgICAgICAgICAgIHdlZWtseUluY29tZSAvPSAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCArPSB3ZWVrbHlJbmNvbWU7XHJcbiAgICAgICAgdGhpcy5zZXRUb3RhbEFtb3VudFN0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRvdGFsKG5ld1RvdGFsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gcGFyc2VGbG9hdChuZXdUb3RhbC50b0ZpeGVkKDIpKTtcclxuICAgICAgICB0aGlzLnNldFRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVB1cmNoYXNlKCkge1xyXG4gICAgICAgIERpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTmV3IFB1cmNoYXNlXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSG93IG11Y2ggZGlkIHlvdSBzcGVuZD9cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkNvbmZpcm1cIixcclxuICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHVyY2hhc2VBbW91bnQgPSBfLnRvTnVtYmVyKHJlc3VsdC50ZXh0KSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBpZihwdXJjaGFzZUFtb3VudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUb3RhbCh0aGlzLnRvdGFsQW1vdW50IC0gcHVyY2hhc2VBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=