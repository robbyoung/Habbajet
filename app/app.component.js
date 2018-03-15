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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUN6QywwQkFBNEI7QUFJNUIsZ0NBQW1DO0FBQ25DLCtDQUE2QztBQVM3QztJQWtCRTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHNCQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxFQUFFLENBQUEsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dC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Q2hDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFZLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQsd0NBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXZRVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsaUJBQWlCO1NBQy9CLENBQUM7O09BRVcsWUFBWSxDQXdReEI7SUFBRCxtQkFBQztDQUFBLEFBeFFELElBd1FDO0FBeFFZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRCaW5kaW5nIH0gZnJvbSBcIi4vaGFiYmFqZXRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3hCaW5kaW5nIH0gZnJvbSBcIi4vY2hlY2tib3hcIjtcclxuaW1wb3J0IHsgQnVkZ2V0QmluZGluZyB9IGZyb20gXCIuL2J1ZGdldFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IGZyYW1lID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xyXG5pbXBvcnQgeyBGcmFtZUNvdW50cyB9IGZyb20gXCIuL2ZyYW1lLWNvdW50c1wiO1xyXG5pbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tIFwiLi9kaWFsb2dib3hcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9oYWJiYWpldC5odG1sXCIsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBwdWJsaWMgaGFiYmFqZXRMaXN0OiBIYWJiYWpldEJpbmRpbmdbXTtcclxuICBwdWJsaWMgaGFiYmFqZXQ6IEhhYmJhamV0QmluZGluZztcclxuICBwdWJsaWMgaGFiYmFqZXRJbmRleDogbnVtYmVyO1xyXG4gIHB1YmxpYyBoYWJiYWpldENvdW50OiBudW1iZXI7XHJcbiAgcHVibGljIGJ1ZGdldDogQnVkZ2V0QmluZGluZztcclxuICBwdWJsaWMgc2F2ZU9iamVjdDogYW55O1xyXG4gIHB1YmxpYyB0YWJXaWR0aDogbnVtYmVyO1xyXG4gIHB1YmxpYyBmcmFtZXM6IEZyYW1lQ291bnRzO1xyXG4gIHB1YmxpYyBkYXRlOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvbHVtbldpZHRocztcclxuICBwdWJsaWMgZWRpdGluZztcclxuXHJcbiAgcHVibGljIG5ld0hhYmJhamV0TmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBuZXdIYWJiYWpldFZhbHVlOiBzdHJpbmc7XHJcbiAgcHVibGljIG5ld0hhYmJhamV0RmFjdG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIG5ld0hhYmJhamV0U2xhY2s6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNhdmVPYmplY3QgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcbiAgICB0aGlzLmJ1ZGdldCA9IG5ldyBCdWRnZXRCaW5kaW5nKHRoaXMuc2F2ZU9iamVjdCk7XHJcbiAgICB0aGlzLmZyYW1lcyA9IG5ldyBGcmFtZUNvdW50cygpO1xyXG4gICAgdGhpcy5oYWJiYWpldExpc3QgPSBbXTtcclxuICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWU9XCJcIjtcclxuICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZT1cIlwiO1xyXG4gICAgdGhpcy5sb2FkU2F2ZWREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkU2F2ZWREYXRhKCkge1xyXG4gICAgY29uc3QgdG90YWxWYWx1ZSA9IHRoaXMuc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJ0b3RhbFwiKTtcclxuICAgIGlmKHRvdGFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmJ1ZGdldC5zZXRUb3RhbCh0b3RhbFZhbHVlKTtcclxuICAgICAgY29uc3QgaGFiYmFqZXRDb3VudCA9IHRoaXMuc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIpO1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGFiYmFqZXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXRCaW5kaW5nKHRoaXMuYnVkZ2V0LCB0aGlzLnNhdmVPYmplY3QsIGksIFwiXCIsIGZhbHNlLCB0aGlzLmZyYW1lcywgXCJcIiwgMCwgMCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGhhYmJhamV0Q291bnQgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5oYWJiYWpldENvdW50ID0gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoO1xyXG4gICAgdGhpcy5zZXRDb2x1bW5XaWR0aHMoKTtcclxuICB9XHJcblxyXG4gIG5ld0hhYmJhamV0KCkge1xyXG4gICAgaWYodGhpcy5uZXdGaWVsZHNWYWxpZCgpKSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aDtcclxuICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXRCaW5kaW5nKHRoaXMuYnVkZ2V0LCB0aGlzLnNhdmVPYmplY3QsXHJcbiAgICAgICAgICB0aGlzLmhhYmJhamV0SW5kZXgsIHRoaXMubmV3SGFiYmFqZXROYW1lLCB0cnVlLCB0aGlzLmZyYW1lcywgdGhpcy5uZXdIYWJiYWpldFZhbHVlLFxyXG4gICAgICAgICAgXy50b051bWJlcih0aGlzLm5ld0hhYmJhamV0RmFjdG9yKSwgXy50b051bWJlcih0aGlzLm5ld0hhYmJhamV0U2xhY2spKSk7XHJcbiAgICAgIHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIsIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCk7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRDb3VudCA9IHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aDtcclxuICAgICAgdGhpcy5yZXNldE5ld1ZhcmlhYmxlcygpO1xyXG4gICAgICB0aGlzLnNlbGVjdEhhYmJhamV0KHRoaXMuaGFiYmFqZXRJbmRleCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENvbHVtbldpZHRocygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SGFiYmFqZXQoaW5kZXg6IG51bWJlciwgZm9yY2U/OiBib29sZWFuKSB7XHJcbiAgICBpZiAoKGluZGV4ID49IDAgJiYgdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoID4gaW5kZXgpICYmXHJcbiAgICAgICAgKHRoaXMuaGFiYmFqZXRJbmRleCAhPT0gaW5kZXggfHwgZm9yY2UgfHwgIXRoaXMuaGFiYmFqZXQpKSB7XHJcbiAgICAgIGNvbnN0IGhhYmJhamV0RGlzcGxheSA9IDxQYWdlPmZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZChcImhhYmJhamV0RGlzcGxheVwiKTtcclxuICAgICAgaGFiYmFqZXREaXNwbGF5LmFuaW1hdGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0SW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGhhYmJhamV0RGlzcGxheS5hbmltYXRlKHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmKGluZGV4ID09PSAtMSkge1xyXG4gICAgICB0aGlzLm9uTmV3SGFiYmFqZXRUYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTmV3SGFiYmFqZXRUYXAoKSB7XHJcbiAgICBpZih0aGlzLmhhYmJhamV0Q291bnQgPCA2KSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveFRhcChhcmdzKSB7XHJcbiAgICB0aGlzLmhhYmJhamV0LmRhaWx5VXBkYXRlKGFyZ3MuaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgb25QdXJjaGFzZVRhcChhcmdzKSB7XHJcbiAgICB0aGlzLmJ1ZGdldC5tYWtlUHVyY2hhc2UoKTtcclxuICB9XHJcblxyXG4gIG9uU3dpcGUoYXJncykge1xyXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYXJncy5kaXJlY3Rpb247XHJcbiAgICBpZihkaXJlY3Rpb24gPT09IDEpIHtcclxuICAgICAgdGhpcy5zZWxlY3RIYWJiYWpldCh0aGlzLmhhYmJhamV0SW5kZXggLSAxKTtcclxuICAgIH0gZWxzZSBpZihkaXJlY3Rpb24gPT09IDIpIHtcclxuICAgICAgdGhpcy5zZWxlY3RIYWJiYWpldCh0aGlzLmhhYmJhamV0SW5kZXggKyAxKTtcclxuICAgIH0gZWxzZSBpZihkaXJlY3Rpb24gPT09IDQpIHtcclxuICAgICAgdGhpcy5vbkVkaXRUYXAoKTtcclxuICAgIH0gZWxzZSBpZihkaXJlY3Rpb24gPT09IDggJiYgdGhpcy5lZGl0aW5nKSB7XHJcbiAgICAgIHRoaXMuY3Jvc3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrKCkge1xyXG4gICAgaWYodGhpcy5lZGl0aW5nKSB7XHJcbiAgICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhhYmJhamV0LnVwZGF0ZSh0aGlzLm5ld0hhYmJhamV0TmFtZSwgdGhpcy5uZXdIYWJiYWpldFZhbHVlKTtcclxuICAgICAgdGhpcy5yZXNldE5ld1ZhcmlhYmxlcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYWJiYWpldC5kYWlseVVwZGF0ZSh0cnVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgY3Jvc3MoKSB7XHJcbiAgICBpZih0aGlzLmVkaXRpbmcpIHtcclxuICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucmVzZXROZXdWYXJpYWJsZXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQuZGFpbHlVcGRhdGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JbWFnZVRhcCgpIHtcclxuICAgIHRoaXMuaGFiYmFqZXQuYWN0KCk7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRUYXAoKSB7XHJcbiAgICBpZihfLmlzTmlsKHRoaXMuaGFiYmFqZXQpIHx8IHRoaXMuZWRpdGluZykgcmV0dXJuO1xyXG4gICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMubmV3SGFiYmFqZXROYW1lID0gdGhpcy5oYWJiYWpldC5uYW1lO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gdGhpcy5oYWJiYWpldC52YWx1ZTtcclxuICB9XHJcblxyXG4gIG9uRGVsZXRlVGFwKCkge1xyXG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmhhYmJhamV0LmRlbGV0ZURhdGEoKTtcclxuICAgIHRoaXMuaGFiYmFqZXRMaXN0ID0gXy5maWx0ZXIodGhpcy5oYWJiYWpldExpc3QsIChoKSA9PiB7XHJcbiAgICAgIHJldHVybiBoLmluZGV4ICE9PSB0aGlzLmhhYmJhamV0SW5kZXg7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVzZXROZXdWYXJpYWJsZXMoKTtcclxuICAgIHRoaXMuaGFiYmFqZXRDb3VudC0tO1xyXG4gICAgZm9yKGxldCBpID0gdGhpcy5oYWJiYWpldEluZGV4OyBpIDwgdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5oYWJiYWpldExpc3RbaV0udXBkYXRlSW5kZXgoaSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhhYmJhamV0SW5kZXggPSAwO1xyXG4gICAgaWYodGhpcy5oYWJiYWpldExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNlbGVjdEhhYmJhamV0KDAsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYWJiYWpldCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0Q29sdW1uV2lkdGhzKCk7XHJcbiAgICB0aGlzLnNhdmVPYmplY3Quc2V0TnVtYmVyKFwiaGFiYmFqZXRDb3VudFwiLCB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29sdW1uV2lkdGhzKCkge1xyXG4gICAgc3dpdGNoKHRoaXMuaGFiYmFqZXRDb3VudCkge1xyXG4gICAgICBjYXNlIDI6IHRoaXMuY29sdW1uV2lkdGhzID0gJyosMTQwLDE0MCwwLDAsMCwwJzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzogdGhpcy5jb2x1bW5XaWR0aHMgPSAnKiw5Myw5Myw5NCwwLDAsMCc7IGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6IHRoaXMuY29sdW1uV2lkdGhzID0gJyosNzAsNzAsNzAsNzAsMCwwJzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgNTogdGhpcy5jb2x1bW5XaWR0aHMgPSAnKiw1Niw1Niw1Niw1Niw1NiwwJzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgNjogdGhpcy5jb2x1bW5XaWR0aHMgPSAnKiw0Niw0Niw0Nyw0Niw0Niw0Nyc7IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiB0aGlzLmNvbHVtbldpZHRocyA9ICcqLDI4MCwwLDAsMCwwLDAnOyBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlVGFiVGV4dCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGFiVGV4dCgpIHtcclxuICAgIGxldCBtYXhDaGFyczogbnVtYmVyO1xyXG4gICAgc3dpdGNoKHRoaXMuaGFiYmFqZXRDb3VudCkge1xyXG4gICAgICBjYXNlIDI6IG1heENoYXJzID0gNTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzogbWF4Q2hhcnMgPSA0OyBicmVhaztcclxuICAgICAgY2FzZSA0OiBtYXhDaGFycyA9IDM7IGJyZWFrO1xyXG4gICAgICBjYXNlIDU6IG1heENoYXJzID0gMjsgYnJlYWs7XHJcbiAgICAgIGNhc2UgNjogbWF4Q2hhcnMgPSAxOyBicmVhaztcclxuICAgICAgZGVmYXVsdDogbWF4Q2hhcnMgPSAxMDsgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBfLmVhY2godGhpcy5oYWJiYWpldExpc3QsIChoKSA9PiB7XHJcbiAgICAgIGgudXBkYXRlVGFiVGV4dChtYXhDaGFycyk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmV3RmllbGRzVmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBuYW1lID0gdGhpcy5pc1ZhbGlkTmFtZSgpO1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmlzVmFsaWRWYWx1ZSgpO1xyXG4gICAgY29uc3QgZmFjdG9yID0gdGhpcy5pc1ZhbGlkRmFjdG9yKCk7XHJcbiAgICBjb25zdCBzbGFjayA9IHRoaXMuaXNWYWxpZFNsYWNrKCk7XHJcbiAgICByZXR1cm4gbmFtZSAmJiB2YWx1ZSAmJiBmYWN0b3IgJiYgc2xhY2s7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkTmFtZSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5uZXdIYWJiYWpldE5hbWUubGVuZ3RoID4gMCAmJlxyXG4gICAgIHRoaXMubmV3SGFiYmFqZXROYW1lLmxlbmd0aCA8IDE1O1xyXG4gICAgIGlmKCF2YWxpZCkge1xyXG4gICAgICAoPFBhZ2U+ZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlKS5nZXRWaWV3QnlJZChcIm5hbWVGaWVsZFwiKS5zZXRJbmxpbmVTdHlsZSgnY29sb3I6IHJlZCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZFZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBfLnRvTnVtYmVyKHRoaXMubmV3SGFiYmFqZXRWYWx1ZSk7XHJcbiAgICBjb25zdCB2YWxpZCA9IGlzRmluaXRlKHZhbHVlKSAmJiB2YWx1ZSA+IDAgJiYgdmFsdWUgPD0gMTAwMDtcclxuICAgIGlmKCF2YWxpZCkge1xyXG4gICAgICAoPFBhZ2U+ZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlKS5nZXRWaWV3QnlJZChcInZhbHVlRmllbGRcIikuc2V0SW5saW5lU3R5bGUoJ2NvbG9yOiByZWQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWxpZDtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRGYWN0b3IoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IF8udG9OdW1iZXIodGhpcy5uZXdIYWJiYWpldEZhY3Rvcik7XHJcbiAgICBjb25zdCB2YWxpZCA9IGlzRmluaXRlKHZhbHVlKSAmJiB2YWx1ZSA+IDEgJiYgdmFsdWUgPD0gMTAwO1xyXG4gICAgaWYoIXZhbGlkKSB7XHJcbiAgICAgICg8UGFnZT5mcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UpLmdldFZpZXdCeUlkKFwiZmFjdG9yRmllbGRcIikuc2V0SW5saW5lU3R5bGUoJ2NvbG9yOiByZWQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWxpZDtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRTbGFjaygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcih0aGlzLm5ld0hhYmJhamV0U2xhY2spO1xyXG4gICAgY29uc3QgdmFsaWQgPSBpc0Zpbml0ZSh2YWx1ZSkgJiYgdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA2O1xyXG4gICAgaWYoIXZhbGlkKSB7XHJcbiAgICAgICg8UGFnZT5mcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UpLmdldFZpZXdCeUlkKFwic2xhY2tGaWVsZFwiKS5zZXRJbmxpbmVTdHlsZSgnY29sb3I6IHJlZCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG4gIH1cclxuXHJcbiAgbmFtZUNoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMubmV3SGFiYmFqZXROYW1lID0gdGV4dEZpZWxkLnRleHQ7XHJcbiAgICAoPFBhZ2U+ZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlKS5nZXRWaWV3QnlJZChcIm5hbWVGaWVsZFwiKS5zZXRJbmxpbmVTdHlsZSgnY29sb3I6IGJsYWNrJyk7XHJcbiAgfVxyXG5cclxuICB2YWx1ZUNoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSA9IHRleHRGaWVsZC50ZXh0O1xyXG4gICAgKDxQYWdlPmZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZSkuZ2V0Vmlld0J5SWQoXCJ2YWx1ZUZpZWxkXCIpLnNldElubGluZVN0eWxlKCdjb2xvcjogYmxhY2snKTtcclxuICB9XHJcblxyXG4gIGZhY3RvckNoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMubmV3SGFiYmFqZXRGYWN0b3IgPSB0ZXh0RmllbGQudGV4dDtcclxuICAgICg8UGFnZT5mcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UpLmdldFZpZXdCeUlkKFwiZmFjdG9yRmllbGRcIikuc2V0SW5saW5lU3R5bGUoJ2NvbG9yOiBibGFjaycpO1xyXG4gIH1cclxuXHJcbiAgc2xhY2tDaGFuZ2UoYXJncykge1xyXG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0U2xhY2sgPSB0ZXh0RmllbGQudGV4dDtcclxuICAgICg8UGFnZT5mcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UpLmdldFZpZXdCeUlkKFwic2xhY2tGaWVsZFwiKS5zZXRJbmxpbmVTdHlsZSgnY29sb3I6IGJsYWNrJyk7XHJcbiAgfVxyXG5cclxuICByZXNldE5ld1ZhcmlhYmxlcygpIHtcclxuICAgIHRoaXMubmV3SGFiYmFqZXROYW1lID0gJyc7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWUgPSAnJztcclxuICAgIHRoaXMubmV3SGFiYmFqZXRGYWN0b3IgPSAnJztcclxuICAgIHRoaXMubmV3SGFiYmFqZXRTbGFjayA9ICcnO1xyXG4gIH1cclxufVxyXG4iXX0=