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
var Dialogs = require("ui/dialogs");
var frame_counts_1 = require("./frame-counts");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.saveObject = require("application-settings");
        this.budget = new budget_1.BudgetBinding(this.saveObject);
        this.frames = new frame_counts_1.FrameCounts();
        this.habbajetList = [];
        this.loadSavedData();
    }
    AppComponent.prototype.loadSavedData = function () {
        var totalValue = this.saveObject.getNumber("total");
        if (totalValue !== undefined) {
            this.budget.setTotal(totalValue);
            var habbajetCount = this.saveObject.getNumber("habbajetCount");
            for (var i = 0; i < habbajetCount; i++) {
                this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, i, "", false, this.frames));
            }
            if (habbajetCount > 0) {
                this.habbajetIndex = 0;
                this.habbajet = this.habbajetList[this.habbajetIndex];
            }
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
            _this.habbajetList.push(new habbajet_1.HabbajetBinding(_this.budget, _this.saveObject, _this.habbajetIndex, name, true, _this.frames));
            _this.habbajet = _this.habbajetList[_this.habbajetIndex];
            _this.saveObject.setNumber("habbajetCount", _this.habbajetList.length);
        });
    };
    AppComponent.prototype.selectHabbajet = function (index) {
        if (this.habbajetList.length > index) {
            this.habbajetIndex = index;
            this.habbajet = this.habbajetList[this.habbajetIndex];
        }
    };
    AppComponent.prototype.onCheckboxTap = function (args) {
        this.habbajet.dailyUpdate(args.index);
    };
    AppComponent.prototype.onPurchaseTap = function (args) {
        this.budget.makePurchase();
    };
    AppComponent.prototype.check = function () {
        this.habbajet.dailyUpdate(true);
    };
    AppComponent.prototype.cross = function () {
        this.habbajet.dailyUpdate(false);
    };
    AppComponent.prototype.onImageTap = function () {
        this.habbajet.act();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUV6QyxvQ0FBc0M7QUFDdEMsK0NBQTZDO0FBTzdDO0lBU0U7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxzQkFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2pFLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksMEJBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkcsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4RCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQUEsaUJBYUM7UUFaQyxJQUFJLElBQVksQ0FBQztRQUNqQixPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ2IsS0FBSyxFQUFFLHVCQUF1QjtZQUM5QixZQUFZLEVBQUUsU0FBUztTQUN4QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNiLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDOUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSwwQkFBZSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFVBQVUsRUFDcEUsS0FBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pELEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQWMsR0FBZCxVQUFlLEtBQWE7UUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hELENBQUM7SUFDSCxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQUk7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQXhFVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsaUJBQWlCO1NBQy9CLENBQUM7O09BRVcsWUFBWSxDQXlFeEI7SUFBRCxtQkFBQztDQUFBLEFBekVELElBeUVDO0FBekVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRCaW5kaW5nIH0gZnJvbSBcIi4vaGFiYmFqZXRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3hCaW5kaW5nIH0gZnJvbSBcIi4vY2hlY2tib3hcIjtcclxuaW1wb3J0IHsgQnVkZ2V0QmluZGluZyB9IGZyb20gXCIuL2J1ZGdldFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcbmltcG9ydCB7IEZyYW1lQ291bnRzIH0gZnJvbSBcIi4vZnJhbWUtY291bnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2hhYmJhamV0Lmh0bWxcIixcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIHB1YmxpYyBoYWJiYWpldExpc3Q6IEhhYmJhamV0QmluZGluZ1tdO1xyXG4gIHB1YmxpYyBoYWJiYWpldDogSGFiYmFqZXRCaW5kaW5nO1xyXG4gIHB1YmxpYyBoYWJiYWpldEluZGV4OiBudW1iZXI7XHJcbiAgcHVibGljIGJ1ZGdldDogQnVkZ2V0QmluZGluZztcclxuICBwdWJsaWMgc2F2ZU9iamVjdDogYW55O1xyXG4gIHB1YmxpYyB0YWJXaWR0aDogbnVtYmVyO1xyXG4gIHB1YmxpYyBmcmFtZXM6IEZyYW1lQ291bnRzO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2F2ZU9iamVjdCA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuICAgIHRoaXMuYnVkZ2V0ID0gbmV3IEJ1ZGdldEJpbmRpbmcodGhpcy5zYXZlT2JqZWN0KTtcclxuICAgIHRoaXMuZnJhbWVzID0gbmV3IEZyYW1lQ291bnRzKCk7XHJcbiAgICB0aGlzLmhhYmJhamV0TGlzdCA9W107XHJcbiAgICB0aGlzLmxvYWRTYXZlZERhdGEoKTtcclxuICB9XHJcblxyXG4gIGxvYWRTYXZlZERhdGEoKSB7XHJcbiAgICBjb25zdCB0b3RhbFZhbHVlID0gdGhpcy5zYXZlT2JqZWN0LmdldE51bWJlcihcInRvdGFsXCIpO1xyXG4gICAgaWYodG90YWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuYnVkZ2V0LnNldFRvdGFsKHRvdGFsVmFsdWUpO1xyXG4gICAgICBjb25zdCBoYWJiYWpldENvdW50ID0gdGhpcy5zYXZlT2JqZWN0LmdldE51bWJlcihcImhhYmJhamV0Q291bnRcIik7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBoYWJiYWpldENvdW50OyBpKyspIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKG5ldyBIYWJiYWpldEJpbmRpbmcodGhpcy5idWRnZXQsIHRoaXMuc2F2ZU9iamVjdCwgaSwgXCJcIiwgZmFsc2UsIHRoaXMuZnJhbWVzKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoaGFiYmFqZXRDb3VudCA+IDApIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXQgPSB0aGlzLmhhYmJhamV0TGlzdFt0aGlzLmhhYmJhamV0SW5kZXhdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXdIYWJiYWpldCgpIHtcclxuICAgIGxldCBuYW1lOiBzdHJpbmc7XHJcbiAgICBEaWFsb2dzLnByb21wdCh7XHJcbiAgICAgIHRpdGxlOiBcIk5hbWUgdGhlIG5ldyBIYWJiYWpldFwiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiQ29uZmlybVwiLFxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIG5hbWUgPSByZXN1bHQudGV4dDtcclxuICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoO1xyXG4gICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKG5ldyBIYWJiYWpldEJpbmRpbmcodGhpcy5idWRnZXQsIHRoaXMuc2F2ZU9iamVjdCxcclxuICAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4LCBuYW1lLCB0cnVlLCB0aGlzLmZyYW1lcykpO1xyXG4gICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgICAgdGhpcy5zYXZlT2JqZWN0LnNldE51bWJlcihcImhhYmJhamV0Q291bnRcIiwgdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SGFiYmFqZXQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCA+IGluZGV4KSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hUYXAoYXJncykge1xyXG4gICAgdGhpcy5oYWJiYWpldC5kYWlseVVwZGF0ZShhcmdzLmluZGV4KTtcclxuICB9XHJcblxyXG4gIG9uUHVyY2hhc2VUYXAoYXJncykge1xyXG4gICAgdGhpcy5idWRnZXQubWFrZVB1cmNoYXNlKCk7XHJcbiAgfVxyXG5cclxuICBjaGVjaygpIHtcclxuICAgIHRoaXMuaGFiYmFqZXQuZGFpbHlVcGRhdGUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjcm9zcygpIHtcclxuICAgIHRoaXMuaGFiYmFqZXQuZGFpbHlVcGRhdGUoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgb25JbWFnZVRhcCgpIHtcclxuICAgIHRoaXMuaGFiYmFqZXQuYWN0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==