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
var images_service_1 = require("./images.service");
var Habbajet = /** @class */ (function () {
    function Habbajet(name, state, color) {
        this.name = name;
        this.state = state;
        this.color = color;
        this.image = new images_service_1.ImageState(state, color);
        this.info = {
            streak: 0,
        };
    }
    return Habbajet;
}());
exports.Habbajet = Habbajet;
var HabbajetService = /** @class */ (function () {
    function HabbajetService(imageService) {
        this.imageService = imageService;
        this.habbajetList = [];
        this.habbajetList.push(new Habbajet('one', 0, 'red'));
        this.habbajetList.push(new Habbajet('two', 0, 'blue'));
        this.habbajetList.push(new Habbajet('three', 0, 'green'));
        this.habbajetList.push(new Habbajet('four', 0, 'red'));
        this.habbajetList.push(new Habbajet('five', 0, 'red'));
        this.habbajetList.push(new Habbajet('six', 0, 'red'));
    }
    HabbajetService.prototype.habbajetExists = function (index) {
        return this.habbajetList.length > index && this.habbajetList[index] !== undefined;
    };
    HabbajetService.prototype.getHabbajetName = function (index) {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].name;
        }
        else {
            return 'To Remove';
        }
    };
    HabbajetService.prototype.getHabbajetImage = function (index) {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].image;
        }
        else {
            return undefined;
        }
    };
    HabbajetService.prototype.getHabbajetInfo = function (index) {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].info;
        }
        else {
            return undefined;
        }
    };
    HabbajetService.prototype.evolve = function (habbajetIndex) {
        if (this.habbajetExists(habbajetIndex)) {
            this.imageService.evolve(this.habbajetList[habbajetIndex].image);
        }
    };
    HabbajetService.prototype.action = function (habbajetIndex) {
        if (this.habbajetExists(habbajetIndex)) {
            this.imageService.action(this.habbajetList[habbajetIndex].image);
        }
    };
    HabbajetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [images_service_1.ImageService])
    ], HabbajetService);
    return HabbajetService;
}());
exports.HabbajetService = HabbajetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsbURBQTREO0FBTTVEO0lBSUksa0JBQW1CLElBQVksRUFBUyxLQUFhLEVBQVMsS0FBYTtRQUF4RCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDdkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLDJCQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUixNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUE7SUFDTCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksNEJBQVE7QUFhckI7SUFHSSx5QkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLHdDQUFjLEdBQXJCLFVBQXNCLEtBQWE7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLFNBQVMsQ0FBQztJQUN0RixDQUFDO0lBRU0seUNBQWUsR0FBdEIsVUFBdUIsS0FBYTtRQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QixDQUFDO0lBQ0wsQ0FBQztJQUVNLDBDQUFnQixHQUF2QixVQUF3QixLQUFhO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMxQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRU0seUNBQWUsR0FBdEIsVUFBdUIsS0FBYTtRQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNyQixDQUFDO0lBQ0wsQ0FBQztJQUVNLGdDQUFNLEdBQWIsVUFBYyxhQUFxQjtRQUMvQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLENBQUM7SUFFTCxDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLGFBQXFCO1FBQy9CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckUsQ0FBQztJQUNMLENBQUM7SUFwRFEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUl5Qiw2QkFBWTtPQUhyQyxlQUFlLENBcUQzQjtJQUFELHNCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSW1hZ2VTdGF0ZSwgSW1hZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vaW1hZ2VzLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGFiYmFqZXRJbmZvICB7XHJcbiAgICBzdHJlYWs6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0IHtcclxuICAgIHB1YmxpYyBpbWFnZTogSW1hZ2VTdGF0ZTtcclxuICAgIHB1YmxpYyBpbmZvOiBIYWJiYWpldEluZm87XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHN0YXRlOiBudW1iZXIsIHB1YmxpYyBjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZVN0YXRlKHN0YXRlLCBjb2xvcik7XHJcbiAgICAgICAgdGhpcy5pbmZvID0ge1xyXG4gICAgICAgICAgICBzdHJlYWs6IDAsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldFNlcnZpY2Uge1xyXG4gICAgcHVibGljIGhhYmJhamV0TGlzdDogSGFiYmFqZXRbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKG5ldyBIYWJiYWpldCgnb25lJywgMCwgJ3JlZCcpKTtcclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKG5ldyBIYWJiYWpldCgndHdvJywgMCwgJ2JsdWUnKSk7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXQoJ3RocmVlJywgMCwgJ2dyZWVuJykpO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0KCdmb3VyJywgMCwgJ3JlZCcpKTtcclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKG5ldyBIYWJiYWpldCgnZml2ZScsIDAsICdyZWQnKSk7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXQoJ3NpeCcsIDAsICdyZWQnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhYmJhamV0RXhpc3RzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoID4gaW5kZXggJiYgdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0TmFtZShpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpbmRleCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0W2luZGV4XS5uYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnVG8gUmVtb3ZlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0SW1hZ2UoaW5kZXg6IG51bWJlcik6IEltYWdlU3RhdGUge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGluZGV4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdLmltYWdlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldEluZm8oaW5kZXg6IG51bWJlcik6IEhhYmJhamV0SW5mbyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdFtpbmRleF0uaW5mbztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXZvbHZlKGhhYmJhamV0SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHRoaXMuaGFiYmFqZXRFeGlzdHMoaGFiYmFqZXRJbmRleCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZXZvbHZlKHRoaXMuaGFiYmFqZXRMaXN0W2hhYmJhamV0SW5kZXhdLmltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjdGlvbihoYWJiYWpldEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLmhhYmJhamV0RXhpc3RzKGhhYmJhamV0SW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmFjdGlvbih0aGlzLmhhYmJhamV0TGlzdFtoYWJiYWpldEluZGV4XS5pbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==