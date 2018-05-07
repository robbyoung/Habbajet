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
        saveObject.setString("hColor" + index, habbajet.getColor());
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
        if (saveObject.hasKey("hName" + index) &&
            saveObject.hasKey("hState" + index) &&
            saveObject.hasKey("hColor" + index)) {
            var habbajet = new habbajet_service_1.Habbajet(saveObject.getString("hName" + index), saveObject.getNumber("hState" + index), saveObject.getString("hColor" + index));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQUNsRCxpREFBbUQ7QUFDbkQsdURBQStEO0FBQy9ELDBCQUE0QjtBQUc1QjtJQUNJLHVCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRWpELHdDQUFnQixHQUF2QjtRQUFBLGlCQU9DO1FBTkcsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7UUFDdkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBQyxRQUFRLEVBQUUsS0FBSztZQUNqQyxFQUFFLENBQUEsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG9DQUFZLEdBQW5CLFVBQW9CLFFBQWtCLEVBQUUsS0FBYTtRQUNqRCxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVEsS0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVELFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBUyxLQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFDL0QsQ0FBQztJQUVNLHdDQUFnQixHQUF2QjtRQUNJLElBQU0sWUFBWSxHQUFlLEVBQUUsQ0FBQztRQUVwQyxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ1YsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxFQUFFLENBQUM7UUFDUixDQUFDO1FBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRU0sb0NBQVksR0FBbkIsVUFBb0IsS0FBYTtRQUM3QixFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVEsS0FBTyxDQUFDO1lBQzdCLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBUyxLQUFPLENBQUM7WUFDbkMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFTLEtBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFNLFFBQVEsR0FBRyxJQUFJLDJCQUFRLENBQ3pCLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBUSxLQUFPLENBQUMsRUFDckMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFTLEtBQU8sQ0FBQyxFQUN0QyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxDQUFDLENBQ3pDLENBQUM7UUFDTixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRU0sc0NBQWMsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVEsS0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBUSxLQUFPLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFTLEtBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVMsS0FBTyxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNMLENBQUM7SUFFTSxvQ0FBWSxHQUFuQixVQUFvQixRQUFrQixFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQ2pFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQXhEUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBRTRCLGtDQUFlO09BRDNDLGFBQWEsQ0F5RHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXpERCxJQXlEQztBQXpEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIHN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgc2F2ZU9iamVjdCBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcbmltcG9ydCB7IEhhYmJhamV0LCBIYWJiYWpldFNlcnZpY2UgfSBmcm9tIFwiLi9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNhdmluZ1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge31cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUhhYmJhamV0TGlzdCgpIHtcclxuICAgICAgICBjb25zdCBoYWJiYWpldExpc3QgPSB0aGlzLmhhYmJhamV0U2VydmljZS5oYWJiYWpldExpc3Q7XHJcbiAgICAgICAgXy5lYWNoKGhhYmJhamV0TGlzdCwgKGhhYmJhamV0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZihoYWJiYWpldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVIYWJiYWpldChoYWJiYWpldCwgaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVIYWJiYWpldChoYWJiYWpldDogSGFiYmFqZXQsIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldFN0cmluZyhgaE5hbWUke2luZGV4fWAsIGhhYmJhamV0Lm5hbWUpO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoU3RhdGUke2luZGV4fWAsIGhhYmJhamV0LmdldFN0YXRlKCkpO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0U3RyaW5nKGBoQ29sb3Ike2luZGV4fWAsIGhhYmJhamV0LmdldENvbG9yKCkpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRIYWJiYWpldExpc3QoKTogSGFiYmFqZXRbXSB7XHJcbiAgICAgICAgY29uc3QgaGFiYmFqZXRMaXN0OiBIYWJiYWpldFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIHdoaWxlKGkgPCA2KSB7XHJcbiAgICAgICAgICAgIGhhYmJhamV0TGlzdC5wdXNoKHRoaXMubG9hZEhhYmJhamV0KGkpKTtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhYmJhamV0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEhhYmJhamV0KGluZGV4OiBudW1iZXIpOiBIYWJiYWpldCB7XHJcbiAgICAgICAgaWYoc2F2ZU9iamVjdC5oYXNLZXkoYGhOYW1lJHtpbmRleH1gKSAmJlxyXG4gICAgICAgICAgICAgICAgc2F2ZU9iamVjdC5oYXNLZXkoYGhTdGF0ZSR7aW5kZXh9YCkgJiZcclxuICAgICAgICAgICAgICAgIHNhdmVPYmplY3QuaGFzS2V5KGBoQ29sb3Ike2luZGV4fWApKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhYmJhamV0ID0gbmV3IEhhYmJhamV0KFxyXG4gICAgICAgICAgICAgICAgc2F2ZU9iamVjdC5nZXRTdHJpbmcoYGhOYW1lJHtpbmRleH1gKSxcclxuICAgICAgICAgICAgICAgIHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoU3RhdGUke2luZGV4fWApLFxyXG4gICAgICAgICAgICAgICAgc2F2ZU9iamVjdC5nZXRTdHJpbmcoYGhDb2xvciR7aW5kZXh9YClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlSGFiYmFqZXQoaW5kZXg6IG51bWJlcil7XHJcbiAgICAgICAgaWYoc2F2ZU9iamVjdC5oYXNLZXkoYGhOYW1lJHtpbmRleH1gKSkge1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnJlbW92ZShgaE5hbWUke2luZGV4fWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzYXZlT2JqZWN0Lmhhc0tleShgaFN0YXRlJHtpbmRleH1gKSkge1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnJlbW92ZShgaFN0YXRlJHtpbmRleH1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVIYWJiYWpldChoYWJiYWpldDogSGFiYmFqZXQsIHN0YXJ0OiBudW1iZXIsIGZpbmlzaDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlSGFiYmFqZXQoaGFiYmFqZXQsIGZpbmlzaCk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVIYWJiYWpldChzdGFydCk7XHJcbiAgICB9XHJcbn0iXX0=