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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUN6QywwQkFBNEI7QUFJNUIsZ0NBQW1DO0FBQ25DLCtDQUE2QztBQVM3QztJQWtCRTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHNCQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxFQUFFLENBQUEsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dC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QThPQztBQTlPWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0QmluZGluZyB9IGZyb20gXCIuL2hhYmJhamV0XCI7XHJcbmltcG9ydCB7IENoZWNrYm94QmluZGluZyB9IGZyb20gXCIuL2NoZWNrYm94XCI7XHJcbmltcG9ydCB7IEJ1ZGdldEJpbmRpbmcgfSBmcm9tIFwiLi9idWRnZXRcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCBmcmFtZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcclxuaW1wb3J0IHsgRnJhbWVDb3VudHMgfSBmcm9tIFwiLi9mcmFtZS1jb3VudHNcIjtcclxuaW1wb3J0IHsgRGlhbG9nQm94IH0gZnJvbSBcIi4vZGlhbG9nYm94XCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vaGFiYmFqZXQuaHRtbFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgcHVibGljIGhhYmJhamV0TGlzdDogSGFiYmFqZXRCaW5kaW5nW107XHJcbiAgcHVibGljIGhhYmJhamV0OiBIYWJiYWpldEJpbmRpbmc7XHJcbiAgcHVibGljIGhhYmJhamV0SW5kZXg6IG51bWJlcjtcclxuICBwdWJsaWMgaGFiYmFqZXRDb3VudDogbnVtYmVyO1xyXG4gIHB1YmxpYyBidWRnZXQ6IEJ1ZGdldEJpbmRpbmc7XHJcbiAgcHVibGljIHNhdmVPYmplY3Q6IGFueTtcclxuICBwdWJsaWMgdGFiV2lkdGg6IG51bWJlcjtcclxuICBwdWJsaWMgZnJhbWVzOiBGcmFtZUNvdW50cztcclxuICBwdWJsaWMgZGF0ZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb2x1bW5XaWR0aHM7XHJcbiAgcHVibGljIGVkaXRpbmc7XHJcblxyXG4gIHB1YmxpYyBuZXdIYWJiYWpldE5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgbmV3SGFiYmFqZXRWYWx1ZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBuZXdIYWJiYWpldEZhY3Rvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBuZXdIYWJiYWpldFNsYWNrOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zYXZlT2JqZWN0ID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG4gICAgdGhpcy5idWRnZXQgPSBuZXcgQnVkZ2V0QmluZGluZyh0aGlzLnNhdmVPYmplY3QpO1xyXG4gICAgdGhpcy5mcmFtZXMgPSBuZXcgRnJhbWVDb3VudHMoKTtcclxuICAgIHRoaXMuaGFiYmFqZXRMaXN0ID1bXTtcclxuICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWU9XCJcIjtcclxuICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZT1cIlwiO1xyXG4gICAgdGhpcy5sb2FkU2F2ZWREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkU2F2ZWREYXRhKCkge1xyXG4gICAgY29uc3QgdG90YWxWYWx1ZSA9IHRoaXMuc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJ0b3RhbFwiKTtcclxuICAgIGlmKHRvdGFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmJ1ZGdldC5zZXRUb3RhbCh0b3RhbFZhbHVlKTtcclxuICAgICAgY29uc3QgaGFiYmFqZXRDb3VudCA9IHRoaXMuc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIpO1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGFiYmFqZXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXRCaW5kaW5nKHRoaXMuYnVkZ2V0LCB0aGlzLnNhdmVPYmplY3QsIGksIFwiXCIsIGZhbHNlLCB0aGlzLmZyYW1lcywgXCJcIiwgMCwgMCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGhhYmJhamV0Q291bnQgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5oYWJiYWpldENvdW50ID0gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoO1xyXG4gICAgdGhpcy5zZXRDb2x1bW5XaWR0aHMoKTtcclxuICB9XHJcblxyXG4gIG5ld0hhYmJhamV0KCkge1xyXG4gICAgaWYodGhpcy5uZXdGaWVsZHNWYWxpZCgpKSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aDtcclxuICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXRCaW5kaW5nKHRoaXMuYnVkZ2V0LCB0aGlzLnNhdmVPYmplY3QsXHJcbiAgICAgICAgICB0aGlzLmhhYmJhamV0SW5kZXgsIHRoaXMubmV3SGFiYmFqZXROYW1lLCB0cnVlLCB0aGlzLmZyYW1lcywgdGhpcy5uZXdIYWJiYWpldFZhbHVlLFxyXG4gICAgICAgICAgXy50b051bWJlcih0aGlzLm5ld0hhYmJhamV0RmFjdG9yKSwgXy50b051bWJlcih0aGlzLm5ld0hhYmJhamV0U2xhY2spKSk7XHJcbiAgICAgIHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIsIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCk7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRDb3VudCA9IHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aDtcclxuICAgICAgdGhpcy5yZXNldE5ld1ZhcmlhYmxlcygpO1xyXG4gICAgICB0aGlzLnNlbGVjdEhhYmJhamV0KHRoaXMuaGFiYmFqZXRJbmRleCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENvbHVtbldpZHRocygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SGFiYmFqZXQoaW5kZXg6IG51bWJlciwgZm9yY2U/OiBib29sZWFuKSB7XHJcbiAgICBpZiAoKGluZGV4ID49IDAgJiYgdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoID4gaW5kZXgpICYmXHJcbiAgICAgICAgKHRoaXMuaGFiYmFqZXRJbmRleCAhPT0gaW5kZXggfHwgZm9yY2UgfHwgIXRoaXMuaGFiYmFqZXQpKSB7XHJcbiAgICAgIGNvbnN0IGhhYmJhamV0RGlzcGxheSA9IDxQYWdlPmZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZChcImhhYmJhamV0RGlzcGxheVwiKTtcclxuICAgICAgaGFiYmFqZXREaXNwbGF5LmFuaW1hdGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0SW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGhhYmJhamV0RGlzcGxheS5hbmltYXRlKHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25OZXdIYWJiYWpldFRhcCgpIHtcclxuICAgIGlmKHRoaXMuaGFiYmFqZXRDb3VudCA8IDYpIHtcclxuICAgICAgdGhpcy5oYWJiYWpldCA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94VGFwKGFyZ3MpIHtcclxuICAgIHRoaXMuaGFiYmFqZXQuZGFpbHlVcGRhdGUoYXJncy5pbmRleCk7XHJcbiAgfVxyXG5cclxuICBvblB1cmNoYXNlVGFwKGFyZ3MpIHtcclxuICAgIHRoaXMuYnVkZ2V0Lm1ha2VQdXJjaGFzZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Td2lwZShhcmdzKSB7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhcmdzLmRpcmVjdGlvbjtcclxuICAgIGlmKGRpcmVjdGlvbiA9PT0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdEhhYmJhamV0KHRoaXMuaGFiYmFqZXRJbmRleCAtIDEpO1xyXG4gICAgfSBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gMikge1xyXG4gICAgICB0aGlzLnNlbGVjdEhhYmJhamV0KHRoaXMuaGFiYmFqZXRJbmRleCArIDEpO1xyXG4gICAgfSBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gNCkge1xyXG4gICAgICB0aGlzLm9uRWRpdFRhcCgpO1xyXG4gICAgfSBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gOCAmJiB0aGlzLmVkaXRpbmcpIHtcclxuICAgICAgdGhpcy5jcm9zcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2soKSB7XHJcbiAgICBpZih0aGlzLmVkaXRpbmcpIHtcclxuICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQudXBkYXRlKHRoaXMubmV3SGFiYmFqZXROYW1lLCB0aGlzLm5ld0hhYmJhamV0VmFsdWUpO1xyXG4gICAgICB0aGlzLnJlc2V0TmV3VmFyaWFibGVzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhYmJhamV0LmRhaWx5VXBkYXRlKHRydWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjcm9zcygpIHtcclxuICAgIGlmKHRoaXMuZWRpdGluZykge1xyXG4gICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yZXNldE5ld1ZhcmlhYmxlcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYWJiYWpldC5kYWlseVVwZGF0ZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkltYWdlVGFwKCkge1xyXG4gICAgdGhpcy5oYWJiYWpldC5hY3QoKTtcclxuICB9XHJcblxyXG4gIG9uRWRpdFRhcCgpIHtcclxuICAgIGlmKF8uaXNOaWwodGhpcy5oYWJiYWpldCkgfHwgdGhpcy5lZGl0aW5nKSByZXR1cm47XHJcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSB0aGlzLmhhYmJhamV0Lm5hbWU7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWUgPSB0aGlzLmhhYmJhamV0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGVUYXAoKSB7XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFiYmFqZXQuZGVsZXRlRGF0YSgpO1xyXG4gICAgdGhpcy5oYWJiYWpldExpc3QgPSBfLmZpbHRlcih0aGlzLmhhYmJhamV0TGlzdCwgKGgpID0+IHtcclxuICAgICAgcmV0dXJuIGguaW5kZXggIT09IHRoaXMuaGFiYmFqZXRJbmRleDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZXNldE5ld1ZhcmlhYmxlcygpO1xyXG4gICAgdGhpcy5oYWJiYWpldENvdW50LS07XHJcbiAgICBmb3IobGV0IGkgPSB0aGlzLmhhYmJhamV0SW5kZXg7IGkgPCB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmhhYmJhamV0TGlzdFtpXS51cGRhdGVJbmRleChpKTtcclxuICAgIH1cclxuICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IDA7XHJcbiAgICBpZih0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0SGFiYmFqZXQoMCwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhYmJhamV0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRDb2x1bW5XaWR0aHMoKTtcclxuICAgIHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIsIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBzZXRDb2x1bW5XaWR0aHMoKSB7XHJcbiAgICBzd2l0Y2godGhpcy5oYWJiYWpldENvdW50KSB7XHJcbiAgICAgIGNhc2UgMjogdGhpcy5jb2x1bW5XaWR0aHMgPSAnKiwxNDAsMTQwLDAsMCwwLDAnOyBicmVhaztcclxuICAgICAgY2FzZSAzOiB0aGlzLmNvbHVtbldpZHRocyA9ICcqLDkzLDkzLDk0LDAsMCwwJzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDogdGhpcy5jb2x1bW5XaWR0aHMgPSAnKiw3MCw3MCw3MCw3MCwwLDAnOyBicmVhaztcclxuICAgICAgY2FzZSA1OiB0aGlzLmNvbHVtbldpZHRocyA9ICcqLDU2LDU2LDU2LDU2LDU2LDAnOyBicmVhaztcclxuICAgICAgY2FzZSA2OiB0aGlzLmNvbHVtbldpZHRocyA9ICcqLDQ2LDQ2LDQ3LDQ2LDQ2LDQ3JzsgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IHRoaXMuY29sdW1uV2lkdGhzID0gJyosMjgwLDAsMCwwLDAsMCc7IGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVUYWJUZXh0KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUYWJUZXh0KCkge1xyXG4gICAgbGV0IG1heENoYXJzOiBudW1iZXI7XHJcbiAgICBzd2l0Y2godGhpcy5oYWJiYWpldENvdW50KSB7XHJcbiAgICAgIGNhc2UgMjogbWF4Q2hhcnMgPSA1OyBicmVhaztcclxuICAgICAgY2FzZSAzOiBtYXhDaGFycyA9IDQ7IGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6IG1heENoYXJzID0gMzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgNTogbWF4Q2hhcnMgPSAyOyBicmVhaztcclxuICAgICAgY2FzZSA2OiBtYXhDaGFycyA9IDE7IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiBtYXhDaGFycyA9IDEwOyBicmVhaztcclxuICAgIH1cclxuICAgIF8uZWFjaCh0aGlzLmhhYmJhamV0TGlzdCwgKGgpID0+IHtcclxuICAgICAgaC51cGRhdGVUYWJUZXh0KG1heENoYXJzKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBuZXdGaWVsZHNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWROYW1lKCkgJiYgdGhpcy5pc1ZhbGlkVmFsdWUoKSAmJiB0aGlzLmlzVmFsaWRGYWN0b3IoKSAmJiB0aGlzLmlzVmFsaWRTbGFjaygpO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZE5hbWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uZXdIYWJiYWpldE5hbWUubGVuZ3RoID4gMCAmJlxyXG4gICAgIHRoaXMubmV3SGFiYmFqZXROYW1lLmxlbmd0aCA8IDE1O1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZFZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBfLnRvTnVtYmVyKHRoaXMubmV3SGFiYmFqZXRWYWx1ZSk7XHJcbiAgICByZXR1cm4gaXNGaW5pdGUodmFsdWUpICYmIHZhbHVlID4gMCAmJiB2YWx1ZSA8PSAxMDAwO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZEZhY3RvcigpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcih0aGlzLm5ld0hhYmJhamV0RmFjdG9yKTtcclxuICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgJiYgdmFsdWUgPiAxICYmIHZhbHVlIDw9IDEwMDtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRTbGFjaygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcih0aGlzLm5ld0hhYmJhamV0U2xhY2spO1xyXG4gICAgcmV0dXJuIGlzRmluaXRlKHZhbHVlKSAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDY7XHJcbiAgfVxyXG5cclxuICBuYW1lQ2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSB0ZXh0RmllbGQudGV4dDtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gdGV4dEZpZWxkLnRleHQ7XHJcbiAgfVxyXG5cclxuICBmYWN0b3JDaGFuZ2UoYXJncykge1xyXG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0RmFjdG9yID0gdGV4dEZpZWxkLnRleHQ7XHJcbiAgfVxyXG5cclxuICBzbGFja0NoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgIHRoaXMubmV3SGFiYmFqZXRTbGFjayA9IHRleHRGaWVsZC50ZXh0O1xyXG4gIH1cclxuXHJcbiAgcmVzZXROZXdWYXJpYWJsZXMoKSB7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0TmFtZSA9ICcnO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gJyc7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0RmFjdG9yID0gJyc7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0U2xhY2sgPSAnJztcclxuICB9XHJcbn1cclxuIl19