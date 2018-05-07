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
var frame_counts_1 = require("../frame-counts");
var ImageState = /** @class */ (function () {
    function ImageState(state, color) {
        this.state = state;
        this.color = color;
        this.state = state;
        this.frame = 0;
        this.action = 'i';
        this.refreshImageUrl();
    }
    ImageState.prototype.refreshImageUrl = function () {
        this.imageUrl = '~/images/habbajets/' + this.color + '/' + this.action + this.state + '-' + this.frame + '.png';
    };
    return ImageState;
}());
exports.ImageState = ImageState;
var ImageService = /** @class */ (function () {
    function ImageService() {
        this.numActionTypes = 2;
    }
    ImageService.prototype.nextState = function (imageState) {
        imageState.frame++;
        var numFrames = frame_counts_1.frameCounts(imageState.action + imageState.state);
        if (numFrames <= imageState.frame) {
            imageState.frame = 0;
            imageState.action = 'i';
        }
        imageState.refreshImageUrl();
    };
    ImageService.prototype.evolve = function (imageState) {
        if (imageState.action !== 't') {
            imageState.action = 't';
            imageState.frame = -1;
            imageState.state = (imageState.state + 1) % 7;
        }
    };
    ImageService.prototype.action = function (imageState) {
        var randActionNum = Math.round(Math.random() * this.numActionTypes);
        var action = 'a';
        switch (randActionNum) {
            case 0:
                action = 'a';
                break;
            case 1:
                action = 'b';
                break;
        }
        if (frame_counts_1.frameCounts(action + imageState.state) > 0 && imageState.action !== 't') {
            imageState.action = action;
            imageState.frame = -1;
        }
    };
    ImageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxnREFBOEM7QUFFOUM7SUFLSSxvQkFBbUIsS0FBYSxFQUFTLEtBQWE7UUFBbkMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLG9DQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQ3BILENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksZ0NBQVU7QUFrQnZCO0lBR0k7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0sZ0NBQVMsR0FBaEIsVUFBaUIsVUFBc0I7UUFDbkMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLElBQU0sU0FBUyxHQUFHLDBCQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEUsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLENBQUM7UUFFRCxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLDZCQUFNLEdBQWIsVUFBYyxVQUFzQjtRQUNoQyxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0IsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDeEIsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNMLENBQUM7SUFFTSw2QkFBTSxHQUFiLFVBQWMsVUFBc0I7UUFDaEMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNqQixNQUFNLENBQUEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEtBQUssQ0FBQztnQkFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUFDLEtBQUssQ0FBQztZQUM1QixLQUFLLENBQUM7Z0JBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFBQyxLQUFLLENBQUM7UUFDaEMsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLDBCQUFXLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQzNCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQztJQUNMLENBQUM7SUF2Q1EsWUFBWTtRQUR4QixpQkFBVSxFQUFFOztPQUNBLFlBQVksQ0F3Q3hCO0lBQUQsbUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBmcmFtZUNvdW50cyB9IGZyb20gJy4uL2ZyYW1lLWNvdW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTdGF0ZSB7XHJcbiAgICBwdWJsaWMgZnJhbWU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBhY3Rpb246IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZTogbnVtYmVyLCBwdWJsaWMgY29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9ICdpJztcclxuICAgICAgICB0aGlzLnJlZnJlc2hJbWFnZVVybCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgcmVmcmVzaEltYWdlVXJsKCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSAnfi9pbWFnZXMvaGFiYmFqZXRzLycgKyB0aGlzLmNvbG9yICsgJy8nICsgdGhpcy5hY3Rpb24gKyB0aGlzLnN0YXRlICsgJy0nICsgdGhpcy5mcmFtZSArICcucG5nJztcclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbnVtQWN0aW9uVHlwZXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5udW1BY3Rpb25UeXBlcyA9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5leHRTdGF0ZShpbWFnZVN0YXRlOiBJbWFnZVN0YXRlKSB7XHJcbiAgICAgICAgaW1hZ2VTdGF0ZS5mcmFtZSsrO1xyXG4gICAgICAgIGNvbnN0IG51bUZyYW1lcyA9IGZyYW1lQ291bnRzKGltYWdlU3RhdGUuYWN0aW9uICsgaW1hZ2VTdGF0ZS5zdGF0ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG51bUZyYW1lcyA8PSBpbWFnZVN0YXRlLmZyYW1lKSB7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuZnJhbWUgPSAwO1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmFjdGlvbiA9ICdpJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltYWdlU3RhdGUucmVmcmVzaEltYWdlVXJsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV2b2x2ZShpbWFnZVN0YXRlOiBJbWFnZVN0YXRlKSB7XHJcbiAgICAgICAgaWYoaW1hZ2VTdGF0ZS5hY3Rpb24gIT09ICd0Jykge1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmFjdGlvbiA9ICd0JztcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5mcmFtZSA9IC0xO1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLnN0YXRlID0gKGltYWdlU3RhdGUuc3RhdGUgKyAxKSAlIDc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3Rpb24oaW1hZ2VTdGF0ZTogSW1hZ2VTdGF0ZSkge1xyXG4gICAgICAgIGxldCByYW5kQWN0aW9uTnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogdGhpcy5udW1BY3Rpb25UeXBlcyk7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9ICdhJztcclxuICAgICAgICBzd2l0Y2gocmFuZEFjdGlvbk51bSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IGFjdGlvbiA9ICdhJzsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTogYWN0aW9uID0gJ2InOyBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGZyYW1lQ291bnRzKGFjdGlvbiArIGltYWdlU3RhdGUuc3RhdGUpID4gMCAmJiBpbWFnZVN0YXRlLmFjdGlvbiAhPT0gJ3QnKSB7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuYWN0aW9uID0gYWN0aW9uO1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmZyYW1lID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19