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
    BudgetBinding.prototype.updateTotal = function (successes, value, factor, slack) {
        if (successes + slack === 0) {
            return;
        }
        var weeklyMax = _.toNumber(value);
        var weeklyIncome = weeklyMax;
        for (var failures = slack; failures + successes < 7; failures++) {
            weeklyIncome /= factor;
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
        return isFinite(amount) && amount > 0 && amount <= this.totalAmount;
    };
    return BudgetBinding;
}());
exports.BudgetBinding = BudgetBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEJBQTRCO0FBQzVCLG9DQUFzQztBQUV0QztJQUtJLHVCQUFvQixVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsNENBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksU0FBaUIsRUFBRSxLQUFhLEVBQUUsTUFBYyxFQUFFLEtBQWE7UUFDdkUsRUFBRSxDQUFBLENBQUMsU0FBUyxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUM3QixHQUFHLENBQUEsQ0FBQyxJQUFJLFFBQVEsR0FBRyxLQUFLLEVBQUUsUUFBUSxHQUFHLFNBQVMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUM3RCxZQUFZLElBQUksTUFBTSxDQUFDO1FBQzNCLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxJQUFJLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLFFBQWdCO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUFBLGlCQVdDO1FBVkcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNYLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE9BQU8sRUFBRSx5QkFBeUI7WUFDbEMsWUFBWSxFQUFFLFNBQVM7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDVCxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsTUFBVztRQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDeEUsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQztBQWxEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1ZGdldEJpbmRpbmcge1xyXG5cclxuICAgIHByaXZhdGUgdG90YWxBbW91bnQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0b3RhbEFtb3VudFN0cmluZzogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2F2ZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IDBcclxuICAgICAgICB0aGlzLnNldFRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG90YWxBbW91bnRTdHJpbmcoKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudFN0cmluZyA9ICckJyArIHRoaXMudG90YWxBbW91bnQudG9GaXhlZCgyKTtcclxuICAgICAgICB0aGlzLnNhdmVPYmplY3Quc2V0TnVtYmVyKFwidG90YWxcIiwgdGhpcy50b3RhbEFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVG90YWwoc3VjY2Vzc2VzOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcsIGZhY3RvcjogbnVtYmVyLCBzbGFjazogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYoc3VjY2Vzc2VzICsgc2xhY2sgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd2Vla2x5TWF4ID0gXy50b051bWJlcih2YWx1ZSk7XHJcbiAgICAgICAgbGV0IHdlZWtseUluY29tZSA9IHdlZWtseU1heDtcclxuICAgICAgICBmb3IobGV0IGZhaWx1cmVzID0gc2xhY2s7IGZhaWx1cmVzICsgc3VjY2Vzc2VzIDwgNzsgZmFpbHVyZXMrKykge1xyXG4gICAgICAgICAgICB3ZWVrbHlJbmNvbWUgLz0gZmFjdG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCArPSB3ZWVrbHlJbmNvbWU7XHJcbiAgICAgICAgdGhpcy5zZXRUb3RhbEFtb3VudFN0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRvdGFsKG5ld1RvdGFsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gcGFyc2VGbG9hdChuZXdUb3RhbC50b0ZpeGVkKDIpKTtcclxuICAgICAgICB0aGlzLnNldFRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVB1cmNoYXNlKCkge1xyXG4gICAgICAgIERpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTmV3IFB1cmNoYXNlXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSG93IG11Y2ggZGlkIHlvdSBzcGVuZD9cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkNvbmZpcm1cIixcclxuICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHVyY2hhc2VBbW91bnQgPSBfLnRvTnVtYmVyKHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudmVyaWZ5UHVyY2hhc2UocHVyY2hhc2VBbW91bnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUb3RhbCh0aGlzLnRvdGFsQW1vdW50IC0gcHVyY2hhc2VBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmVyaWZ5UHVyY2hhc2UoYW1vdW50OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gaXNGaW5pdGUoYW1vdW50KSAmJiBhbW91bnQgPiAwICYmIGFtb3VudCA8PSB0aGlzLnRvdGFsQW1vdW50O1xyXG4gICAgfVxyXG59Il19