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
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.saveObject = require("application-settings");
        this.budget = new budget_1.BudgetBinding(this.saveObject);
        this.habbajetList = [];
        this.loadSavedData();
    }
    AppComponent.prototype.loadSavedData = function () {
        var totalValue = this.saveObject.getNumber("total");
        if (totalValue !== undefined) {
            this.budget.setTotal(totalValue);
            var habbajetCount = this.saveObject.getNumber("habbajetCount");
            for (var i = 0; i < habbajetCount; i++) {
                this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, i, "", false));
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
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUV6QyxvQ0FBc0M7QUFRdEM7SUFRRTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHNCQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2pFLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksMEJBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFGLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUFBLGlCQWVDO1FBZEMsSUFBSSxJQUFZLENBQUM7UUFDakIsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNiLEtBQUssRUFBRSx1QkFBdUI7WUFDOUIsWUFBWSxFQUFFLFNBQVM7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDYixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNuQixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQzlDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksMEJBQWUsQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxVQUFVLEVBQ3BFLEtBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDekUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQUk7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUF0RFUsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGlCQUFpQjtTQUMvQixDQUFDOztPQUVXLFlBQVksQ0F1RHhCO0lBQUQsbUJBQUM7Q0FBQSxBQXZERCxJQXVEQztBQXZEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0QmluZGluZyB9IGZyb20gXCIuL2hhYmJhamV0XCI7XHJcbmltcG9ydCB7IENoZWNrYm94QmluZGluZyB9IGZyb20gXCIuL2NoZWNrYm94XCI7XHJcbmltcG9ydCB7IEJ1ZGdldEJpbmRpbmcgfSBmcm9tIFwiLi9idWRnZXRcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vaGFiYmFqZXQuaHRtbFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgcHVibGljIGhhYmJhamV0TGlzdDogSGFiYmFqZXRCaW5kaW5nW107XHJcbiAgcHVibGljIGhhYmJhamV0OiBIYWJiYWpldEJpbmRpbmc7XHJcbiAgcHVibGljIGhhYmJhamV0SW5kZXg6IG51bWJlcjtcclxuICBwdWJsaWMgYnVkZ2V0OiBCdWRnZXRCaW5kaW5nO1xyXG4gIHB1YmxpYyBzYXZlT2JqZWN0OiBhbnk7XHJcbiAgcHVibGljIHRhYldpZHRoOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zYXZlT2JqZWN0ID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG4gICAgdGhpcy5idWRnZXQgPSBuZXcgQnVkZ2V0QmluZGluZyh0aGlzLnNhdmVPYmplY3QpO1xyXG4gICAgdGhpcy5oYWJiYWpldExpc3QgPVtdO1xyXG4gICAgdGhpcy5sb2FkU2F2ZWREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkU2F2ZWREYXRhKCkge1xyXG4gICAgY29uc3QgdG90YWxWYWx1ZSA9IHRoaXMuc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJ0b3RhbFwiKTtcclxuICAgIGlmKHRvdGFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmJ1ZGdldC5zZXRUb3RhbCh0b3RhbFZhbHVlKTtcclxuICAgICAgY29uc3QgaGFiYmFqZXRDb3VudCA9IHRoaXMuc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIpO1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGFiYmFqZXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXRCaW5kaW5nKHRoaXMuYnVkZ2V0LCB0aGlzLnNhdmVPYmplY3QsIGksIFwiXCIsIGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoaGFiYmFqZXRDb3VudCA+IDApIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXQgPSB0aGlzLmhhYmJhamV0TGlzdFt0aGlzLmhhYmJhamV0SW5kZXhdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXdIYWJiYWpldCgpIHtcclxuICAgIGxldCBuYW1lOiBzdHJpbmc7XHJcbiAgICBEaWFsb2dzLnByb21wdCh7XHJcbiAgICAgIHRpdGxlOiBcIk5hbWUgdGhlIG5ldyBIYWJiYWpldFwiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiQ29uZmlybVwiLFxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIG5hbWUgPSByZXN1bHQudGV4dDtcclxuICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoO1xyXG4gICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKG5ldyBIYWJiYWpldEJpbmRpbmcodGhpcy5idWRnZXQsIHRoaXMuc2F2ZU9iamVjdCxcclxuICAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4LCBuYW1lLCB0cnVlKSk7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQgPSB0aGlzLmhhYmJhamV0TGlzdFt0aGlzLmhhYmJhamV0SW5kZXhdO1xyXG4gICAgICB0aGlzLnNhdmVPYmplY3Quc2V0TnVtYmVyKFwiaGFiYmFqZXRDb3VudFwiLCB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBuZXh0SGFiYmFqZXQoKSB7XHJcbiAgICB0aGlzLmhhYmJhamV0SW5kZXggPSAodGhpcy5oYWJiYWpldEluZGV4ICsgMSkgJSB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XHJcbiAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hUYXAoYXJncykge1xyXG4gICAgdGhpcy5oYWJiYWpldC5kYWlseVVwZGF0ZShhcmdzLmluZGV4KTtcclxuICB9XHJcbn1cclxuIl19