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
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.saveObject = require("application-settings");
        this.budget = new budget_1.BudgetBinding(this.saveObject);
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
                this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, i, "", false, "", 0, 0));
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
            this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, this.habbajetIndex, this.newHabbajetName, true, this.newHabbajetValue, _.toNumber(this.newHabbajetFactor), _.toNumber(this.newHabbajetSlack)));
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
        else if (index === -1) {
            this.onNewHabbajetTap();
        }
    };
    AppComponent.prototype.onNewHabbajetTap = function () {
        if (this.habbajetCount < 6) {
            this.habbajet = undefined;
            this.habbajetIndex = -1;
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
                maxChars = 4;
                break;
            case 4:
                maxChars = 3;
                break;
            case 5:
                maxChars = 2;
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
        var name = this.isValidName();
        var value = this.isValidValue();
        var factor = this.isValidFactor();
        var slack = this.isValidSlack();
        return name && value && factor && slack;
    };
    AppComponent.prototype.isValidName = function () {
        var valid = this.newHabbajetName.length > 0 &&
            this.newHabbajetName.length < 15;
        if (!valid) {
            frame.topmost().currentPage.getViewById("nameField").setInlineStyle('color: red');
        }
        return valid;
    };
    AppComponent.prototype.isValidValue = function () {
        var value = _.toNumber(this.newHabbajetValue);
        var valid = isFinite(value) && value > 0 && value <= 1000;
        if (!valid) {
            frame.topmost().currentPage.getViewById("valueField").setInlineStyle('color: red');
        }
        return valid;
    };
    AppComponent.prototype.isValidFactor = function () {
        var value = _.toNumber(this.newHabbajetFactor);
        var valid = isFinite(value) && value > 1 && value <= 100;
        if (!valid) {
            frame.topmost().currentPage.getViewById("factorField").setInlineStyle('color: red');
        }
        return valid;
    };
    AppComponent.prototype.isValidSlack = function () {
        var value = _.toNumber(this.newHabbajetSlack);
        var valid = isFinite(value) && value >= 0 && value <= 6;
        if (!valid) {
            frame.topmost().currentPage.getViewById("slackField").setInlineStyle('color: red');
        }
        return valid;
    };
    AppComponent.prototype.nameChange = function (args) {
        var textField = args.object;
        this.newHabbajetName = textField.text;
        frame.topmost().currentPage.getViewById("nameField").setInlineStyle('color: black');
    };
    AppComponent.prototype.valueChange = function (args) {
        var textField = args.object;
        this.newHabbajetValue = textField.text;
        frame.topmost().currentPage.getViewById("valueField").setInlineStyle('color: black');
    };
    AppComponent.prototype.factorChange = function (args) {
        var textField = args.object;
        this.newHabbajetFactor = textField.text;
        frame.topmost().currentPage.getViewById("factorField").setInlineStyle('color: black');
    };
    AppComponent.prototype.slackChange = function (args) {
        var textField = args.object;
        this.newHabbajetSlack = textField.text;
        frame.topmost().currentPage.getViewById("slackField").setInlineStyle('color: black');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUN6QywwQkFBNEI7QUFJNUIsZ0NBQW1DO0FBU25DO0lBaUJFO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksc0JBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxFQUFFLENBQUEsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLDBCQUFlLENBQUMsSUFBSSxDQUFD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SUFFRCx3Q0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBclFVLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxpQkFBaUI7U0FDL0IsQ0FBQzs7T0FFVyxZQUFZLENBc1F4QjtJQUFELG1CQUFDO0NBQUEsQUF0UUQsSUFzUUM7QUF0UVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldEJpbmRpbmcgfSBmcm9tIFwiLi9oYWJiYWpldFwiO1xyXG5pbXBvcnQgeyBDaGVja2JveEJpbmRpbmcgfSBmcm9tIFwiLi9jaGVja2JveFwiO1xyXG5pbXBvcnQgeyBCdWRnZXRCaW5kaW5nIH0gZnJvbSBcIi4vYnVkZ2V0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICogYXMgRGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgZnJhbWUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XHJcbmltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gXCIuL2RpYWxvZ2JveFwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2hhYmJhamV0Lmh0bWxcIixcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIHB1YmxpYyBoYWJiYWpldExpc3Q6IEhhYmJhamV0QmluZGluZ1tdO1xyXG4gIHB1YmxpYyBoYWJiYWpldDogSGFiYmFqZXRCaW5kaW5nO1xyXG4gIHB1YmxpYyBoYWJiYWpldEluZGV4OiBudW1iZXI7XHJcbiAgcHVibGljIGhhYmJhamV0Q291bnQ6IG51bWJlcjtcclxuICBwdWJsaWMgYnVkZ2V0OiBCdWRnZXRCaW5kaW5nO1xyXG4gIHB1YmxpYyBzYXZlT2JqZWN0OiBhbnk7XHJcbiAgcHVibGljIHRhYldpZHRoOiBudW1iZXI7XHJcbiAgcHVibGljIGRhdGU6IHN0cmluZztcclxuICBwdWJsaWMgY29sdW1uV2lkdGhzO1xyXG4gIHB1YmxpYyBlZGl0aW5nO1xyXG5cclxuICBwdWJsaWMgbmV3SGFiYmFqZXROYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG5ld0hhYmJhamV0VmFsdWU6IHN0cmluZztcclxuICBwdWJsaWMgbmV3SGFiYmFqZXRGYWN0b3I6IHN0cmluZztcclxuICBwdWJsaWMgbmV3SGFiYmFqZXRTbGFjazogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2F2ZU9iamVjdCA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuICAgIHRoaXMuYnVkZ2V0ID0gbmV3IEJ1ZGdldEJpbmRpbmcodGhpcy5zYXZlT2JqZWN0KTtcclxuICAgIHRoaXMuaGFiYmFqZXRMaXN0ID0gW107XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMubmV3SGFiYmFqZXROYW1lPVwiXCI7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWU9XCJcIjtcclxuICAgIHRoaXMubG9hZFNhdmVkRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFNhdmVkRGF0YSgpIHtcclxuICAgIGNvbnN0IHRvdGFsVmFsdWUgPSB0aGlzLnNhdmVPYmplY3QuZ2V0TnVtYmVyKFwidG90YWxcIik7XHJcbiAgICBpZih0b3RhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5idWRnZXQuc2V0VG90YWwodG90YWxWYWx1ZSk7XHJcbiAgICAgIGNvbnN0IGhhYmJhamV0Q291bnQgPSB0aGlzLnNhdmVPYmplY3QuZ2V0TnVtYmVyKFwiaGFiYmFqZXRDb3VudFwiKTtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGhhYmJhamV0Q291bnQ7IGkrKykge1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0QmluZGluZyh0aGlzLmJ1ZGdldCwgdGhpcy5zYXZlT2JqZWN0LCBpLCBcIlwiLCBmYWxzZSwgXCJcIiwgMCwgMCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGhhYmJhamV0Q291bnQgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5oYWJiYWpldENvdW50ID0gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoO1xyXG4gICAgdGhpcy5zZXRDb2x1bW5XaWR0aHMoKTtcclxuICB9XHJcblxyXG4gIG5ld0hhYmJhamV0KCkge1xyXG4gICAgaWYodGhpcy5uZXdGaWVsZHNWYWxpZCgpKSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aDtcclxuICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXRCaW5kaW5nKHRoaXMuYnVkZ2V0LCB0aGlzLnNhdmVPYmplY3QsXHJcbiAgICAgICAgICB0aGlzLmhhYmJhamV0SW5kZXgsIHRoaXMubmV3SGFiYmFqZXROYW1lLCB0cnVlLCB0aGlzLm5ld0hhYmJhamV0VmFsdWUsXHJcbiAgICAgICAgICBfLnRvTnVtYmVyKHRoaXMubmV3SGFiYmFqZXRGYWN0b3IpLCBfLnRvTnVtYmVyKHRoaXMubmV3SGFiYmFqZXRTbGFjaykpKTtcclxuICAgICAgdGhpcy5zYXZlT2JqZWN0LnNldE51bWJlcihcImhhYmJhamV0Q291bnRcIiwgdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoKTtcclxuICAgICAgdGhpcy5oYWJiYWpldENvdW50ID0gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoO1xyXG4gICAgICB0aGlzLnJlc2V0TmV3VmFyaWFibGVzKCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0SGFiYmFqZXQodGhpcy5oYWJiYWpldEluZGV4LCB0cnVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0Q29sdW1uV2lkdGhzKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RIYWJiYWpldChpbmRleDogbnVtYmVyLCBmb3JjZT86IGJvb2xlYW4pIHtcclxuICAgIGlmICgoaW5kZXggPj0gMCAmJiB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggPiBpbmRleCkgJiZcclxuICAgICAgICAodGhpcy5oYWJiYWpldEluZGV4ICE9PSBpbmRleCB8fCBmb3JjZSB8fCAhdGhpcy5oYWJiYWpldCkpIHtcclxuICAgICAgY29uc3QgaGFiYmFqZXREaXNwbGF5ID0gPFBhZ2U+ZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKFwiaGFiYmFqZXREaXNwbGF5XCIpO1xyXG4gICAgICBoYWJiYWpldERpc3BsYXkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXQgPSB0aGlzLmhhYmJhamV0TGlzdFt0aGlzLmhhYmJhamV0SW5kZXhdO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgaGFiYmFqZXREaXNwbGF5LmFuaW1hdGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHRoaXMub25OZXdIYWJiYWpldFRhcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25OZXdIYWJiYWpldFRhcCgpIHtcclxuICAgIGlmKHRoaXMuaGFiYmFqZXRDb3VudCA8IDYpIHtcclxuICAgICAgdGhpcy5oYWJiYWpldCA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94VGFwKGFyZ3MpIHtcclxuICAgIHRoaXMuaGFiYmFqZXQuZGFpbHlVcGRhdGUoYXJncy5pbmRleCk7XHJcbiAgfVxyXG5cclxuICBvblB1cmNoYXNlVGFwKGFyZ3MpIHtcclxuICAgIHRoaXMuYnVkZ2V0Lm1ha2VQdXJjaGFzZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Td2lwZShhcmdzKSB7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhcmdzLmRpcmVjdGlvbjtcclxuICAgIGlmKGRpcmVjdGlvbiA9PT0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdEhhYmJhamV0KHRoaXMuaGFiYmFqZXRJbmRleCAtIDEpO1xyXG4gICAgfSBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gMikge1xyXG4gICAgICB0aGlzLnNlbGVjdEhhYmJhamV0KHRoaXMuaGFiYmFqZXRJbmRleCArIDEpO1xyXG4gICAgfSBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gNCkge1xyXG4gICAgICB0aGlzLm9uRWRpdFRhcCgpO1xyXG4gICAgfSBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gOCAmJiB0aGlzLmVkaXRpbmcpIHtcclxuICAgICAgdGhpcy5jcm9zcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2soKSB7XHJcbiAgICBpZih0aGlzLmVkaXRpbmcpIHtcclxuICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQudXBkYXRlKHRoaXMubmV3SGFiYmFqZXROYW1lLCB0aGlzLm5ld0hhYmJhamV0VmFsdWUpO1xyXG4gICAgICB0aGlzLnJlc2V0TmV3VmFyaWFibGVzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhYmJhamV0LmRhaWx5VXBkYXRlKHRydWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjcm9zcygpIHtcclxuICAgIGlmKHRoaXMuZWRpdGluZykge1xyXG4gICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yZXNldE5ld1ZhcmlhYmxlcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYWJiYWpldC5kYWlseVVwZGF0ZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkltYWdlVGFwKCkge1xyXG4gICAgdGhpcy5oYWJiYWpldC5hY3QoKTtcclxuICB9XHJcblxyXG4gIG9uRWRpdFRhcCgpIHtcclxuICAgIGlmKF8uaXNOaWwodGhpcy5oYWJiYWpldCkgfHwgdGhpcy5lZGl0aW5nKSByZXR1cm47XHJcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSB0aGlzLmhhYmJhamV0Lm5hbWU7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWUgPSB0aGlzLmhhYmJhamV0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGVUYXAoKSB7XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFiYmFqZXQuZGVsZXRlRGF0YSgpO1xyXG4gICAgdGhpcy5oYWJiYWpldExpc3QgPSBfLmZpbHRlcih0aGlzLmhhYmJhamV0TGlzdCwgKGgpID0+IHtcclxuICAgICAgcmV0dXJuIGguaW5kZXggIT09IHRoaXMuaGFiYmFqZXRJbmRleDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZXNldE5ld1ZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5oYWJiYWpldENvdW50LS07XHJcbiAgICBmb3IobGV0IGkgPSB0aGlzLmhhYmJhamV0SW5kZXg7IGkgPCB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmhhYmJhamV0TGlzdFtpXS51cGRhdGVJbmRleChpKTtcclxuICAgIH1cclxuICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IDA7XHJcbiAgICBpZih0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0SGFiYmFqZXQoMCwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhYmJhamV0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRDb2x1bW5XaWR0aHMoKTtcclxuICAgIHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIsIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBzZXRDb2x1bW5XaWR0aHMoKSB7XHJcbiAgICBzd2l0Y2godGhpcy5oYWJiYWpldENvdW50KSB7XHJcbiAgICAgIGNhc2UgMjogdGhpcy5jb2x1bW5XaWR0aHMgPSAnKiwxNDAsMTQwLDAsMCwwLDAnOyBicmVhaztcclxuICAgICAgY2FzZSAzOiB0aGlzLmNvbHVtbldpZHRocyA9ICcqLDkzLDkzLDk0LDAsMCwwJzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDogdGhpcy5jb2x1bW5XaWR0aHMgPSAnKiw3MCw3MCw3MCw3MCwwLDAnOyBicmVhaztcclxuICAgICAgY2FzZSA1OiB0aGlzLmNvbHVtbldpZHRocyA9ICcqLDU2LDU2LDU2LDU2LDU2LDAnOyBicmVhaztcclxuICAgICAgY2FzZSA2OiB0aGlzLmNvbHVtbldpZHRocyA9ICcqLDQ2LDQ2LDQ3LDQ2LDQ2LDQ3JzsgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IHRoaXMuY29sdW1uV2lkdGhzID0gJyosMjgwLDAsMCwwLDAsMCc7IGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVUYWJUZXh0KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUYWJUZXh0KCkge1xyXG4gICAgbGV0IG1heENoYXJzOiBudW1iZXI7XHJcbiAgICBzd2l0Y2godGhpcy5oYWJiYWpldENvdW50KSB7XHJcbiAgICAgIGNhc2UgMjogbWF4Q2hhcnMgPSA1OyBicmVhaztcclxuICAgICAgY2FzZSAzOiBtYXhDaGFycyA9IDQ7IGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6IG1heENoYXJzID0gMzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgNTogbWF4Q2hhcnMgPSAyOyBicmVhaztcclxuICAgICAgY2FzZSA2OiBtYXhDaGFycyA9IDE7IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiBtYXhDaGFycyA9IDEwOyBicmVhaztcclxuICAgIH1cclxuICAgIF8uZWFjaCh0aGlzLmhhYmJhamV0TGlzdCwgKGgpID0+IHtcclxuICAgICAgaC51cGRhdGVUYWJUZXh0KG1heENoYXJzKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBuZXdGaWVsZHNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmlzVmFsaWROYW1lKCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaXNWYWxpZFZhbHVlKCk7XHJcbiAgICBjb25zdCBmYWN0b3IgPSB0aGlzLmlzVmFsaWRGYWN0b3IoKTtcclxuICAgIGNvbnN0IHNsYWNrID0gdGhpcy5pc1ZhbGlkU2xhY2soKTtcclxuICAgIHJldHVybiBuYW1lICYmIHZhbHVlICYmIGZhY3RvciAmJiBzbGFjaztcclxuICB9XHJcblxyXG4gIGlzVmFsaWROYW1lKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLm5ld0hhYmJhamV0TmFtZS5sZW5ndGggPiAwICYmXHJcbiAgICAgdGhpcy5uZXdIYWJiYWpldE5hbWUubGVuZ3RoIDwgMTU7XHJcbiAgICAgaWYoIXZhbGlkKSB7XHJcbiAgICAgICg8UGFnZT5mcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UpLmdldFZpZXdCeUlkKFwibmFtZUZpZWxkXCIpLnNldElubGluZVN0eWxlKCdjb2xvcjogcmVkJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IF8udG9OdW1iZXIodGhpcy5uZXdIYWJiYWpldFZhbHVlKTtcclxuICAgIGNvbnN0IHZhbGlkID0gaXNGaW5pdGUodmFsdWUpICYmIHZhbHVlID4gMCAmJiB2YWx1ZSA8PSAxMDAwO1xyXG4gICAgaWYoIXZhbGlkKSB7XHJcbiAgICAgICg8UGFnZT5mcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UpLmdldFZpZXdCeUlkKFwidmFsdWVGaWVsZFwiKS5zZXRJbmxpbmVTdHlsZSgnY29sb3I6IHJlZCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZEZhY3RvcigpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcih0aGlzLm5ld0hhYmJhamV0RmFjdG9yKTtcclxuICAgIGNvbnN0IHZhbGlkID0gaXNGaW5pdGUodmFsdWUpICYmIHZhbHVlID4gMSAmJiB2YWx1ZSA8PSAxMDA7XHJcbiAgICBpZighdmFsaWQpIHtcclxuICAgICAgKDxQYWdlPmZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZSkuZ2V0Vmlld0J5SWQoXCJmYWN0b3JGaWVsZFwiKS5zZXRJbmxpbmVTdHlsZSgnY29sb3I6IHJlZCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZFNsYWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBfLnRvTnVtYmVyKHRoaXMubmV3SGFiYmFqZXRTbGFjayk7XHJcbiAgICBjb25zdCB2YWxpZCA9IGlzRmluaXRlKHZhbHVlKSAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDY7XHJcbiAgICBpZighdmFsaWQpIHtcclxuICAgICAgKDxQYWdlPmZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZSkuZ2V0Vmlld0J5SWQoXCJzbGFja0ZpZWxkXCIpLnNldElubGluZVN0eWxlKCdjb2xvcjogcmVkJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbiAgfVxyXG5cclxuICBuYW1lQ2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSB0ZXh0RmllbGQudGV4dDtcclxuICAgICg8UGFnZT5mcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UpLmdldFZpZXdCeUlkKFwibmFtZUZpZWxkXCIpLnNldElubGluZVN0eWxlKCdjb2xvcjogYmxhY2snKTtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gdGV4dEZpZWxkLnRleHQ7XHJcbiAgICAoPFBhZ2U+ZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlKS5nZXRWaWV3QnlJZChcInZhbHVlRmllbGRcIikuc2V0SW5saW5lU3R5bGUoJ2NvbG9yOiBibGFjaycpO1xyXG4gIH1cclxuXHJcbiAgZmFjdG9yQ2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldEZhY3RvciA9IHRleHRGaWVsZC50ZXh0O1xyXG4gICAgKDxQYWdlPmZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZSkuZ2V0Vmlld0J5SWQoXCJmYWN0b3JGaWVsZFwiKS5zZXRJbmxpbmVTdHlsZSgnY29sb3I6IGJsYWNrJyk7XHJcbiAgfVxyXG5cclxuICBzbGFja0NoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMubmV3SGFiYmFqZXRTbGFjayA9IHRleHRGaWVsZC50ZXh0O1xyXG4gICAgKDxQYWdlPmZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZSkuZ2V0Vmlld0J5SWQoXCJzbGFja0ZpZWxkXCIpLnNldElubGluZVN0eWxlKCdjb2xvcjogYmxhY2snKTtcclxuICB9XHJcblxyXG4gIHJlc2V0TmV3VmFyaWFibGVzKCkge1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSAnJztcclxuICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldEZhY3RvciA9ICcnO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFNsYWNrID0gJyc7XHJcbiAgfVxyXG59XHJcbiJdfQ==