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
    function Habbajet(name, state) {
        this.name = name;
        this.state = state;
        this.image = new images_service_1.ImageState(state);
    }
    Habbajet.prototype.getState = function () {
        return this.image.state;
    };
    return Habbajet;
}());
exports.Habbajet = Habbajet;
var HabbajetService = /** @class */ (function () {
    function HabbajetService(imageService) {
        this.imageService = imageService;
        this.habbajetList = [];
        this.habbajetList.push(new Habbajet('one', 0));
        this.habbajetList.push(new Habbajet('two', 0));
        this.habbajetList.push(new Habbajet('three', 0));
        this.habbajetList.push(new Habbajet('four', 0));
        this.habbajetList.push(new Habbajet('five', 0));
        this.habbajetList.push(new Habbajet('six', 0));
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
    HabbajetService.prototype.evolve = function (habbajet) {
        this.imageService.evolve(habbajet.image);
    };
    HabbajetService.prototype.action = function (habbajet) {
        this.imageService.action(habbajet.image);
    };
    HabbajetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [images_service_1.ImageService])
    ], HabbajetService);
    return HabbajetService;
}());
exports.HabbajetService = HabbajetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsbURBQTREO0FBRTVEO0lBR0ksa0JBQW1CLElBQVksRUFBUyxLQUFhO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSwyQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSwyQkFBUSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSw0QkFBUTtBQWFyQjtJQUdJLHlCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sd0NBQWMsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxDQUFDO0lBQ3RGLENBQUM7SUFFTSx5Q0FBZSxHQUF0QixVQUF1QixLQUFhO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN6QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZCLENBQUM7SUFDTCxDQUFDO0lBRU0scUNBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLFFBQWtCO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLFFBQWtCO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBdkNRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FJeUIsNkJBQVk7T0FIckMsZUFBZSxDQXdDM0I7SUFBRCxzQkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEltYWdlU3RhdGUsIEltYWdlU2VydmljZSB9IGZyb20gXCIuL2ltYWdlcy5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXQge1xyXG4gICAgcHVibGljIGltYWdlOiBJbWFnZVN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBzdGF0ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2Uuc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0U2VydmljZSB7XHJcbiAgICBwdWJsaWMgaGFiYmFqZXRMaXN0OiBIYWJiYWpldFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0KCdvbmUnLCAwKSk7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXQoJ3R3bycsIDApKTtcclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKG5ldyBIYWJiYWpldCgndGhyZWUnLCAwKSk7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXQoJ2ZvdXInLCAwKSk7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXQoJ2ZpdmUnLCAwKSk7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXQoJ3NpeCcsIDApKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFiYmFqZXRFeGlzdHMoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggPiBpbmRleCAmJiB0aGlzLmhhYmJhamV0TGlzdFtpbmRleF0gIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXROYW1lKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGluZGV4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICdUbyBSZW1vdmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXQoaW5kZXg6IG51bWJlcik6IEhhYmJhamV0IHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpbmRleCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0W2luZGV4XTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXZvbHZlKGhhYmJhamV0OiBIYWJiYWpldCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmV2b2x2ZShoYWJiYWpldC5pbWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjdGlvbihoYWJiYWpldDogSGFiYmFqZXQpIHtcclxuICAgICAgICB0aGlzLmltYWdlU2VydmljZS5hY3Rpb24oaGFiYmFqZXQuaW1hZ2UpO1xyXG4gICAgfVxyXG59Il19