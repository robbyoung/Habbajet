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
var habbajet_service_1 = require("../../../../services/habbajet.service");
var HabbajetButtonsComponent = /** @class */ (function () {
    function HabbajetButtonsComponent(habbajetService) {
        this.habbajetService = habbajetService;
    }
    HabbajetButtonsComponent.prototype.ngOnInit = function () {
        this.locked = false;
    };
    HabbajetButtonsComponent.prototype.onPositiveTap = function () {
        if (!this.locked) {
            this.habbajetService.evolve(this.habbajet);
        }
        // this.locked = true;
    };
    HabbajetButtonsComponent.prototype.onNegativeTap = function () {
        this.locked = true;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", habbajet_service_1.Habbajet)
    ], HabbajetButtonsComponent.prototype, "habbajet", void 0);
    HabbajetButtonsComponent = __decorate([
        core_1.Component({
            selector: "habbajet-buttons",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.html",
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.css"]
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetButtonsComponent);
    return HabbajetButtonsComponent;
}());
exports.HabbajetButtonsComponent = HabbajetButtonsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1idXR0b25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUVqRCwwRUFBa0Y7QUFTbEY7SUFJSSxrQ0FBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQztJQUV4RCwyQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELGdEQUFhLEdBQWI7UUFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFDRCxzQkFBc0I7SUFDMUIsQ0FBQztJQUVELGdEQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBbEJRO1FBQVIsWUFBSyxFQUFFO2tDQUFXLDJCQUFROzhEQUFDO0lBRG5CLHdCQUF3QjtRQU5wQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsNkVBQTZFO1lBQzFGLFNBQVMsRUFBRSxDQUFDLDRFQUE0RSxDQUFDO1NBQzVGLENBQUM7eUNBTXVDLGtDQUFlO09BSjNDLHdCQUF3QixDQW9CcEM7SUFBRCwrQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEhhYmJhamV0LCBIYWJiYWpldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGFiYmFqZXQtYnV0dG9uc1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWJ1dHRvbnMvaGFiYmFqZXQtYnV0dG9ucy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1idXR0b25zL2hhYmJhamV0LWJ1dHRvbnMuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRCdXR0b25zQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGhhYmJhamV0OiBIYWJiYWpldDtcclxuICAgIHB1YmxpYyBsb2NrZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUG9zaXRpdmVUYXAoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMubG9ja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmV2b2x2ZSh0aGlzLmhhYmJhamV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5sb2NrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmVnYXRpdmVUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59Il19