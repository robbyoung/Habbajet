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
var frame = require("ui/frame");
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
                this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, i, "", false, this.frames, "", 0, 0));
            }
            if (habbajetCount > 0) {
                this.habbajetIndex = 0;
                this.habbajet = this.habbajetList[this.habbajetIndex];
            }
        }
        this.habbajetCount = this.habbajetList.length;
        this.setColumnWidths();
    };
    AppComponent.prototype.newHabbajet = function () {
        if (this.newFieldsValid()) {
            this.habbajetIndex = this.habbajetList.length;
            this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, this.habbajetIndex, this.newHabbajetName, true, this.frames, this.newHabbajetValue, _.toNumber(this.newHabbajetFactor), _.toNumber(this.newHabbajetSlack)));
            this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
            this.habbajetCount = this.habbajetList.length;
            this.resetNewVariables();
            this.selectHabbajet(this.habbajetIndex, true);
        }
        this.setColumnWidths();
    };
    AppComponent.prototype.selectHabbajet = function (index, force) {
        var _this = this;
        if ((index >= 0 && this.habbajetList.length > index) &&
            (this.habbajetIndex !== index || force || !this.habbajet)) {
            var habbajetDisplay_1 = frame.topmost().currentPage.getViewById("habbajetDisplay");
            habbajetDisplay_1.animate({
                opacity: 0,
                duration: 200,
            })
                .then(function () {
                _this.habbajetIndex = index;
                _this.habbajet = _this.habbajetList[_this.habbajetIndex];
            })
                .then(function () {
                habbajetDisplay_1.animate({
                    opacity: 1,
                    duration: 200,
                });
            });
        }
    };
    AppComponent.prototype.onNewHabbajetTap = function () {
        if (this.habbajetCount < 6) {
            this.habbajet = undefined;
        }
    };
    AppComponent.prototype.onCheckboxTap = function (args) {
        this.habbajet.dailyUpdate(args.index);
    };
    AppComponent.prototype.onPurchaseTap = function (args) {
        this.budget.makePurchase();
    };
    AppComponent.prototype.onSwipe = function (args) {
        var direction = args.direction;
        if (direction === 1) {
            this.selectHabbajet(this.habbajetIndex - 1);
        }
        else if (direction === 2) {
            this.selectHabbajet(this.habbajetIndex + 1);
        }
        else if (direction === 4) {
            this.onEditTap();
        }
        else if (direction === 8 && this.editing) {
            this.cross();
        }
    };
    AppComponent.prototype.check = function () {
        if (this.editing) {
            this.editing = false;
            this.habbajet.update(this.newHabbajetName, this.newHabbajetValue);
            this.resetNewVariables();
        }
        else {
            this.habbajet.dailyUpdate(true);
        }
    };
    AppComponent.prototype.cross = function () {
        if (this.editing) {
            this.editing = false;
            this.resetNewVariables();
        }
        else {
            this.habbajet.dailyUpdate(false);
        }
    };
    AppComponent.prototype.onImageTap = function () {
        this.habbajet.act();
    };
    AppComponent.prototype.onEditTap = function () {
        if (_.isNil(this.habbajet) || this.editing)
            return;
        this.editing = true;
        this.newHabbajetName = this.habbajet.name;
        this.newHabbajetValue = this.habbajet.value;
    };
    AppComponent.prototype.onDeleteTap = function () {
        var _this = this;
        this.editing = false;
        this.habbajet.deleteData();
        this.habbajetList = _.filter(this.habbajetList, function (h) {
            return h.index !== _this.habbajetIndex;
        });
        this.resetNewVariables();
        this.habbajetCount--;
        for (var i = this.habbajetIndex; i < this.habbajetList.length; i++) {
            this.habbajetList[i].updateIndex(i);
        }
        this.habbajetIndex = 0;
        if (this.habbajetList.length > 0) {
            this.selectHabbajet(0, true);
        }
        else {
            this.habbajet = undefined;
        }
        this.setColumnWidths();
        this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
    };
    AppComponent.prototype.setColumnWidths = function () {
        switch (this.habbajetCount) {
            case 2:
                this.columnWidths = '*,140,140,0,0,0,0';
                break;
            case 3:
                this.columnWidths = '*,93,93,94,0,0,0';
                break;
            case 4:
                this.columnWidths = '*,70,70,70,70,0,0';
                break;
            case 5:
                this.columnWidths = '*,56,56,56,56,56,0';
                break;
            case 6:
                this.columnWidths = '*,46,46,47,46,46,47';
                break;
            default:
                this.columnWidths = '*,280,0,0,0,0,0';
                break;
        }
        this.updateTabText();
    };
    AppComponent.prototype.updateTabText = function () {
        var maxChars;
        switch (this.habbajetCount) {
            case 2:
                maxChars = 5;
                break;
            case 3:
                maxChars = 3;
                break;
            case 4:
                maxChars = 2;
                break;
            case 5:
                maxChars = 1;
                break;
            case 6:
                maxChars = 1;
                break;
            default:
                maxChars = 10;
                break;
        }
        _.each(this.habbajetList, function (h) {
            h.updateTabText(maxChars);
        });
    };
    AppComponent.prototype.newFieldsValid = function () {
        return this.isValidName() && this.isValidValue() && this.isValidFactor() && this.isValidSlack();
    };
    AppComponent.prototype.isValidName = function () {
        return this.newHabbajetName.length > 0 &&
            this.newHabbajetName.length < 15;
    };
    AppComponent.prototype.isValidValue = function () {
        var value = _.toNumber(this.newHabbajetValue);
        return isFinite(value) && value > 0 && value <= 1000;
    };
    AppComponent.prototype.isValidFactor = function () {
        var value = _.toNumber(this.newHabbajetFactor);
        return isFinite(value) && value > 1 && value <= 100;
    };
    AppComponent.prototype.isValidSlack = function () {
        var value = _.toNumber(this.newHabbajetSlack);
        return isFinite(value) && value >= 0 && value <= 6;
    };
    AppComponent.prototype.nameChange = function (args) {
        var textField = args.object;
        this.newHabbajetName = textField.text;
    };
    AppComponent.prototype.valueChange = function (args) {
        var textField = args.object;
        this.newHabbajetValue = textField.text;
    };
    AppComponent.prototype.factorChange = function (args) {
        var textField = args.object;
        this.newHabbajetFactor = textField.text;
    };
    AppComponent.prototype.slackChange = function (args) {
        var textField = args.object;
        this.newHabbajetSlack = textField.text;
    };
    AppComponent.prototype.resetNewVariables = function () {
        this.newHabbajetName = '';
        this.newHabbajetValue = '';
        this.newHabbajetFactor = '';
        this.newHabbajetSlack = '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUN6QywwQkFBNEI7QUFJNUIsZ0NBQW1DO0FBQ25DLCtDQUE2QztBQU83QztJQWtCRTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHNCQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxFQUFFLENBQUEsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dC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cnQgeyBDb21wb25lbnQsIE5nTW9kdWxlLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldEJpbmRpbmcgfSBmcm9tIFwiLi9oYWJiYWpldFwiO1xyXG5pbXBvcnQgeyBDaGVja2JveEJpbmRpbmcgfSBmcm9tIFwiLi9jaGVja2JveFwiO1xyXG5pbXBvcnQgeyBCdWRnZXRCaW5kaW5nIH0gZnJvbSBcIi4vYnVkZ2V0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICogYXMgRGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgZnJhbWUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XHJcbmltcG9ydCB7IEZyYW1lQ291bnRzIH0gZnJvbSBcIi4vZnJhbWUtY291bnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2hhYmJhamV0Lmh0bWxcIixcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIHB1YmxpYyBoYWJiYWpldExpc3Q6IEhhYmJhamV0QmluZGluZ1tdO1xyXG4gIHB1YmxpYyBoYWJiYWpldDogSGFiYmFqZXRCaW5kaW5nO1xyXG4gIHB1YmxpYyBoYWJiYWpldEluZGV4OiBudW1iZXI7XHJcbiAgcHVibGljIGhhYmJhamV0Q291bnQ6IG51bWJlcjtcclxuICBwdWJsaWMgYnVkZ2V0OiBCdWRnZXRCaW5kaW5nO1xyXG4gIHB1YmxpYyBzYXZlT2JqZWN0OiBhbnk7XHJcbiAgcHVibGljIHRhYldpZHRoOiBudW1iZXI7XHJcbiAgcHVibGljIGZyYW1lczogRnJhbWVDb3VudHM7XHJcbiAgcHVibGljIGRhdGU6IHN0cmluZztcclxuICBwdWJsaWMgY29sdW1uV2lkdGhzO1xyXG4gIHB1YmxpYyBlZGl0aW5nO1xyXG5cclxuICBwdWJsaWMgbmV3SGFiYmFqZXROYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG5ld0hhYmJhamV0VmFsdWU6IHN0cmluZztcclxuICBwdWJsaWMgbmV3SGFiYmFqZXRGYWN0b3I6IHN0cmluZztcclxuICBwdWJsaWMgbmV3SGFiYmFqZXRTbGFjazogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2F2ZU9iamVjdCA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuICAgIHRoaXMuYnVkZ2V0ID0gbmV3IEJ1ZGdldEJpbmRpbmcodGhpcy5zYXZlT2JqZWN0KTtcclxuICAgIHRoaXMuZnJhbWVzID0gbmV3IEZyYW1lQ291bnRzKCk7XHJcbiAgICB0aGlzLmhhYmJhamV0TGlzdCA9W107XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMubmV3SGFiYmFqZXROYW1lPVwiXCI7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWU9XCJcIjtcclxuICAgIHRoaXMubG9hZFNhdmVkRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFNhdmVkRGF0YSgpIHtcclxuICAgIGNvbnN0IHRvdGFsVmFsdWUgPSB0aGlzLnNhdmVPYmplY3QuZ2V0TnVtYmVyKFwidG90YWxcIik7XHJcbiAgICBpZih0b3RhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5idWRnZXQuc2V0VG90YWwodG90YWxWYWx1ZSk7XHJcbiAgICAgIGNvbnN0IGhhYmJhamV0Q291bnQgPSB0aGlzLnNhdmVPYmplY3QuZ2V0TnVtYmVyKFwiaGFiYmFqZXRDb3VudFwiKTtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGhhYmJhamV0Q291bnQ7IGkrKykge1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0QmluZGluZyh0aGlzLmJ1ZGdldCwgdGhpcy5zYXZlT2JqZWN0LCBpLCBcIlwiLCBmYWxzZSwgdGhpcy5mcmFtZXMsIFwiXCIsIDAsIDApKTtcclxuICAgICAgfVxyXG4gICAgICBpZihoYWJiYWpldENvdW50ID4gMCkge1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0W3RoaXMuaGFiYmFqZXRJbmRleF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaGFiYmFqZXRDb3VudCA9IHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aDtcclxuICAgIHRoaXMuc2V0Q29sdW1uV2lkdGhzKCk7XHJcbiAgfVxyXG5cclxuICBuZXdIYWJiYWpldCgpIHtcclxuICAgIGlmKHRoaXMubmV3RmllbGRzVmFsaWQoKSkge1xyXG4gICAgICB0aGlzLmhhYmJhamV0SW5kZXggPSB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0QmluZGluZyh0aGlzLmJ1ZGdldCwgdGhpcy5zYXZlT2JqZWN0LFxyXG4gICAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4LCB0aGlzLm5ld0hhYmJhamV0TmFtZSwgdHJ1ZSwgdGhpcy5mcmFtZXMsIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSxcclxuICAgICAgICAgIF8udG9OdW1iZXIodGhpcy5uZXdIYWJiYWpldEZhY3RvciksIF8udG9OdW1iZXIodGhpcy5uZXdIYWJiYWpldFNsYWNrKSkpO1xyXG4gICAgICB0aGlzLnNhdmVPYmplY3Quc2V0TnVtYmVyKFwiaGFiYmFqZXRDb3VudFwiLCB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGgpO1xyXG4gICAgICB0aGlzLmhhYmJhamV0Q291bnQgPSB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XHJcbiAgICAgIHRoaXMucmVzZXROZXdWYXJpYWJsZXMoKTtcclxuICAgICAgdGhpcy5zZWxlY3RIYWJiYWpldCh0aGlzLmhhYmJhamV0SW5kZXgsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRDb2x1bW5XaWR0aHMoKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEhhYmJhamV0KGluZGV4OiBudW1iZXIsIGZvcmNlPzogYm9vbGVhbikge1xyXG4gICAgaWYgKChpbmRleCA+PSAwICYmIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCA+IGluZGV4KSAmJlxyXG4gICAgICAgICh0aGlzLmhhYmJhamV0SW5kZXggIT09IGluZGV4IHx8IGZvcmNlIHx8ICF0aGlzLmhhYmJhamV0KSkge1xyXG4gICAgICBjb25zdCBoYWJiYWpldERpc3BsYXkgPSA8UGFnZT5mcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoXCJoYWJiYWpldERpc3BsYXlcIik7XHJcbiAgICAgIGhhYmJhamV0RGlzcGxheS5hbmltYXRlKHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0W3RoaXMuaGFiYmFqZXRJbmRleF07XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBoYWJiYWpldERpc3BsYXkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTmV3SGFiYmFqZXRUYXAoKSB7XHJcbiAgICBpZih0aGlzLmhhYmJhamV0Q291bnQgPCA2KSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94VGFwKGFyZ3MpIHtcclxuICAgIHRoaXMuaGFiYmFqZXQuZGFpbHlVcGRhdGUoYXJncy5pbmRleCk7XHJcbiAgfVxyXG5cclxuICBvblB1cmNoYXNlVGFwKGFyZ3MpIHtcclxuICAgIHRoaXMuYnVkZ2V0Lm1ha2VQdXJjaGFzZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Td2lwZShhcmdzKSB7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhcmdzLmRpcmVjdGlvbjtcclxuICAgIGlmKGRpcmVjdGlvbiA9PT0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdEhhYmJhamV0KHRoaXMuaGFiYmFqZXRJbmRleCAtIDEpO1xyXG4gICAgfSBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gMikge1xyXG4gICAgICB0aGlzLnNlbGVjdEhhYmJhamV0KHRoaXMuaGFiYmFqZXRJbmRleCArIDEpO1xyXG4gICAgfSBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gNCkge1xyXG4gICAgICB0aGlzLm9uRWRpdFRhcCgpO1xyXG4gICAgfSBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gOCAmJiB0aGlzLmVkaXRpbmcpIHtcclxuICAgICAgdGhpcy5jcm9zcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2soKSB7XHJcbiAgICBpZih0aGlzLmVkaXRpbmcpIHtcclxuICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQudXBkYXRlKHRoaXMubmV3SGFiYmFqZXROYW1lLCB0aGlzLm5ld0hhYmJhamV0VmFsdWUpO1xyXG4gICAgICB0aGlzLnJlc2V0TmV3VmFyaWFibGVzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhYmJhamV0LmRhaWx5VXBkYXRlKHRydWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjcm9zcygpIHtcclxuICAgIGlmKHRoaXMuZWRpdGluZykge1xyXG4gICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yZXNldE5ld1ZhcmlhYmxlcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYWJiYWpldC5kYWlseVVwZGF0ZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkltYWdlVGFwKCkge1xyXG4gICAgdGhpcy5oYWJiYWpldC5hY3QoKTtcclxuICB9XHJcblxyXG4gIG9uRWRpdFRhcCgpIHtcclxuICAgIGlmKF8uaXNOaWwodGhpcy5oYWJiYWpldCkgfHwgdGhpcy5lZGl0aW5nKSByZXR1cm47XHJcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSB0aGlzLmhhYmJhamV0Lm5hbWU7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWUgPSB0aGlzLmhhYmJhamV0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGVUYXAoKSB7XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFiYmFqZXQuZGVsZXRlRGF0YSgpO1xyXG4gICAgdGhpcy5oYWJiYWpldExpc3QgPSBfLmZpbHRlcih0aGlzLmhhYmJhamV0TGlzdCwgKGgpID0+IHtcclxuICAgICAgcmV0dXJuIGguaW5kZXggIT09IHRoaXMuaGFiYmFqZXRJbmRleDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZXNldE5ld1ZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5oYWJiYWpldENvdW50LS07XHJcbiAgICBmb3IobGV0IGkgPSB0aGlzLmhhYmJhamV0SW5kZXg7IGkgPCB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmhhYmJhamV0TGlzdFtpXS51cGRhdGVJbmRleChpKTtcclxuICAgIH1cclxuICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IDA7XHJcbiAgICBpZih0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0SGFiYmFqZXQoMCwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhYmJhamV0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRDb2x1bW5XaWR0aHMoKTtcclxuICAgIHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIsIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBzZXRDb2x1bW5XaWR0aHMoKSB7XHJcbiAgICBzd2l0Y2godGhpcy5oYWJiYWpldENvdW50KSB7XHJcbiAgICAgIGNhc2UgMjogdGhpcy5jb2x1bW5XaWR0aHMgPSAnKiwxNDAsMTQwLDAsMCwwLDAnOyBicmVhaztcclxuICAgICAgY2FzZSAzOiB0aGlzLmNvbHVtbldpZHRocyA9ICcqLDkzLDkzLDk0LDAsMCwwJzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDogdGhpcy5jb2x1bW5XaWR0aHMgPSAnKiw3MCw3MCw3MCw3MCwwLDAnOyBicmVhaztcclxuICAgICAgY2FzZSA1OiB0aGlzLmNvbHVtbldpZHRocyA9ICcqLDU2LDU2LDU2LDU2LDU2LDAnOyBicmVhaztcclxuICAgICAgY2FzZSA2OiB0aGlzLmNvbHVtbldpZHRocyA9ICcqLDQ2LDQ2LDQ3LDQ2LDQ2LDQ3JzsgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IHRoaXMuY29sdW1uV2lkdGhzID0gJyosMjgwLDAsMCwwLDAsMCc7IGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVUYWJUZXh0KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUYWJUZXh0KCkge1xyXG4gICAgbGV0IG1heENoYXJzOiBudW1iZXI7XHJcbiAgICBzd2l0Y2godGhpcy5oYWJiYWpldENvdW50KSB7XHJcbiAgICAgIGNhc2UgMjogbWF4Q2hhcnMgPSA1OyBicmVhaztcclxuICAgICAgY2FzZSAzOiBtYXhDaGFycyA9IDM7IGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6IG1heENoYXJzID0gMjsgYnJlYWs7XHJcbiAgICAgIGNhc2UgNTogbWF4Q2hhcnMgPSAxOyBicmVhaztcclxuICAgICAgY2FzZSA2OiBtYXhDaGFycyA9IDE7IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiBtYXhDaGFycyA9IDEwOyBicmVhaztcclxuICAgIH1cclxuICAgIF8uZWFjaCh0aGlzLmhhYmJhamV0TGlzdCwgKGgpID0+IHtcclxuICAgICAgaC51cGRhdGVUYWJUZXh0KG1heENoYXJzKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBuZXdGaWVsZHNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWROYW1lKCkgJiYgdGhpcy5pc1ZhbGlkVmFsdWUoKSAmJiB0aGlzLmlzVmFsaWRGYWN0b3IoKSAmJiB0aGlzLmlzVmFsaWRTbGFjaygpO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZE5hbWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uZXdIYWJiYWpldE5hbWUubGVuZ3RoID4gMCAmJlxyXG4gICAgIHRoaXMubmV3SGFiYmFqZXROYW1lLmxlbmd0aCA8IDE1O1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZFZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBfLnRvTnVtYmVyKHRoaXMubmV3SGFiYmFqZXRWYWx1ZSk7XHJcbiAgICByZXR1cm4gaXNGaW5pdGUodmFsdWUpICYmIHZhbHVlID4gMCAmJiB2YWx1ZSA8PSAxMDAwO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZEZhY3RvcigpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcih0aGlzLm5ld0hhYmJhamV0RmFjdG9yKTtcclxuICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgJiYgdmFsdWUgPiAxICYmIHZhbHVlIDw9IDEwMDtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRTbGFjaygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcih0aGlzLm5ld0hhYmJhamV0U2xhY2spO1xyXG4gICAgcmV0dXJuIGlzRmluaXRlKHZhbHVlKSAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDY7XHJcbiAgfVxyXG5cclxuICBuYW1lQ2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSB0ZXh0RmllbGQudGV4dDtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gdGV4dEZpZWxkLnRleHQ7XHJcbiAgfVxyXG5cclxuICBmYWN0b3JDaGFuZ2UoYXJncykge1xyXG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0RmFjdG9yID0gdGV4dEZpZWxkLnRleHQ7XHJcbiAgfVxyXG5cclxuICBzbGFja0NoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMubmV3SGFiYmFqZXRTbGFjayA9IHRleHRGaWVsZC50ZXh0O1xyXG4gIH1cclxuXHJcbiAgcmVzZXROZXdWYXJpYWJsZXMoKSB7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0TmFtZSA9ICcnO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gJyc7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0RmFjdG9yID0gJyc7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0U2xhY2sgPSAnJztcclxuICB9XHJcbn1cclxuIl19