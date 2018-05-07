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
var habbajet_service_1 = require("../../../../services/habbajet.service");
var HabbajetImageComponent = /** @class */ (function () {
    function HabbajetImageComponent(habbajetService, imageService) {
        this.habbajetService = habbajetService;
        this.imageService = imageService;
        this.image = this.habbajet.image;
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
        __metadata("design:type", habbajet_service_1.Habbajet)
    ], HabbajetImageComponent.prototype, "habbajet", void 0);
    HabbajetImageComponent = __decorate([
        core_1.Component({
            selector: "habbajet-image",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.html",
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.css"]
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService, images_service_1.ImageService])
    ], HabbajetImageComponent);
    return HabbajetImageComponent;
}());
exports.HabbajetImageComponent = HabbajetImageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBRWpELHNFQUErRTtBQUMvRSwwRUFBa0Y7QUFRbEY7SUFLSSxnQ0FBb0IsZUFBZ0MsRUFBVSxZQUEwQjtRQUFwRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNwRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUMxQixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVNLDJDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFoQlE7UUFBUixZQUFLLEVBQUU7a0NBQVcsMkJBQVE7NERBQUM7SUFEbkIsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSx5RUFBeUU7WUFDdEYsU0FBUyxFQUFFLENBQUMsd0VBQXdFLENBQUM7U0FDeEYsQ0FBQzt5Q0FPdUMsa0NBQWUsRUFBd0IsNkJBQVk7T0FML0Usc0JBQXNCLENBa0JsQztJQUFELDZCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSW1hZ2VTdGF0ZSwgSW1hZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2ltYWdlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0LCBIYWJiYWpldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJoYWJiYWpldC1pbWFnZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWltYWdlL2hhYmJhamV0LWltYWdlLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWltYWdlL2hhYmJhamV0LWltYWdlLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0SW1hZ2VDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaGFiYmFqZXQ6IEhhYmJhamV0O1xyXG4gICAgcHVibGljIGludGVydmFsSWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpbWFnZTogSW1hZ2VTdGF0ZTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmhhYmJhamV0LmltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UubmV4dFN0YXRlKHRoaXMuaW1hZ2UpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSW1hZ2VUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZXZvbHZlKHRoaXMuaW1hZ2UpO1xyXG4gICAgfVxyXG59Il19