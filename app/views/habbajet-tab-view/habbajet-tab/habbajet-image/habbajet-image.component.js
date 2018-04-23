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
var images_service_1 = require("../../../../services/images.service");
var HabbajetImageComponent = /** @class */ (function () {
    function HabbajetImageComponent(imageService) {
        var _this = this;
        this.imageService = imageService;
        this.image = new images_service_1.ImageState();
        this.intervalId = setInterval(function () {
            imageService.nextState(_this.image);
        }, 100);
    }
    HabbajetImageComponent.prototype.onImageTap = function () {
        this.imageService.evolve(this.image);
    };
    HabbajetImageComponent = __decorate([
        core_1.Component({
            selector: "habbajet-image",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.html",
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.css"]
        }),
        __metadata("design:paramtypes", [images_service_1.ImageService])
    ], HabbajetImageComponent);
    return HabbajetImageComponent;
}());
exports.HabbajetImageComponent = HabbajetImageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBRWpELHNFQUErRTtBQVEvRTtJQUlJLGdDQUFvQixZQUEwQjtRQUE5QyxpQkFLQztRQUxtQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksMkJBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1lBQzFCLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFTSwyQ0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBYlEsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSx5RUFBeUU7WUFDdEYsU0FBUyxFQUFFLENBQUMsd0VBQXdFLENBQUM7U0FDeEYsQ0FBQzt5Q0FNb0MsNkJBQVk7T0FKckMsc0JBQXNCLENBY2xDO0lBQUQsNkJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBJbWFnZVN0YXRlLCBJbWFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvaW1hZ2VzLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGFiYmFqZXQtaW1hZ2VcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbWFnZS9oYWJiYWpldC1pbWFnZS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbWFnZS9oYWJiYWpldC1pbWFnZS5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldEltYWdlQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBpbWFnZTogSW1hZ2VTdGF0ZTtcclxuICAgIHB1YmxpYyBpbnRlcnZhbElkOiBudW1iZXI7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlU3RhdGUoKTtcclxuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGltYWdlU2VydmljZS5uZXh0U3RhdGUodGhpcy5pbWFnZSk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JbWFnZVRhcCgpIHtcclxuICAgICAgICB0aGlzLmltYWdlU2VydmljZS5ldm9sdmUodGhpcy5pbWFnZSk7XHJcbiAgICB9XHJcbn0iXX0=