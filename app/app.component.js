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
        habbajetService = new habbajet_service_1.HabbajetService();
        imageService = new images_service_1.ImageService();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFFNUQsZ0VBQThEO0FBQzlELDREQUF5RDtBQU96RDtJQUVFLHNCQUFvQixlQUFnQyxFQUFVLFlBQTBCO1FBQXBFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3RGLGVBQWUsR0FBRyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztRQUN4QyxZQUFZLEdBQUcsSUFBSSw2QkFBWSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUxVLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxhQUFhO1NBQzNCLENBQUM7eUNBSXFDLGtDQUFlLEVBQXdCLDZCQUFZO09BRjdFLFlBQVksQ0FNeEI7SUFBRCxtQkFBQztDQUFBLEFBTkQsSUFNQztBQU5ZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2ltYWdlcy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYWluXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9tYWluLmh0bWxcIixcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlKSB7XHJcbiAgICBoYWJiYWpldFNlcnZpY2UgPSBuZXcgSGFiYmFqZXRTZXJ2aWNlKCk7XHJcbiAgICBpbWFnZVNlcnZpY2UgPSBuZXcgSW1hZ2VTZXJ2aWNlKCk7XHJcbiAgfVxyXG59Il19