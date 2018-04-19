"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BudgetTabComponent = /** @class */ (function () {
    function BudgetTabComponent() {
        this.totalMoney = 0;
        this.setTotalMoneyString();
    }
    BudgetTabComponent.prototype.setTotalMoneyString = function () {
        if (this.totalMoney >= 0) {
            this.totalMoneyString = '$' + this.totalMoney.toFixed(2);
        }
        else {
            this.totalMoneyString = '-$' + (this.totalMoney * -1).toFixed(2);
        }
    };
    BudgetTabComponent = __decorate([
        core_1.Component({
            selector: "budget-tab",
            templateUrl: "views/habbajet-tab-view/budget-tab/budget-tab.html",
        }),
        __metadata("design:paramtypes", [])
    ], BudgetTabComponent);
    return BudgetTabComponent;
}());
exports.BudgetTabComponent = BudgetTabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQVExQztJQUlJO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELGdEQUFtQixHQUFuQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7SUFDTCxDQUFDO0lBZlEsa0JBQWtCO1FBTDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsb0RBQW9EO1NBQ3BFLENBQUM7O09BRVcsa0JBQWtCLENBZ0I5QjtJQUFELHlCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJidWRnZXQtdGFiXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL2J1ZGdldC10YWIuaHRtbFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1ZGdldFRhYkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgdG90YWxNb25leVN0cmluZzogc3RyaW5nO1xyXG4gICAgcHVibGljIHRvdGFsTW9uZXk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRvdGFsTW9uZXkgPSAwO1xyXG4gICAgICAgIHRoaXMuc2V0VG90YWxNb25leVN0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRvdGFsTW9uZXlTdHJpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxNb25leSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxNb25leVN0cmluZyA9ICckJyArIHRoaXMudG90YWxNb25leS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxNb25leVN0cmluZyA9ICctJCcgKyAodGhpcy50b3RhbE1vbmV5ICogLTEpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19