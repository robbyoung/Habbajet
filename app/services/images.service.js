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
    function ImageState(state) {
        this.state = state;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxnREFBOEM7QUFFOUM7SUFNSSxvQkFBWSxLQUFhO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxvQ0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUNqRyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLGdDQUFVO0FBbUJ2QjtJQUdJO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLGdDQUFTLEdBQWhCLFVBQWlCLFVBQXNCO1FBQ25DLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFNLFNBQVMsR0FBRywwQkFBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNyQixVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUM1QixDQUFDO1FBRUQsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTSw2QkFBTSxHQUFiLFVBQWMsVUFBc0I7UUFDaEMsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDTCxDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLFVBQXNCO1FBQ2hDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRSxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDakIsTUFBTSxDQUFBLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNuQixLQUFLLENBQUM7Z0JBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFBQyxLQUFLLENBQUM7WUFDNUIsS0FBSyxDQUFDO2dCQUFFLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBQywwQkFBVyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6RSxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUMzQixVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBdkNRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTs7T0FDQSxZQUFZLENBd0N4QjtJQUFELG1CQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgZnJhbWVDb3VudHMgfSBmcm9tICcuLi9mcmFtZS1jb3VudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlU3RhdGUge1xyXG4gICAgcHVibGljIHN0YXRlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZnJhbWU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBhY3Rpb246IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnaSc7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoSW1hZ2VVcmwoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHJlZnJlc2hJbWFnZVVybCgpIHtcclxuICAgICAgICB0aGlzLmltYWdlVXJsID0gJ34vaW1hZ2VzL2hhYmJhamV0cy8nICsgdGhpcy5hY3Rpb24gKyB0aGlzLnN0YXRlICsgJy0nICsgdGhpcy5mcmFtZSArICcucG5nJztcclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbnVtQWN0aW9uVHlwZXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5udW1BY3Rpb25UeXBlcyA9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5leHRTdGF0ZShpbWFnZVN0YXRlOiBJbWFnZVN0YXRlKSB7XHJcbiAgICAgICAgaW1hZ2VTdGF0ZS5mcmFtZSsrO1xyXG4gICAgICAgIGNvbnN0IG51bUZyYW1lcyA9IGZyYW1lQ291bnRzKGltYWdlU3RhdGUuYWN0aW9uICsgaW1hZ2VTdGF0ZS5zdGF0ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG51bUZyYW1lcyA8PSBpbWFnZVN0YXRlLmZyYW1lKSB7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuZnJhbWUgPSAwO1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmFjdGlvbiA9ICdpJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltYWdlU3RhdGUucmVmcmVzaEltYWdlVXJsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV2b2x2ZShpbWFnZVN0YXRlOiBJbWFnZVN0YXRlKSB7XHJcbiAgICAgICAgaWYoaW1hZ2VTdGF0ZS5hY3Rpb24gIT09ICd0Jykge1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmFjdGlvbiA9ICd0JztcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5mcmFtZSA9IC0xO1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLnN0YXRlID0gKGltYWdlU3RhdGUuc3RhdGUgKyAxKSAlIDc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3Rpb24oaW1hZ2VTdGF0ZTogSW1hZ2VTdGF0ZSkge1xyXG4gICAgICAgIGxldCByYW5kQWN0aW9uTnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogdGhpcy5udW1BY3Rpb25UeXBlcyk7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9ICdhJztcclxuICAgICAgICBzd2l0Y2gocmFuZEFjdGlvbk51bSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IGFjdGlvbiA9ICdhJzsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTogYWN0aW9uID0gJ2InOyBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGZyYW1lQ291bnRzKGFjdGlvbiArIGltYWdlU3RhdGUuc3RhdGUpID4gMCAmJiBpbWFnZVN0YXRlLmFjdGlvbiAhPT0gJ3QnKSB7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuYWN0aW9uID0gYWN0aW9uO1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmZyYW1lID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19