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
var habbajet_1 = require("./habbajet");
var budget_1 = require("./budget");
var _ = require("lodash");
var frame_counts_1 = require("./frame-counts");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.saveObject = require("application-settings");
        this.budget = new budget_1.BudgetBinding(this.saveObject);
        this.frames = new frame_counts_1.FrameCounts();
        this.habbajetList = [];
        this.editing = false;
        this.newHabbajetName = "";
        this.newHabbajetValue = "";
        this.loadSavedData();
    }
    AppComponent.prototype.loadSavedData = function () {
        var totalValue = this.saveObject.getNumber("total");
        if (totalValue !== undefined) {
            // this.date = Moment('26/02/2018', 'DD/MM/YY').format();
            this.budget.setTotal(totalValue);
            var habbajetCount = this.saveObject.getNumber("habbajetCount");
            for (var i = 0; i < habbajetCount; i++) {
                this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, i, "", false, this.frames, ""));
            }
            if (habbajetCount > 0) {
                this.habbajetIndex = 0;
                this.habbajet = this.habbajetList[this.habbajetIndex];
            }
        }
        this.habbajetCount = this.habbajetList.length + 1;
    };
    AppComponent.prototype.newHabbajet = function () {
        if (this.isValidName() && this.isValidValue()) {
            this.habbajetIndex = this.habbajetList.length;
            this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, this.habbajetIndex, this.newHabbajetName, true, this.frames, this.newHabbajetValue));
            this.habbajet = this.habbajetList[this.habbajetIndex];
            this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
        }
        this.habbajetCount = this.habbajetList.length + 1;
        this.newHabbajetName = '';
        this.newHabbajetValue = '';
    };
    AppComponent.prototype.selectHabbajet = function (index) {
        if (this.habbajetList.length > index) {
            this.habbajetIndex = index;
            this.habbajet = this.habbajetList[this.habbajetIndex];
        }
    };
    AppComponent.prototype.onNewHabbajetTap = function () {
        this.habbajet = undefined;
    };
    AppComponent.prototype.onCheckboxTap = function (args) {
        this.habbajet.dailyUpdate(args.index);
    };
    AppComponent.prototype.onPurchaseTap = function (args) {
        this.budget.makePurchase();
    };
    AppComponent.prototype.check = function () {
        if (this.editing) {
            this.editing = false;
            this.habbajet.update(this.newHabbajetName, this.newHabbajetValue);
            this.newHabbajetName = '';
            this.newHabbajetValue = '';
        }
        else {
            this.habbajet.dailyUpdate(true);
        }
    };
    AppComponent.prototype.cross = function () {
        if (this.editing) {
            this.editing = false;
            this.newHabbajetName = '';
            this.newHabbajetValue = '';
        }
        else {
            this.habbajet.dailyUpdate(false);
        }
    };
    AppComponent.prototype.onImageTap = function () {
        this.habbajet.act();
    };
    AppComponent.prototype.isValidName = function () {
        return this.newHabbajetName.length > 0;
    };
    AppComponent.prototype.isValidValue = function () {
        var value = _.toNumber(this.newHabbajetValue);
        return isFinite(value) && value > 0;
    };
    AppComponent.prototype.nameChange = function (args) {
        var textField = args.object;
        this.newHabbajetName = textField.text;
    };
    AppComponent.prototype.valueChange = function (args) {
        var textField = args.object;
        this.newHabbajetValue = textField.text;
    };
    AppComponent.prototype.onEditTap = function () {
        this.editing = true;
        this.newHabbajetName = this.habbajet.name;
        this.newHabbajetValue = this.habbajet.value;
    };
    AppComponent.prototype.onDeleteTap = function () {
        this.editing = false;
        this.habbajet.deleteData();
        this.habbajetList.splice(this.habbajetIndex);
        this.newHabbajetName = '';
        this.newHabbajetValue = '';
        this.habbajetCount--;
        for (var i = this.habbajetIndex; i < this.habbajetList.length; i++) {
            this.habbajetList[i].updateIndex(i);
        }
        this.habbajetIndex = 0;
        if (this.habbajetList.length > 0) {
            this.habbajet = this.habbajetList[0];
        }
        else {
            this.habbajet = undefined;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./habbajet.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUN6QywwQkFBNEI7QUFHNUIsK0NBQTZDO0FBUTdDO0lBZUU7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxzQkFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0UsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsRUFBRSxDQUFBLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIseURBQXlEO1lBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2pFLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksMEJBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNHLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSwwQkFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFDbkUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDekYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQscUNBQWMsR0FBZCxVQUFlLEtBQWE7UUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hELENBQUM7SUFDSCxDQUFDO0lBRUQsdUNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQUk7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBRUgsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQ0UsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ2IsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ2QsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztJQUN6QyxDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQzlDLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUE5SVUsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGlCQUFpQjtTQUMvQixDQUFDOztPQUVXLFlBQVksQ0ErSXhCO0lBQUQsbUJBQUM7Q0FBQSxBQS9JRCxJQStJQztBQS9JWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0QmluZGluZyB9IGZyb20gXCIuL2hhYmJhamV0XCI7XHJcbmltcG9ydCB7IENoZWNrYm94QmluZGluZyB9IGZyb20gXCIuL2NoZWNrYm94XCI7XHJcbmltcG9ydCB7IEJ1ZGdldEJpbmRpbmcgfSBmcm9tIFwiLi9idWRnZXRcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBGcmFtZUNvdW50cyB9IGZyb20gXCIuL2ZyYW1lLWNvdW50c1wiO1xyXG5pbXBvcnQgKiBhcyBNb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9oYWJiYWpldC5odG1sXCIsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBwdWJsaWMgaGFiYmFqZXRMaXN0OiBIYWJiYWpldEJpbmRpbmdbXTtcclxuICBwdWJsaWMgaGFiYmFqZXQ6IEhhYmJhamV0QmluZGluZztcclxuICBwdWJsaWMgaGFiYmFqZXRJbmRleDogbnVtYmVyO1xyXG4gIHB1YmxpYyBoYWJiYWpldENvdW50OiBudW1iZXI7XHJcbiAgcHVibGljIGJ1ZGdldDogQnVkZ2V0QmluZGluZztcclxuICBwdWJsaWMgc2F2ZU9iamVjdDogYW55O1xyXG4gIHB1YmxpYyB0YWJXaWR0aDogbnVtYmVyO1xyXG4gIHB1YmxpYyBmcmFtZXM6IEZyYW1lQ291bnRzO1xyXG4gIHB1YmxpYyBuZXdIYWJiYWpldE5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgbmV3SGFiYmFqZXRWYWx1ZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBkYXRlOiBzdHJpbmc7XHJcbiAgcHVibGljIHRlbXBIYWJiYWpldDtcclxuICBwdWJsaWMgZWRpdGluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNhdmVPYmplY3QgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcbiAgICB0aGlzLmJ1ZGdldCA9IG5ldyBCdWRnZXRCaW5kaW5nKHRoaXMuc2F2ZU9iamVjdCk7XHJcbiAgICB0aGlzLmZyYW1lcyA9IG5ldyBGcmFtZUNvdW50cygpO1xyXG4gICAgdGhpcy5oYWJiYWpldExpc3QgPVtdO1xyXG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0TmFtZT1cIlwiO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlPVwiXCI7XHJcbiAgICB0aGlzLmxvYWRTYXZlZERhdGEoKTtcclxuICB9XHJcblxyXG4gIGxvYWRTYXZlZERhdGEoKSB7XHJcbiAgICBjb25zdCB0b3RhbFZhbHVlID0gdGhpcy5zYXZlT2JqZWN0LmdldE51bWJlcihcInRvdGFsXCIpO1xyXG4gICAgaWYodG90YWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIHRoaXMuZGF0ZSA9IE1vbWVudCgnMjYvMDIvMjAxOCcsICdERC9NTS9ZWScpLmZvcm1hdCgpO1xyXG4gICAgICB0aGlzLmJ1ZGdldC5zZXRUb3RhbCh0b3RhbFZhbHVlKTtcclxuICAgICAgY29uc3QgaGFiYmFqZXRDb3VudCA9IHRoaXMuc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIpO1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGFiYmFqZXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXRCaW5kaW5nKHRoaXMuYnVkZ2V0LCB0aGlzLnNhdmVPYmplY3QsIGksIFwiXCIsIGZhbHNlLCB0aGlzLmZyYW1lcywgXCJcIikpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGhhYmJhamV0Q291bnQgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5oYWJiYWpldENvdW50ID0gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoICsgMTtcclxuICB9XHJcblxyXG4gIG5ld0hhYmJhamV0KCkge1xyXG4gICAgaWYodGhpcy5pc1ZhbGlkTmFtZSgpICYmIHRoaXMuaXNWYWxpZFZhbHVlKCkpIHtcclxuICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoO1xyXG4gICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKG5ldyBIYWJiYWpldEJpbmRpbmcodGhpcy5idWRnZXQsIHRoaXMuc2F2ZU9iamVjdCxcclxuICAgICAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCwgdGhpcy5uZXdIYWJiYWpldE5hbWUsIHRydWUsIHRoaXMuZnJhbWVzLCB0aGlzLm5ld0hhYmJhamV0VmFsdWUpKTtcclxuICAgICAgdGhpcy5oYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0W3RoaXMuaGFiYmFqZXRJbmRleF07XHJcbiAgICAgIHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIsIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhhYmJhamV0Q291bnQgPSB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggKyAxO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSAnJztcclxuICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SGFiYmFqZXQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCA+IGluZGV4KSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTmV3SGFiYmFqZXRUYXAoKSB7XHJcbiAgICB0aGlzLmhhYmJhamV0ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveFRhcChhcmdzKSB7XHJcbiAgICB0aGlzLmhhYmJhamV0LmRhaWx5VXBkYXRlKGFyZ3MuaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgb25QdXJjaGFzZVRhcChhcmdzKSB7XHJcbiAgICB0aGlzLmJ1ZGdldC5tYWtlUHVyY2hhc2UoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrKCkge1xyXG4gICAgaWYodGhpcy5lZGl0aW5nKSB7XHJcbiAgICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhhYmJhamV0LnVwZGF0ZSh0aGlzLm5ld0hhYmJhamV0TmFtZSwgdGhpcy5uZXdIYWJiYWpldFZhbHVlKTtcclxuICAgICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSAnJztcclxuICAgICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhYmJhamV0LmRhaWx5VXBkYXRlKHRydWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjcm9zcygpIHtcclxuICAgIGlmKHRoaXMuZWRpdGluZykge1xyXG4gICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSAnJztcclxuICAgICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhYmJhamV0LmRhaWx5VXBkYXRlKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW1hZ2VUYXAoKSB7XHJcbiAgICB0aGlzLmhhYmJhamV0LmFjdCgpO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZE5hbWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uZXdIYWJiYWpldE5hbWUubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcih0aGlzLm5ld0hhYmJhamV0VmFsdWUpO1xyXG4gICAgcmV0dXJuIGlzRmluaXRlKHZhbHVlKSAmJiB2YWx1ZSA+IDA7XHJcbiAgfVxyXG5cclxuICBuYW1lQ2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSB0ZXh0RmllbGQudGV4dDtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gdGV4dEZpZWxkLnRleHQ7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRUYXAoKSB7XHJcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSB0aGlzLmhhYmJhamV0Lm5hbWU7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWUgPSB0aGlzLmhhYmJhamV0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGVUYXAoKSB7XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFiYmFqZXQuZGVsZXRlRGF0YSgpO1xyXG4gICAgdGhpcy5oYWJiYWpldExpc3Quc3BsaWNlKHRoaXMuaGFiYmFqZXRJbmRleCk7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0TmFtZSA9ICcnO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gJyc7XHJcbiAgICB0aGlzLmhhYmJhamV0Q291bnQtLTtcclxuICAgIGZvcihsZXQgaSA9IHRoaXMuaGFiYmFqZXRJbmRleDsgaSA8IHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRMaXN0W2ldLnVwZGF0ZUluZGV4KGkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oYWJiYWpldEluZGV4ID0gMDtcclxuICAgIGlmKHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5oYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0WzBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYWJiYWpldCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19