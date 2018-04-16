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
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var DialogBox = /** @class */ (function () {
    function DialogBox(params, page) {
        var _this = this;
        this.params = params;
        this.page = page;
        this.page.on("unloaded", function () {
            // using the unloaded event to close the modal when there is user interaction
            // e.g. user taps outside the modal page
            _this.params.closeCallback();
        });
    }
    DialogBox.prototype.ngOnInit = function () {
    };
    DialogBox.prototype.submit = function () {
    };
    DialogBox = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./dialogbox.html",
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams, page_1.Page])
    ], DialogBox);
    return DialogBox;
}());
exports.DialogBox = DialogBox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlhbG9nYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTREO0FBQzVELGtFQUFzRTtBQUN0RSxnQ0FBK0I7QUFPL0I7SUFFSSxtQkFBb0IsTUFBeUIsRUFBVSxJQUFVO1FBQWpFLGlCQU9DO1FBUG1CLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUU3RCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDckIsNkVBQTZFO1lBQzdFLHdDQUF3QztZQUN4QyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRCQUFRLEdBQVI7SUFFQSxDQUFDO0lBRU0sMEJBQU0sR0FBYjtJQUVBLENBQUM7SUFqQlEsU0FBUztRQUxyQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxrQkFBa0I7U0FDbEMsQ0FBQzt5Q0FJOEIsZ0NBQWlCLEVBQWdCLFdBQUk7T0FGeEQsU0FBUyxDQWtCckI7SUFBRCxnQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kaWFsb2dib3guaHRtbFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERpYWxvZ0JveCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuXHJcbiAgICAgICAgdGhpcy5wYWdlLm9uKFwidW5sb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB1c2luZyB0aGUgdW5sb2FkZWQgZXZlbnQgdG8gY2xvc2UgdGhlIG1vZGFsIHdoZW4gdGhlcmUgaXMgdXNlciBpbnRlcmFjdGlvblxyXG4gICAgICAgICAgICAvLyBlLmcuIHVzZXIgdGFwcyBvdXRzaWRlIHRoZSBtb2RhbCBwYWdlXHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1Ym1pdCgpIHtcclxuICAgICAgIFxyXG4gICAgfVxyXG59Il19