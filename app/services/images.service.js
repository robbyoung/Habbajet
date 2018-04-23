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
    function ImageState() {
        this.state = 0;
        this.frame = 0;
        this.action = 'i';
        this.refreshImageUrl();
    }
    ImageState.prototype.refreshImageUrl = function () {
        this.imageUrl = '~/images/habbajets/' + this.action + this.state + '-' + this.frame + '.png';
    };
    return ImageState;
}());
exports.ImageState = ImageState;
var ImageService = /** @class */ (function () {
    function ImageService() {
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
            imageState.frame = 0;
            imageState.state = (imageState.state + 1) % 7;
            imageState.refreshImageUrl();
        }
    };
    ImageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxnREFBOEM7QUFFOUM7SUFNSTtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLG9DQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQ2pHLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksZ0NBQVU7QUFtQnZCO0lBRUk7SUFBZSxDQUFDO0lBRVQsZ0NBQVMsR0FBaEIsVUFBaUIsVUFBc0I7UUFDbkMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLElBQU0sU0FBUyxHQUFHLDBCQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEUsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLENBQUM7UUFFRCxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLDZCQUFNLEdBQWIsVUFBYyxVQUFzQjtRQUNoQyxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0IsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDeEIsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDckIsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQztJQXZCUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQXdCeEI7SUFBRCxtQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGZyYW1lQ291bnRzIH0gZnJvbSAnLi4vZnJhbWUtY291bnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVN0YXRlIHtcclxuICAgIHB1YmxpYyBzdGF0ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGZyYW1lOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYWN0aW9uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW1hZ2VVcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gMDtcclxuICAgICAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9ICdpJztcclxuICAgICAgICB0aGlzLnJlZnJlc2hJbWFnZVVybCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgcmVmcmVzaEltYWdlVXJsKCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSAnfi9pbWFnZXMvaGFiYmFqZXRzLycgKyB0aGlzLmFjdGlvbiArIHRoaXMuc3RhdGUgKyAnLScgKyB0aGlzLmZyYW1lICsgJy5wbmcnO1xyXG4gICAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVNlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIG5leHRTdGF0ZShpbWFnZVN0YXRlOiBJbWFnZVN0YXRlKSB7XHJcbiAgICAgICAgaW1hZ2VTdGF0ZS5mcmFtZSsrO1xyXG4gICAgICAgIGNvbnN0IG51bUZyYW1lcyA9IGZyYW1lQ291bnRzKGltYWdlU3RhdGUuYWN0aW9uICsgaW1hZ2VTdGF0ZS5zdGF0ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG51bUZyYW1lcyA8PSBpbWFnZVN0YXRlLmZyYW1lKSB7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuZnJhbWUgPSAwO1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmFjdGlvbiA9ICdpJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltYWdlU3RhdGUucmVmcmVzaEltYWdlVXJsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV2b2x2ZShpbWFnZVN0YXRlOiBJbWFnZVN0YXRlKSB7XHJcbiAgICAgICAgaWYoaW1hZ2VTdGF0ZS5hY3Rpb24gIT09ICd0Jykge1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmFjdGlvbiA9ICd0JztcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5mcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuc3RhdGUgPSAoaW1hZ2VTdGF0ZS5zdGF0ZSArIDEpICUgNztcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5yZWZyZXNoSW1hZ2VVcmwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=