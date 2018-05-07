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
var habbajet_service_1 = require("./services/habbajet.service");
var images_service_1 = require("./services/images.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(habbajetService, imageService) {
        this.habbajetService = habbajetService;
        this.imageService = imageService;
        imageService = new images_service_1.ImageService();
        habbajetService = new habbajet_service_1.HabbajetService(imageService);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            templateUrl: "./main.html",
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService, images_service_1.ImageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFFNUQsZ0VBQThEO0FBQzlELDREQUF5RDtBQU96RDtJQUVFLHNCQUFvQixlQUFnQyxFQUFVLFlBQTBCO1FBQXBFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3RGLFlBQVksR0FBRyxJQUFJLDZCQUFZLEVBQUUsQ0FBQztRQUNsQyxlQUFlLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXRELENBQUM7SUFOVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDO3lDQUlxQyxrQ0FBZSxFQUF3Qiw2QkFBWTtPQUY3RSxZQUFZLENBT3hCO0lBQUQsbUJBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9pbWFnZXMuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWFpblwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbWFpbi5odG1sXCIsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSkge1xyXG4gICAgaW1hZ2VTZXJ2aWNlID0gbmV3IEltYWdlU2VydmljZSgpO1xyXG4gICAgaGFiYmFqZXRTZXJ2aWNlID0gbmV3IEhhYmJhamV0U2VydmljZShpbWFnZVNlcnZpY2UpO1xyXG4gICAgXHJcbiAgfVxyXG59Il19