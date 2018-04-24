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
var habbajet_service_1 = require("../../../services/habbajet.service");
var HabbajetTabComponent = /** @class */ (function () {
    function HabbajetTabComponent(habbajetService) {
        this.habbajetService = habbajetService;
    }
    HabbajetTabComponent.prototype.ngOnInit = function () {
        this.habbajet = this.habbajetService.getHabbajet(this.habbajetIndex);
        this.name = this.habbajetService.getHabbajetName(this.habbajetIndex) + ' (' + this.habbajetIndex + ')';
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HabbajetTabComponent.prototype, "habbajetIndex", void 0);
    HabbajetTabComponent = __decorate([
        core_1.Component({
            selector: "habbajet-tab",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-tab.html",
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetTabComponent);
    return HabbajetTabComponent;
}());
exports.HabbajetTabComponent = HabbajetTabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LXRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFFakQsdUVBQStFO0FBTy9FO0lBS0ksOEJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFeEQsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztJQUMzRyxDQUFDO0lBVFE7UUFBUixZQUFLLEVBQUU7OytEQUF1QjtJQUR0QixvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSx3REFBd0Q7U0FDeEUsQ0FBQzt5Q0FPdUMsa0NBQWU7T0FMM0Msb0JBQW9CLENBV2hDO0lBQUQsMkJBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBIYWJiYWpldCwgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGFiYmFqZXQtdGFiXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtdGFiLmh0bWxcIixcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldFRhYkNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBoYWJiYWpldEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGhhYmJhamV0OiBIYWJiYWpldDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXQodGhpcy5oYWJiYWpldEluZGV4KTtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldE5hbWUodGhpcy5oYWJiYWpldEluZGV4KSArICcgKCcgKyB0aGlzLmhhYmJhamV0SW5kZXggKyAnKSc7XHJcbiAgICB9XHJcbn0iXX0=