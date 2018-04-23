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
var Habbajet = /** @class */ (function () {
    function Habbajet(name) {
        this.name = name;
    }
    return Habbajet;
}());
exports.Habbajet = Habbajet;
var HabbajetService = /** @class */ (function () {
    function HabbajetService() {
        this.habbajetList = [];
        this.habbajetList.push(new Habbajet(''));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFHM0M7SUFHSSxrQkFBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFFL0IsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLDRCQUFRO0FBU3JCO0lBR0k7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFTSx3Q0FBYyxHQUFyQixVQUFzQixLQUFhO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLENBQUM7SUFDdEYsQ0FBQztJQUVNLHlDQUFlLEdBQXRCLFVBQXVCLEtBQWE7UUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFFTSxxQ0FBVyxHQUFsQixVQUFtQixLQUFhO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUExQlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFOztPQUNBLGVBQWUsQ0EyQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJbWFnZVN0YXRlIH0gZnJvbSBcIi4vaW1hZ2VzLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldCB7XHJcbiAgICBwcml2YXRlIGltYWdlOiBJbWFnZVN0YXRlXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaGFiYmFqZXRMaXN0OiBIYWJiYWpldFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXQoJycpKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgaGFiYmFqZXRFeGlzdHMoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggPiBpbmRleCAmJiB0aGlzLmhhYmJhamV0TGlzdFtpbmRleF0gIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXROYW1lKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGluZGV4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICdUbyBSZW1vdmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXQoaW5kZXg6IG51bWJlcik6IEhhYmJhamV0IHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpbmRleCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0W2luZGV4XTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==