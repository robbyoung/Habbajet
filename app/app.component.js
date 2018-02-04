"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var habbajet_1 = require("./habbajet");
var budget_1 = require("./budget");
var Dialogs = require("ui/dialogs");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.saveObject = require("application-settings");
        this.budget = new budget_1.BudgetBinding(this.saveObject);
        this.habbajetList = [];
        this.loadSavedData();
    };
    AppComponent.prototype.loadSavedData = function () {
        var totalValue = this.saveObject.getNumber("total");
        if (totalValue !== undefined) {
            this.budget.setTotal(totalValue);
            var habbajetCount = this.saveObject.getNumber("habbajetCount");
            for (var i = 0; i < habbajetCount; i++) {
                this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, i, "", false));
            }
        }
        else {
            var name_1 = "First Habbajet";
            this.habbajetIndex = this.habbajetList.length;
            this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, this.habbajetIndex, name_1, true));
            this.habbajet = this.habbajetList[this.habbajetIndex];
            this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
            // this.newHabbajet();
        }
    };
    AppComponent.prototype.newHabbajet = function () {
        var _this = this;
        var name;
        Dialogs.prompt({
            title: "Name the new Habbajet",
            okButtonText: "Confirm",
        }).then(function (result) {
            name = result.text;
            _this.habbajetIndex = _this.habbajetList.length;
            _this.habbajetList.push(new habbajet_1.HabbajetBinding(_this.budget, _this.saveObject, _this.habbajetIndex, name, true));
            _this.habbajet = _this.habbajetList[_this.habbajetIndex];
            _this.saveObject.setNumber("habbajetCount", _this.habbajetList.length);
        });
    };
    AppComponent.prototype.nextHabbajet = function () {
        this.habbajetIndex = (this.habbajetIndex + 1) % this.habbajetList.length;
        this.habbajet = this.habbajetList[this.habbajetIndex];
    };
    AppComponent.prototype.onCheckboxTap = function (args) {
        this.habbajet.dailyUpdate(args.index);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./habbajet.html",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUV6QyxvQ0FBc0M7QUFRdEM7SUFBQTtJQTBEQSxDQUFDO0lBbkRDLCtCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxzQkFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFFLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxFQUFFLENBQUEsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLDBCQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxRixDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBTSxNQUFJLEdBQUcsZ0JBQWdCLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLDBCQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUNwRSxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckUsc0JBQXNCO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUFBLGlCQWVDO1FBZEMsSUFBSSxJQUFZLENBQUM7UUFDakIsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNiLEtBQUssRUFBRSx1QkFBdUI7WUFDOUIsWUFBWSxFQUFFLFNBQVM7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDYixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNuQixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQzlDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksMEJBQWUsQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxVQUFVLEVBQ3BFLEtBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDekUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQUk7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUF6RFUsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGlCQUFpQjtTQUMvQixDQUFDO09BRVcsWUFBWSxDQTBEeEI7SUFBRCxtQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEhhYmJhamV0QmluZGluZyB9IGZyb20gXCIuL2hhYmJhamV0XCI7XG5pbXBvcnQgeyBDaGVja2JveEJpbmRpbmcgfSBmcm9tIFwiLi9jaGVja2JveFwiO1xuaW1wb3J0IHsgQnVkZ2V0QmluZGluZyB9IGZyb20gXCIuL2J1ZGdldFwiO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICogYXMgRGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaGFiYmFqZXQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBoYWJiYWpldExpc3Q6IEhhYmJhamV0QmluZGluZ1tdO1xuICBwdWJsaWMgaGFiYmFqZXQ6IEhhYmJhamV0QmluZGluZztcbiAgcHVibGljIGhhYmJhamV0SW5kZXg6IG51bWJlcjtcbiAgcHVibGljIGJ1ZGdldDogQnVkZ2V0QmluZGluZztcbiAgcHVibGljIHNhdmVPYmplY3Q6IGFueTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNhdmVPYmplY3QgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG4gICAgdGhpcy5idWRnZXQgPSBuZXcgQnVkZ2V0QmluZGluZyh0aGlzLnNhdmVPYmplY3QpO1xuICAgIHRoaXMuaGFiYmFqZXRMaXN0ID1bXTtcbiAgICB0aGlzLmxvYWRTYXZlZERhdGEoKTtcbiAgfVxuXG4gIGxvYWRTYXZlZERhdGEoKSB7XG4gICAgY29uc3QgdG90YWxWYWx1ZSA9IHRoaXMuc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJ0b3RhbFwiKTtcbiAgICBpZih0b3RhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYnVkZ2V0LnNldFRvdGFsKHRvdGFsVmFsdWUpO1xuICAgICAgY29uc3QgaGFiYmFqZXRDb3VudCA9IHRoaXMuc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIpO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGhhYmJhamV0Q291bnQ7IGkrKykge1xuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKG5ldyBIYWJiYWpldEJpbmRpbmcodGhpcy5idWRnZXQsIHRoaXMuc2F2ZU9iamVjdCwgaSwgXCJcIiwgZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZSA9IFwiRmlyc3QgSGFiYmFqZXRcIjtcbiAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aDtcbiAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0QmluZGluZyh0aGlzLmJ1ZGdldCwgdGhpcy5zYXZlT2JqZWN0LFxuICAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4LCBuYW1lLCB0cnVlKSk7XG4gICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcbiAgICAgIHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIsIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCk7XG4gICAgICAvLyB0aGlzLm5ld0hhYmJhamV0KCk7XG4gICAgfVxuICB9XG5cbiAgbmV3SGFiYmFqZXQoKSB7XG4gICAgbGV0IG5hbWU6IHN0cmluZztcbiAgICBEaWFsb2dzLnByb21wdCh7XG4gICAgICB0aXRsZTogXCJOYW1lIHRoZSBuZXcgSGFiYmFqZXRcIixcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJDb25maXJtXCIsXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBuYW1lID0gcmVzdWx0LnRleHQ7XG4gICAgICB0aGlzLmhhYmJhamV0SW5kZXggPSB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XG4gICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKG5ldyBIYWJiYWpldEJpbmRpbmcodGhpcy5idWRnZXQsIHRoaXMuc2F2ZU9iamVjdCxcbiAgICAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCwgbmFtZSwgdHJ1ZSkpO1xuICAgICAgdGhpcy5oYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0W3RoaXMuaGFiYmFqZXRJbmRleF07XG4gICAgICB0aGlzLnNhdmVPYmplY3Quc2V0TnVtYmVyKFwiaGFiYmFqZXRDb3VudFwiLCB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGgpO1xuICAgIH0pO1xuXG4gICAgXG4gIH1cblxuICBuZXh0SGFiYmFqZXQoKSB7XG4gICAgdGhpcy5oYWJiYWpldEluZGV4ID0gKHRoaXMuaGFiYmFqZXRJbmRleCArIDEpICUgdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoO1xuICAgIHRoaXMuaGFiYmFqZXQgPSB0aGlzLmhhYmJhamV0TGlzdFt0aGlzLmhhYmJhamV0SW5kZXhdO1xuICB9XG5cbiAgb25DaGVja2JveFRhcChhcmdzKSB7XG4gICAgdGhpcy5oYWJiYWpldC5kYWlseVVwZGF0ZShhcmdzLmluZGV4KTtcbiAgfVxufVxuIl19