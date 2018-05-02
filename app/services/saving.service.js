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
var saveObject = require("application-settings");
var habbajet_service_1 = require("./habbajet.service");
var _ = require("lodash");
var SavingService = /** @class */ (function () {
    function SavingService(habbajetService) {
        this.habbajetService = habbajetService;
    }
    SavingService.prototype.saveHabbajetList = function () {
        var _this = this;
        var habbajetList = this.habbajetService.habbajetList;
        _.each(habbajetList, function (habbajet, index) {
            if (habbajet !== undefined) {
                _this.saveHabbajet(habbajet, index);
            }
        });
    };
    SavingService.prototype.saveHabbajet = function (habbajet, index) {
        saveObject.setString("hName" + index, habbajet.name);
        saveObject.setNumber("hState" + index, habbajet.getState());
    };
    SavingService.prototype.loadHabbajetList = function () {
        var habbajetList = [];
        var i;
        while (i < 6) {
            habbajetList.push(this.loadHabbajet(i));
            i++;
        }
        return habbajetList;
    };
    SavingService.prototype.loadHabbajet = function (index) {
        if (saveObject.hasKey("hName" + index) && saveObject.hasKey("hName" + index)) {
            var habbajet = new habbajet_service_1.Habbajet(saveObject.getString("hName" + index), saveObject.getNumber("hName" + index));
        }
        else {
            return undefined;
        }
    };
    SavingService.prototype.deleteHabbajet = function (index) {
        if (saveObject.hasKey("hName" + index)) {
            saveObject.remove("hName" + index);
        }
        if (saveObject.hasKey("hState" + index)) {
            saveObject.remove("hState" + index);
        }
    };
    SavingService.prototype.moveHabbajet = function (habbajet, start, finish) {
        this.saveHabbajet(habbajet, finish);
        this.deleteHabbajet(start);
    };
    SavingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], SavingService);
    return SavingService;
}());
exports.SavingService = SavingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQUNsRCxpREFBbUQ7QUFDbkQsdURBQStEO0FBQy9ELDBCQUE0QjtBQUc1QjtJQUNJLHVCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRWpELHdDQUFnQixHQUF2QjtRQUFBLGlCQU9DO1FBTkcsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7UUFDdkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBQyxRQUFRLEVBQUUsS0FBSztZQUNqQyxFQUFFLENBQUEsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG9DQUFZLEdBQW5CLFVBQW9CLFFBQWtCLEVBQUUsS0FBYTtRQUNqRCxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVEsS0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSx3Q0FBZ0IsR0FBdkI7UUFDSSxJQUFNLFlBQVksR0FBZSxFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNWLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsRUFBRSxDQUFDO1FBQ1IsQ0FBQztRQUVELE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUVNLG9DQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDN0IsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFRLEtBQU8sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBUSxLQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsSUFBTSxRQUFRLEdBQUcsSUFBSSwyQkFBUSxDQUN6QixVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVEsS0FBTyxDQUFDLEVBQ3JDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBUSxLQUFPLENBQUMsQ0FDeEMsQ0FBQztRQUNOLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFTSxzQ0FBYyxHQUFyQixVQUFzQixLQUFhO1FBQy9CLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBUSxLQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFRLEtBQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVMsS0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBUyxLQUFPLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG9DQUFZLEdBQW5CLFVBQW9CLFFBQWtCLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBcERRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FFNEIsa0NBQWU7T0FEM0MsYUFBYSxDQXFEekI7SUFBRCxvQkFBQztDQUFBLEFBckRELElBcURDO0FBckRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgc3RhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBzYXZlT2JqZWN0IGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuaW1wb3J0IHsgSGFiYmFqZXQsIEhhYmJhamV0U2VydmljZSB9IGZyb20gXCIuL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2F2aW5nU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBzYXZlSGFiYmFqZXRMaXN0KCkge1xyXG4gICAgICAgIGNvbnN0IGhhYmJhamV0TGlzdCA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmhhYmJhamV0TGlzdDtcclxuICAgICAgICBfLmVhY2goaGFiYmFqZXRMaXN0LCAoaGFiYmFqZXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGhhYmJhamV0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUhhYmJhamV0KGhhYmJhamV0LCBpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUhhYmJhamV0KGhhYmJhamV0OiBIYWJiYWpldCwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0U3RyaW5nKGBoTmFtZSR7aW5kZXh9YCwgaGFiYmFqZXQubmFtZSk7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhTdGF0ZSR7aW5kZXh9YCwgaGFiYmFqZXQuZ2V0U3RhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRIYWJiYWpldExpc3QoKTogSGFiYmFqZXRbXSB7XHJcbiAgICAgICAgY29uc3QgaGFiYmFqZXRMaXN0OiBIYWJiYWpldFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIHdoaWxlKGkgPCA2KSB7XHJcbiAgICAgICAgICAgIGhhYmJhamV0TGlzdC5wdXNoKHRoaXMubG9hZEhhYmJhamV0KGkpKTtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhYmJhamV0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEhhYmJhamV0KGluZGV4OiBudW1iZXIpOiBIYWJiYWpldCB7XHJcbiAgICAgICAgaWYoc2F2ZU9iamVjdC5oYXNLZXkoYGhOYW1lJHtpbmRleH1gKSAmJiBzYXZlT2JqZWN0Lmhhc0tleShgaE5hbWUke2luZGV4fWApKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhYmJhamV0ID0gbmV3IEhhYmJhamV0KFxyXG4gICAgICAgICAgICAgICAgc2F2ZU9iamVjdC5nZXRTdHJpbmcoYGhOYW1lJHtpbmRleH1gKSxcclxuICAgICAgICAgICAgICAgIHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoTmFtZSR7aW5kZXh9YCksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZUhhYmJhamV0KGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgIGlmKHNhdmVPYmplY3QuaGFzS2V5KGBoTmFtZSR7aW5kZXh9YCkpIHtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5yZW1vdmUoYGhOYW1lJHtpbmRleH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc2F2ZU9iamVjdC5oYXNLZXkoYGhTdGF0ZSR7aW5kZXh9YCkpIHtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5yZW1vdmUoYGhTdGF0ZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlSGFiYmFqZXQoaGFiYmFqZXQ6IEhhYmJhamV0LCBzdGFydDogbnVtYmVyLCBmaW5pc2g6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2F2ZUhhYmJhamV0KGhhYmJhamV0LCBmaW5pc2gpO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlSGFiYmFqZXQoc3RhcnQpO1xyXG4gICAgfVxyXG59Il19