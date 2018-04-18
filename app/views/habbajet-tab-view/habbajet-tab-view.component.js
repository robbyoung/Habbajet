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
var frame = require("ui/frame");
var HabbajetTabViewComponent = /** @class */ (function () {
    function HabbajetTabViewComponent() {
        setTimeout(function () {
            var page = frame.topmost().currentPage;
            page.getViewById('tabView').android.removeViewAt(0);
            console.log('done?');
        }, 1000);
    }
    HabbajetTabViewComponent = __decorate([
        core_1.Component({
            selector: "habbajet-tab-view",
            templateUrl: "views/habbajet-tab-view/habbajet-tab-view.html",
        }),
        __metadata("design:paramtypes", [])
    ], HabbajetTabViewComponent);
    return HabbajetTabViewComponent;
}());
exports.HabbajetTabViewComponent = HabbajetTabViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBRTFDLGdDQUFrQztBQU9sQztJQUVJO1FBQ0ksVUFBVSxDQUFDO1lBQ1AsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBUlEsd0JBQXdCO1FBTHBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnREFBZ0Q7U0FDaEUsQ0FBQzs7T0FFVyx3QkFBd0IsQ0FTcEM7SUFBRCwrQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJoYWJiYWpldC10YWItdmlld1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiLXZpZXcuaHRtbFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0VGFiVmlld0NvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2U7XHJcbiAgICAgICAgICAgIHBhZ2UuZ2V0Vmlld0J5SWQoJ3RhYlZpZXcnKS5hbmRyb2lkLnJlbW92ZVZpZXdBdCgwKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvbmU/Jyk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbn0iXX0=