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
            this.habbajetCount = this.habbajetList.length + 1;
            this.newHabbajetName = '';
            this.newHabbajetValue = '';
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUN6QywwQkFBNEI7QUFHNUIsK0NBQTZDO0FBTzdDO0lBZUU7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxzQkFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0UsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsRUFBRSxDQUFBLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakUsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdEMsSUFBSSxDQUFD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O0lBQ0gsQ0FBQztJQTdJVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsaUJBQWlCO1NBQy9CLENBQUM7O09BRVcsWUFBWSxDQThJeEI7SUFBRCxtQkFBQztDQUFBLEFBOUlELElBOElDO0FBOUlZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRCaW5kaW5nIH0gZnJvbSBcIi4vaGFiYmFqZXRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3hCaW5kaW5nIH0gZnJvbSBcIi4vY2hlY2tib3hcIjtcclxuaW1wb3J0IHsgQnVkZ2V0QmluZGluZyB9IGZyb20gXCIuL2J1ZGdldFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IEZyYW1lQ291bnRzIH0gZnJvbSBcIi4vZnJhbWUtY291bnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2hhYmJhamV0Lmh0bWxcIixcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIHB1YmxpYyBoYWJiYWpldExpc3Q6IEhhYmJhamV0QmluZGluZ1tdO1xyXG4gIHB1YmxpYyBoYWJiYWpldDogSGFiYmFqZXRCaW5kaW5nO1xyXG4gIHB1YmxpYyBoYWJiYWpldEluZGV4OiBudW1iZXI7XHJcbiAgcHVibGljIGhhYmJhamV0Q291bnQ6IG51bWJlcjtcclxuICBwdWJsaWMgYnVkZ2V0OiBCdWRnZXRCaW5kaW5nO1xyXG4gIHB1YmxpYyBzYXZlT2JqZWN0OiBhbnk7XHJcbiAgcHVibGljIHRhYldpZHRoOiBudW1iZXI7XHJcbiAgcHVibGljIGZyYW1lczogRnJhbWVDb3VudHM7XHJcbiAgcHVibGljIG5ld0hhYmJhamV0TmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBuZXdIYWJiYWpldFZhbHVlOiBzdHJpbmc7XHJcbiAgcHVibGljIGRhdGU6IHN0cmluZztcclxuICBwdWJsaWMgdGVtcEhhYmJhamV0O1xyXG4gIHB1YmxpYyBlZGl0aW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2F2ZU9iamVjdCA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuICAgIHRoaXMuYnVkZ2V0ID0gbmV3IEJ1ZGdldEJpbmRpbmcodGhpcy5zYXZlT2JqZWN0KTtcclxuICAgIHRoaXMuZnJhbWVzID0gbmV3IEZyYW1lQ291bnRzKCk7XHJcbiAgICB0aGlzLmhhYmJhamV0TGlzdCA9W107XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMubmV3SGFiYmFqZXROYW1lPVwiXCI7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWU9XCJcIjtcclxuICAgIHRoaXMubG9hZFNhdmVkRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFNhdmVkRGF0YSgpIHtcclxuICAgIGNvbnN0IHRvdGFsVmFsdWUgPSB0aGlzLnNhdmVPYmplY3QuZ2V0TnVtYmVyKFwidG90YWxcIik7XHJcbiAgICBpZih0b3RhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5idWRnZXQuc2V0VG90YWwodG90YWxWYWx1ZSk7XHJcbiAgICAgIGNvbnN0IGhhYmJhamV0Q291bnQgPSB0aGlzLnNhdmVPYmplY3QuZ2V0TnVtYmVyKFwiaGFiYmFqZXRDb3VudFwiKTtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGhhYmJhamV0Q291bnQ7IGkrKykge1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0QmluZGluZyh0aGlzLmJ1ZGdldCwgdGhpcy5zYXZlT2JqZWN0LCBpLCBcIlwiLCBmYWxzZSwgdGhpcy5mcmFtZXMsIFwiXCIpKTtcclxuICAgICAgfVxyXG4gICAgICBpZihoYWJiYWpldENvdW50ID4gMCkge1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0W3RoaXMuaGFiYmFqZXRJbmRleF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaGFiYmFqZXRDb3VudCA9IHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCArIDE7XHJcbiAgfVxyXG5cclxuICBuZXdIYWJiYWpldCgpIHtcclxuICAgIGlmKHRoaXMuaXNWYWxpZE5hbWUoKSAmJiB0aGlzLmlzVmFsaWRWYWx1ZSgpKSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aDtcclxuICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXRCaW5kaW5nKHRoaXMuYnVkZ2V0LCB0aGlzLnNhdmVPYmplY3QsXHJcbiAgICAgICAgICB0aGlzLmhhYmJhamV0SW5kZXgsIHRoaXMubmV3SGFiYmFqZXROYW1lLCB0cnVlLCB0aGlzLmZyYW1lcywgdGhpcy5uZXdIYWJiYWpldFZhbHVlKSk7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQgPSB0aGlzLmhhYmJhamV0TGlzdFt0aGlzLmhhYmJhamV0SW5kZXhdO1xyXG4gICAgICB0aGlzLnNhdmVPYmplY3Quc2V0TnVtYmVyKFwiaGFiYmFqZXRDb3VudFwiLCB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGgpO1xyXG4gICAgICB0aGlzLmhhYmJhamV0Q291bnQgPSB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggKyAxO1xyXG4gICAgICB0aGlzLm5ld0hhYmJhamV0TmFtZSA9ICcnO1xyXG4gICAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWUgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdEhhYmJhamV0KGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggPiBpbmRleCkge1xyXG4gICAgICB0aGlzLmhhYmJhamV0SW5kZXggPSBpbmRleDtcclxuICAgICAgdGhpcy5oYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0W3RoaXMuaGFiYmFqZXRJbmRleF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk5ld0hhYmJhamV0VGFwKCkge1xyXG4gICAgdGhpcy5oYWJiYWpldCA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hUYXAoYXJncykge1xyXG4gICAgdGhpcy5oYWJiYWpldC5kYWlseVVwZGF0ZShhcmdzLmluZGV4KTtcclxuICB9XHJcblxyXG4gIG9uUHVyY2hhc2VUYXAoYXJncykge1xyXG4gICAgdGhpcy5idWRnZXQubWFrZVB1cmNoYXNlKCk7XHJcbiAgfVxyXG5cclxuICBjaGVjaygpIHtcclxuICAgIGlmKHRoaXMuZWRpdGluZykge1xyXG4gICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5oYWJiYWpldC51cGRhdGUodGhpcy5uZXdIYWJiYWpldE5hbWUsIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSk7XHJcbiAgICAgIHRoaXMubmV3SGFiYmFqZXROYW1lID0gJyc7XHJcbiAgICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYWJiYWpldC5kYWlseVVwZGF0ZSh0cnVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgY3Jvc3MoKSB7XHJcbiAgICBpZih0aGlzLmVkaXRpbmcpIHtcclxuICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubmV3SGFiYmFqZXROYW1lID0gJyc7XHJcbiAgICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYWJiYWpldC5kYWlseVVwZGF0ZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkltYWdlVGFwKCkge1xyXG4gICAgdGhpcy5oYWJiYWpldC5hY3QoKTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWROYW1lKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmV3SGFiYmFqZXROYW1lLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IF8udG9OdW1iZXIodGhpcy5uZXdIYWJiYWpldFZhbHVlKTtcclxuICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgJiYgdmFsdWUgPiAwO1xyXG4gIH1cclxuXHJcbiAgbmFtZUNoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMubmV3SGFiYmFqZXROYW1lID0gdGV4dEZpZWxkLnRleHQ7XHJcbiAgfVxyXG5cclxuICB2YWx1ZUNoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSA9IHRleHRGaWVsZC50ZXh0O1xyXG4gIH1cclxuXHJcbiAgb25FZGl0VGFwKCkge1xyXG4gICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMubmV3SGFiYmFqZXROYW1lID0gdGhpcy5oYWJiYWpldC5uYW1lO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gdGhpcy5oYWJiYWpldC52YWx1ZTtcclxuICB9XHJcblxyXG4gIG9uRGVsZXRlVGFwKCkge1xyXG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmhhYmJhamV0LmRlbGV0ZURhdGEoKTtcclxuICAgIHRoaXMuaGFiYmFqZXRMaXN0LnNwbGljZSh0aGlzLmhhYmJhamV0SW5kZXgpO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSAnJztcclxuICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5oYWJiYWpldENvdW50LS07XHJcbiAgICBmb3IobGV0IGkgPSB0aGlzLmhhYmJhamV0SW5kZXg7IGkgPCB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmhhYmJhamV0TGlzdFtpXS51cGRhdGVJbmRleChpKTtcclxuICAgIH1cclxuICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IDA7XHJcbiAgICBpZih0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQgPSB0aGlzLmhhYmJhamV0TGlzdFswXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==