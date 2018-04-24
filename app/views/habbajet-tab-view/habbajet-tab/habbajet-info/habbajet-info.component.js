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
var habbajet_service_1 = require("../../../../services/habbajet.service");
var HabbajetInfoComponent = /** @class */ (function () {
    function HabbajetInfoComponent() {
    }
    ;
    HabbajetInfoComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", habbajet_service_1.Habbajet)
    ], HabbajetInfoComponent.prototype, "habbajet", void 0);
    HabbajetInfoComponent = __decorate([
        core_1.Component({
            selector: "habbajet-info",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.html",
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.css"]
        }),
        __metadata("design:paramtypes", [])
    ], HabbajetInfoComponent);
    return HabbajetInfoComponent;
}());
exports.HabbajetInfoComponent = HabbajetInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUVqRCwwRUFBaUU7QUFRakU7SUFHSTtJQUFlLENBQUM7SUFBQSxDQUFDO0lBRWpCLHdDQUFRLEdBQVIsY0FBWSxDQUFDO0lBSko7UUFBUixZQUFLLEVBQUU7a0NBQVcsMkJBQVE7MkRBQUM7SUFEbkIscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsdUVBQXVFO1lBQ3BGLFNBQVMsRUFBRSxDQUFDLHNFQUFzRSxDQUFDO1NBQ3RGLENBQUM7O09BRVcscUJBQXFCLENBTWpDO0lBQUQsNEJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBIYWJiYWpldCB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhhYmJhamV0LWluZm9cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbmZvL2hhYmJhamV0LWluZm8uaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW5mby9oYWJiYWpldC1pbmZvLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0SW5mb0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBoYWJiYWpldDogSGFiYmFqZXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHt9XHJcbn0iXX0=