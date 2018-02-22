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
    AppComponent.prototype.nameChange = function (args) {
        var textField = args.object;
        this.newHabbajetName = textField.text;
    };
    AppComponent.prototype.valueChange = function (args) {
        var textField = args.object;
        this.newHabbajetValue = textField.text;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUN6QywwQkFBNEI7QUFHNUIsK0NBQTZDO0FBTzdDO0lBWUU7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxzQkFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0UsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsRUFBRSxDQUFBLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakUsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSwwQkFBZSxDQUFD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RyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ2IsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ2QsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztJQUN6QyxDQUFDO0lBN0ZVLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxpQkFBaUI7U0FDL0IsQ0FBQzs7T0FFVyxZQUFZLENBOEZ4QjtJQUFELG1CQUFDO0NBQUEsQUE5RkQsSUE4RkM7QUE5Rlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldEJpbmRpbmcgfSBmcm9tIFwiLi9oYWJiYWpldFwiO1xyXG5pbXBvcnQgeyBDaGVja2JveEJpbmRpbmcgfSBmcm9tIFwiLi9jaGVja2JveFwiO1xyXG5pbXBvcnQgeyBCdWRnZXRCaW5kaW5nIH0gZnJvbSBcIi4vYnVkZ2V0XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICogYXMgRGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgRnJhbWVDb3VudHMgfSBmcm9tIFwiLi9mcmFtZS1jb3VudHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vaGFiYmFqZXQuaHRtbFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgcHVibGljIGhhYmJhamV0TGlzdDogSGFiYmFqZXRCaW5kaW5nW107XHJcbiAgcHVibGljIGhhYmJhamV0OiBIYWJiYWpldEJpbmRpbmc7XHJcbiAgcHVibGljIGhhYmJhamV0SW5kZXg6IG51bWJlcjtcclxuICBwdWJsaWMgaGFiYmFqZXRDb3VudDogbnVtYmVyO1xyXG4gIHB1YmxpYyBidWRnZXQ6IEJ1ZGdldEJpbmRpbmc7XHJcbiAgcHVibGljIHNhdmVPYmplY3Q6IGFueTtcclxuICBwdWJsaWMgdGFiV2lkdGg6IG51bWJlcjtcclxuICBwdWJsaWMgZnJhbWVzOiBGcmFtZUNvdW50cztcclxuICBwdWJsaWMgbmV3SGFiYmFqZXROYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG5ld0hhYmJhamV0VmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNhdmVPYmplY3QgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcbiAgICB0aGlzLmJ1ZGdldCA9IG5ldyBCdWRnZXRCaW5kaW5nKHRoaXMuc2F2ZU9iamVjdCk7XHJcbiAgICB0aGlzLmZyYW1lcyA9IG5ldyBGcmFtZUNvdW50cygpO1xyXG4gICAgdGhpcy5oYWJiYWpldExpc3QgPVtdO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWU9XCJcIjtcclxuICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZT1cIlwiO1xyXG4gICAgdGhpcy5sb2FkU2F2ZWREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkU2F2ZWREYXRhKCkge1xyXG4gICAgY29uc3QgdG90YWxWYWx1ZSA9IHRoaXMuc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJ0b3RhbFwiKTtcclxuICAgIGlmKHRvdGFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmJ1ZGdldC5zZXRUb3RhbCh0b3RhbFZhbHVlKTtcclxuICAgICAgY29uc3QgaGFiYmFqZXRDb3VudCA9IHRoaXMuc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIpO1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGFiYmFqZXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXRCaW5kaW5nKHRoaXMuYnVkZ2V0LCB0aGlzLnNhdmVPYmplY3QsIGksIFwiXCIsIGZhbHNlLCB0aGlzLmZyYW1lcywgXCJcIikpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGhhYmJhamV0Q291bnQgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5oYWJiYWpldENvdW50ID0gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoICsgMTtcclxuICB9XHJcblxyXG4gIG5ld0hhYmJhamV0KCkge1xyXG4gICAgaWYodGhpcy5pc1ZhbGlkTmFtZSgpICYmIHRoaXMuaXNWYWxpZFZhbHVlKCkpIHtcclxuICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoO1xyXG4gICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKG5ldyBIYWJiYWpldEJpbmRpbmcodGhpcy5idWRnZXQsIHRoaXMuc2F2ZU9iamVjdCxcclxuICAgICAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCwgdGhpcy5uZXdIYWJiYWpldE5hbWUsIHRydWUsIHRoaXMuZnJhbWVzLCB0aGlzLm5ld0hhYmJhamV0VmFsdWUpKTtcclxuICAgICAgdGhpcy5oYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0W3RoaXMuaGFiYmFqZXRJbmRleF07XHJcbiAgICAgIHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIsIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhhYmJhamV0Q291bnQgPSB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggKyAxO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SGFiYmFqZXQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCA+IGluZGV4KSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hUYXAoYXJncykge1xyXG4gICAgdGhpcy5oYWJiYWpldC5kYWlseVVwZGF0ZShhcmdzLmluZGV4KTtcclxuICB9XHJcblxyXG4gIG9uUHVyY2hhc2VUYXAoYXJncykge1xyXG4gICAgdGhpcy5idWRnZXQubWFrZVB1cmNoYXNlKCk7XHJcbiAgfVxyXG5cclxuICBjaGVjaygpIHtcclxuICAgIHRoaXMuaGFiYmFqZXQuZGFpbHlVcGRhdGUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjcm9zcygpIHtcclxuICAgIHRoaXMuaGFiYmFqZXQuZGFpbHlVcGRhdGUoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgb25JbWFnZVRhcCgpIHtcclxuICAgIHRoaXMuaGFiYmFqZXQuYWN0KCk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkTmFtZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm5ld0hhYmJhamV0TmFtZS5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZFZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBfLnRvTnVtYmVyKHRoaXMubmV3SGFiYmFqZXRWYWx1ZSk7XHJcbiAgICByZXR1cm4gaXNGaW5pdGUodmFsdWUpICYmIHZhbHVlID4gMDtcclxuICB9XHJcblxyXG4gIG5hbWVDaGFuZ2UoYXJncykge1xyXG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0TmFtZSA9IHRleHRGaWVsZC50ZXh0O1xyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2UoYXJncykge1xyXG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWUgPSB0ZXh0RmllbGQudGV4dDtcclxuICB9XHJcbn1cclxuIl19