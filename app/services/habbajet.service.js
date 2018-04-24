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
    function Habbajet(name) {
        this.name = name;
        this.image = new images_service_1.ImageState();
    }
    return Habbajet;
}());
exports.Habbajet = Habbajet;
var HabbajetService = /** @class */ (function () {
    function HabbajetService() {
        this.habbajetList = [];
        this.habbajetList.push(new Habbajet('one'));
        this.habbajetList.push(new Habbajet('two'));
        this.habbajetList.push(new Habbajet('three'));
        this.habbajetList.push(new Habbajet('four'));
        this.habbajetList.push(new Habbajet('five'));
        this.habbajetList.push(new Habbajet('six'));
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
    HabbajetService.prototype.getHabbajet = function (index) {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index];
        }
        else {
            return undefined;
        }
    };
    HabbajetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], HabbajetService);
    return HabbajetService;
}());
exports.HabbajetService = HabbajetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsbURBQThDO0FBRTlDO0lBR0ksa0JBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSwyQkFBVSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLDRCQUFRO0FBU3JCO0lBR0k7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sd0NBQWMsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxDQUFDO0lBQ3RGLENBQUM7SUFFTSx5Q0FBZSxHQUF0QixVQUF1QixLQUFhO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN6QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZCLENBQUM7SUFDTCxDQUFDO0lBRU0scUNBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBL0JRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBZ0MzQjtJQUFELHNCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSW1hZ2VTdGF0ZSB9IGZyb20gXCIuL2ltYWdlcy5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXQge1xyXG4gICAgcHVibGljIGltYWdlOiBJbWFnZVN0YXRlXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlU3RhdGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBoYWJiYWpldExpc3Q6IEhhYmJhamV0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKG5ldyBIYWJiYWpldCgnb25lJykpO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0KCd0d28nKSk7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXQoJ3RocmVlJykpO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0KCdmb3VyJykpO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0KCdmaXZlJykpO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0KCdzaXgnKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBoYWJiYWpldEV4aXN0cyhpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCA+IGluZGV4ICYmIHRoaXMuaGFiYmFqZXRMaXN0W2luZGV4XSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldE5hbWUoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdFtpbmRleF0ubmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1RvIFJlbW92ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldChpbmRleDogbnVtYmVyKTogSGFiYmFqZXQge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGluZGV4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19