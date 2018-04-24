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
        this.imageService = imageService;
    }
    HabbajetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.intervalId = setInterval(function () {
            _this.imageService.nextState(_this.image);
        }, 100);
    };
    HabbajetImageComponent.prototype.onImageTap = function () {
        this.imageService.evolve(this.image);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", images_service_1.ImageState)
    ], HabbajetImageComponent.prototype, "image", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBRWpELHNFQUErRTtBQVEvRTtJQUlJLGdDQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFFbEQseUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7WUFDMUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFTSwyQ0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBYlE7UUFBUixZQUFLLEVBQUU7a0NBQVEsMkJBQVU7eURBQUM7SUFEbEIsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSx5RUFBeUU7WUFDdEYsU0FBUyxFQUFFLENBQUMsd0VBQXdFLENBQUM7U0FDeEYsQ0FBQzt5Q0FNb0MsNkJBQVk7T0FKckMsc0JBQXNCLENBZWxDO0lBQUQsNkJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBJbWFnZVN0YXRlLCBJbWFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvaW1hZ2VzLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGFiYmFqZXQtaW1hZ2VcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbWFnZS9oYWJiYWpldC1pbWFnZS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbWFnZS9oYWJiYWpldC1pbWFnZS5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldEltYWdlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGltYWdlOiBJbWFnZVN0YXRlO1xyXG4gICAgcHVibGljIGludGVydmFsSWQ6IG51bWJlcjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLm5leHRTdGF0ZSh0aGlzLmltYWdlKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkltYWdlVGFwKCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmV2b2x2ZSh0aGlzLmltYWdlKTtcclxuICAgIH1cclxufSJdfQ==