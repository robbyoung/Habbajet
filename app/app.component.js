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
        this.setColumnWidths();
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
        this.setColumnWidths();
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
        return this.newHabbajetName.length > 0 &&
            this.newHabbajetName.length < 15;
    };
    AppComponent.prototype.isValidValue = function () {
        var value = _.toNumber(this.newHabbajetValue);
        return isFinite(value) && value > 0 && value <= 1000;
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
        this.setColumnWidths();
    };
    AppComponent.prototype.setColumnWidths = function () {
        switch (this.habbajetCount) {
            case 2:
                this.columnWidths = '38,114,114,0,0,0,0,*';
                break;
            case 3:
                this.columnWidths = '38,76,76,76,0,0,0,*';
                break;
            case 4:
                this.columnWidths = '38,57,57,57,57,0,0,*';
                break;
            case 5:
                this.columnWidths = '38,45,45,45,46,46,0,*';
                break;
            case 6:
                this.columnWidths = '38,38,38,38,38,38,38,*';
                break;
            default:
                this.columnWidths = '38,228,0,0,0,0,0,*';
                break;
        }
        console.log(this.habbajetCount + ' : ' + this.columnWidths);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUN6QywwQkFBNEI7QUFHNUIsK0NBQTZDO0FBTzdDO0lBZUU7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxzQkFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0UsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsRUFBRSxDQUFBLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakUsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdEMsSUFBSSxDQUFD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OlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRCaW5kaW5nIH0gZnJvbSBcIi4vaGFiYmFqZXRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3hCaW5kaW5nIH0gZnJvbSBcIi4vY2hlY2tib3hcIjtcclxuaW1wb3J0IHsgQnVkZ2V0QmluZGluZyB9IGZyb20gXCIuL2J1ZGdldFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IEZyYW1lQ291bnRzIH0gZnJvbSBcIi4vZnJhbWUtY291bnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2hhYmJhamV0Lmh0bWxcIixcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIHB1YmxpYyBoYWJiYWpldExpc3Q6IEhhYmJhamV0QmluZGluZ1tdO1xyXG4gIHB1YmxpYyBoYWJiYWpldDogSGFiYmFqZXRCaW5kaW5nO1xyXG4gIHB1YmxpYyBoYWJiYWpldEluZGV4OiBudW1iZXI7XHJcbiAgcHVibGljIGhhYmJhamV0Q291bnQ6IG51bWJlcjtcclxuICBwdWJsaWMgYnVkZ2V0OiBCdWRnZXRCaW5kaW5nO1xyXG4gIHB1YmxpYyBzYXZlT2JqZWN0OiBhbnk7XHJcbiAgcHVibGljIHRhYldpZHRoOiBudW1iZXI7XHJcbiAgcHVibGljIGZyYW1lczogRnJhbWVDb3VudHM7XHJcbiAgcHVibGljIG5ld0hhYmJhamV0TmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBuZXdIYWJiYWpldFZhbHVlOiBzdHJpbmc7XHJcbiAgcHVibGljIGRhdGU6IHN0cmluZztcclxuICBwdWJsaWMgY29sdW1uV2lkdGhzO1xyXG4gIHB1YmxpYyBlZGl0aW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2F2ZU9iamVjdCA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuICAgIHRoaXMuYnVkZ2V0ID0gbmV3IEJ1ZGdldEJpbmRpbmcodGhpcy5zYXZlT2JqZWN0KTtcclxuICAgIHRoaXMuZnJhbWVzID0gbmV3IEZyYW1lQ291bnRzKCk7XHJcbiAgICB0aGlzLmhhYmJhamV0TGlzdCA9W107XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMubmV3SGFiYmFqZXROYW1lPVwiXCI7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWU9XCJcIjtcclxuICAgIHRoaXMubG9hZFNhdmVkRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFNhdmVkRGF0YSgpIHtcclxuICAgIGNvbnN0IHRvdGFsVmFsdWUgPSB0aGlzLnNhdmVPYmplY3QuZ2V0TnVtYmVyKFwidG90YWxcIik7XHJcbiAgICBpZih0b3RhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5idWRnZXQuc2V0VG90YWwodG90YWxWYWx1ZSk7XHJcbiAgICAgIGNvbnN0IGhhYmJhamV0Q291bnQgPSB0aGlzLnNhdmVPYmplY3QuZ2V0TnVtYmVyKFwiaGFiYmFqZXRDb3VudFwiKTtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGhhYmJhamV0Q291bnQ7IGkrKykge1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0QmluZGluZyh0aGlzLmJ1ZGdldCwgdGhpcy5zYXZlT2JqZWN0LCBpLCBcIlwiLCBmYWxzZSwgdGhpcy5mcmFtZXMsIFwiXCIpKTtcclxuICAgICAgfVxyXG4gICAgICBpZihoYWJiYWpldENvdW50ID4gMCkge1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0W3RoaXMuaGFiYmFqZXRJbmRleF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaGFiYmFqZXRDb3VudCA9IHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCArIDE7XHJcbiAgICB0aGlzLnNldENvbHVtbldpZHRocygpO1xyXG4gIH1cclxuXHJcbiAgbmV3SGFiYmFqZXQoKSB7XHJcbiAgICBpZih0aGlzLmlzVmFsaWROYW1lKCkgJiYgdGhpcy5pc1ZhbGlkVmFsdWUoKSkge1xyXG4gICAgICB0aGlzLmhhYmJhamV0SW5kZXggPSB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0QmluZGluZyh0aGlzLmJ1ZGdldCwgdGhpcy5zYXZlT2JqZWN0LFxyXG4gICAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4LCB0aGlzLm5ld0hhYmJhamV0TmFtZSwgdHJ1ZSwgdGhpcy5mcmFtZXMsIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSkpO1xyXG4gICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgICAgdGhpcy5zYXZlT2JqZWN0LnNldE51bWJlcihcImhhYmJhamV0Q291bnRcIiwgdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoKTtcclxuICAgICAgdGhpcy5oYWJiYWpldENvdW50ID0gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoICsgMTtcclxuICAgICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSAnJztcclxuICAgICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENvbHVtbldpZHRocygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SGFiYmFqZXQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCA+IGluZGV4KSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTmV3SGFiYmFqZXRUYXAoKSB7XHJcbiAgICB0aGlzLmhhYmJhamV0ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveFRhcChhcmdzKSB7XHJcbiAgICB0aGlzLmhhYmJhamV0LmRhaWx5VXBkYXRlKGFyZ3MuaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgb25QdXJjaGFzZVRhcChhcmdzKSB7XHJcbiAgICB0aGlzLmJ1ZGdldC5tYWtlUHVyY2hhc2UoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrKCkge1xyXG4gICAgaWYodGhpcy5lZGl0aW5nKSB7XHJcbiAgICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhhYmJhamV0LnVwZGF0ZSh0aGlzLm5ld0hhYmJhamV0TmFtZSwgdGhpcy5uZXdIYWJiYWpldFZhbHVlKTtcclxuICAgICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSAnJztcclxuICAgICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhYmJhamV0LmRhaWx5VXBkYXRlKHRydWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjcm9zcygpIHtcclxuICAgIGlmKHRoaXMuZWRpdGluZykge1xyXG4gICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSAnJztcclxuICAgICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhYmJhamV0LmRhaWx5VXBkYXRlKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW1hZ2VUYXAoKSB7XHJcbiAgICB0aGlzLmhhYmJhamV0LmFjdCgpO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZE5hbWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uZXdIYWJiYWpldE5hbWUubGVuZ3RoID4gMCAmJlxyXG4gICAgIHRoaXMubmV3SGFiYmFqZXROYW1lLmxlbmd0aCA8IDE1O1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZFZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBfLnRvTnVtYmVyKHRoaXMubmV3SGFiYmFqZXRWYWx1ZSk7XHJcbiAgICByZXR1cm4gaXNGaW5pdGUodmFsdWUpICYmIHZhbHVlID4gMCAmJiB2YWx1ZSA8PSAxMDAwO1xyXG4gIH1cclxuXHJcbiAgbmFtZUNoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMubmV3SGFiYmFqZXROYW1lID0gdGV4dEZpZWxkLnRleHQ7XHJcbiAgfVxyXG5cclxuICB2YWx1ZUNoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSA9IHRleHRGaWVsZC50ZXh0O1xyXG4gIH1cclxuXHJcbiAgb25FZGl0VGFwKCkge1xyXG4gICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMubmV3SGFiYmFqZXROYW1lID0gdGhpcy5oYWJiYWpldC5uYW1lO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gdGhpcy5oYWJiYWpldC52YWx1ZTtcclxuICB9XHJcblxyXG4gIG9uRGVsZXRlVGFwKCkge1xyXG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmhhYmJhamV0LmRlbGV0ZURhdGEoKTtcclxuICAgIHRoaXMuaGFiYmFqZXRMaXN0LnNwbGljZSh0aGlzLmhhYmJhamV0SW5kZXgpO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSAnJztcclxuICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5oYWJiYWpldENvdW50LS07XHJcbiAgICBmb3IobGV0IGkgPSB0aGlzLmhhYmJhamV0SW5kZXg7IGkgPCB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmhhYmJhamV0TGlzdFtpXS51cGRhdGVJbmRleChpKTtcclxuICAgIH1cclxuICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IDA7XHJcbiAgICBpZih0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQgPSB0aGlzLmhhYmJhamV0TGlzdFswXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENvbHVtbldpZHRocygpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29sdW1uV2lkdGhzKCkge1xyXG4gICAgc3dpdGNoKHRoaXMuaGFiYmFqZXRDb3VudCkge1xyXG4gICAgICBjYXNlIDI6IHRoaXMuY29sdW1uV2lkdGhzID0gJzM4LDExNCwxMTQsMCwwLDAsMCwqJzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzogdGhpcy5jb2x1bW5XaWR0aHMgPSAnMzgsNzYsNzYsNzYsMCwwLDAsKic7IGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6IHRoaXMuY29sdW1uV2lkdGhzID0gJzM4LDU3LDU3LDU3LDU3LDAsMCwqJzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgNTogdGhpcy5jb2x1bW5XaWR0aHMgPSAnMzgsNDUsNDUsNDUsNDYsNDYsMCwqJzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgNjogdGhpcy5jb2x1bW5XaWR0aHMgPSAnMzgsMzgsMzgsMzgsMzgsMzgsMzgsKic7IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiB0aGlzLmNvbHVtbldpZHRocyA9ICczOCwyMjgsMCwwLDAsMCwwLConOyBicmVhaztcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaGFiYmFqZXRDb3VudCArICcgOiAnICsgdGhpcy5jb2x1bW5XaWR0aHMpO1xyXG4gIH1cclxufVxyXG4iXX0=