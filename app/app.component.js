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
        this.newHabbajetName = "";
        this.newHabbajetValue = "";
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
        if (this.isValidName() && this.isValidValue()) {
            this.habbajetIndex = this.habbajetList.length;
            this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, this.habbajetIndex, this.newHabbajetName, true, this.frames));
            this.habbajet = this.habbajetList[this.habbajetIndex];
            this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
        }
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
    AppComponent.prototype.isValidName = function () {
        return this.newHabbajetName.length > 0;
    };
    AppComponent.prototype.isValidValue = function () {
        var value = _.toNumber(this.newHabbajetValue);
        return isFinite(value) && value > 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUN6QywwQkFBNEI7QUFFNUIsK0NBQTZDO0FBTzdDO0lBV0U7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxzQkFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0UsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsRUFBRSxDQUFBLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakUsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSwwQkFBZSxDQUFD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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0QmluZGluZyB9IGZyb20gXCIuL2hhYmJhamV0XCI7XHJcbmltcG9ydCB7IENoZWNrYm94QmluZGluZyB9IGZyb20gXCIuL2NoZWNrYm94XCI7XHJcbmltcG9ydCB7IEJ1ZGdldEJpbmRpbmcgfSBmcm9tIFwiLi9idWRnZXRcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnO1xyXG5pbXBvcnQgeyBGcmFtZUNvdW50cyB9IGZyb20gXCIuL2ZyYW1lLWNvdW50c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9oYWJiYWpldC5odG1sXCIsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBwdWJsaWMgaGFiYmFqZXRMaXN0OiBIYWJiYWpldEJpbmRpbmdbXTtcclxuICBwdWJsaWMgaGFiYmFqZXQ6IEhhYmJhamV0QmluZGluZztcclxuICBwdWJsaWMgaGFiYmFqZXRJbmRleDogbnVtYmVyO1xyXG4gIHB1YmxpYyBidWRnZXQ6IEJ1ZGdldEJpbmRpbmc7XHJcbiAgcHVibGljIHNhdmVPYmplY3Q6IGFueTtcclxuICBwdWJsaWMgdGFiV2lkdGg6IG51bWJlcjtcclxuICBwdWJsaWMgZnJhbWVzOiBGcmFtZUNvdW50cztcclxuICBwdWJsaWMgbmV3SGFiYmFqZXROYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG5ld0hhYmJhamV0VmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNhdmVPYmplY3QgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcbiAgICB0aGlzLmJ1ZGdldCA9IG5ldyBCdWRnZXRCaW5kaW5nKHRoaXMuc2F2ZU9iamVjdCk7XHJcbiAgICB0aGlzLmZyYW1lcyA9IG5ldyBGcmFtZUNvdW50cygpO1xyXG4gICAgdGhpcy5oYWJiYWpldExpc3QgPVtdO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWU9XCJcIjtcclxuICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZT1cIlwiO1xyXG4gICAgdGhpcy5sb2FkU2F2ZWREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkU2F2ZWREYXRhKCkge1xyXG4gICAgY29uc3QgdG90YWxWYWx1ZSA9IHRoaXMuc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJ0b3RhbFwiKTtcclxuICAgIGlmKHRvdGFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmJ1ZGdldC5zZXRUb3RhbCh0b3RhbFZhbHVlKTtcclxuICAgICAgY29uc3QgaGFiYmFqZXRDb3VudCA9IHRoaXMuc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIpO1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGFiYmFqZXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXRCaW5kaW5nKHRoaXMuYnVkZ2V0LCB0aGlzLnNhdmVPYmplY3QsIGksIFwiXCIsIGZhbHNlLCB0aGlzLmZyYW1lcykpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGhhYmJhamV0Q291bnQgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV3SGFiYmFqZXQoKSB7XHJcbiAgICBpZih0aGlzLmlzVmFsaWROYW1lKCkgJiYgdGhpcy5pc1ZhbGlkVmFsdWUoKSkge1xyXG4gICAgICB0aGlzLmhhYmJhamV0SW5kZXggPSB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0QmluZGluZyh0aGlzLmJ1ZGdldCwgdGhpcy5zYXZlT2JqZWN0LFxyXG4gICAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4LCB0aGlzLm5ld0hhYmJhamV0TmFtZSwgdHJ1ZSwgdGhpcy5mcmFtZXMpKTtcclxuICAgICAgdGhpcy5oYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0W3RoaXMuaGFiYmFqZXRJbmRleF07XHJcbiAgICAgIHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIsIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RIYWJiYWpldChpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5oYWJiYWpldExpc3QubGVuZ3RoID4gaW5kZXgpIHtcclxuICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQgPSB0aGlzLmhhYmJhamV0TGlzdFt0aGlzLmhhYmJhamV0SW5kZXhdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveFRhcChhcmdzKSB7XHJcbiAgICB0aGlzLmhhYmJhamV0LmRhaWx5VXBkYXRlKGFyZ3MuaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgb25QdXJjaGFzZVRhcChhcmdzKSB7XHJcbiAgICB0aGlzLmJ1ZGdldC5tYWtlUHVyY2hhc2UoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrKCkge1xyXG4gICAgdGhpcy5oYWJiYWpldC5kYWlseVVwZGF0ZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNyb3NzKCkge1xyXG4gICAgdGhpcy5oYWJiYWpldC5kYWlseVVwZGF0ZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBvbkltYWdlVGFwKCkge1xyXG4gICAgdGhpcy5oYWJiYWpldC5hY3QoKTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWROYW1lKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmV3SGFiYmFqZXROYW1lLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IF8udG9OdW1iZXIodGhpcy5uZXdIYWJiYWpldFZhbHVlKTtcclxuICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgJiYgdmFsdWUgPiAwO1xyXG4gIH1cclxufVxyXG4iXX0=