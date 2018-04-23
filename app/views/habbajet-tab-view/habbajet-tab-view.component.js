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
var frame = require("ui/frame");
var habbajet_service_1 = require("../../services/habbajet.service");
var HabbajetTabViewComponent = /** @class */ (function () {
    function HabbajetTabViewComponent(habbajetService) {
        this.habbajetService = habbajetService;
        setTimeout(function () {
            var page = frame.topmost().currentPage;
            page.getViewById('tabView').android.removeViewAt(0);
        }, 1000);
    }
    HabbajetTabViewComponent.prototype.showTab = function (index) {
        return this.habbajetService.habbajetExists(index);
    };
    HabbajetTabViewComponent.prototype.getName = function (index) {
        return this.habbajetService.getHabbajetName(index);
    };
    HabbajetTabViewComponent = __decorate([
        core_1.Component({
            selector: "habbajet-tab-view",
            templateUrl: "views/habbajet-tab-view/habbajet-tab-view.html",
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetTabViewComponent);
    return HabbajetTabViewComponent;
}());
exports.HabbajetTabViewComponent = HabbajetTabViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBRTFDLGdDQUFrQztBQUNsQyxvRUFBa0U7QUFPbEU7SUFFSSxrQ0FBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hELFVBQVUsQ0FBQztZQUNQLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTSwwQ0FBTyxHQUFkLFVBQWUsS0FBYTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLDBDQUFPLEdBQWQsVUFBZSxLQUFhO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBZlEsd0JBQXdCO1FBTHBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnREFBZ0Q7U0FDaEUsQ0FBQzt5Q0FJdUMsa0NBQWU7T0FGM0Msd0JBQXdCLENBZ0JwQztJQUFELCtCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd1aS9mcmFtZSc7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhhYmJhamV0LXRhYi12aWV3XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWItdmlldy5odG1sXCIsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRUYWJWaWV3Q29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2U7XHJcbiAgICAgICAgICAgIHBhZ2UuZ2V0Vmlld0J5SWQoJ3RhYlZpZXcnKS5hbmRyb2lkLnJlbW92ZVZpZXdBdCgwKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1RhYihpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmhhYmJhamV0RXhpc3RzKGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TmFtZShpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXROYW1lKGluZGV4KTtcclxuICAgIH1cclxufSJdfQ==