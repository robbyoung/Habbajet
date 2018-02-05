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
var habbajet_1 = require("./habbajet");
var budget_1 = require("./budget");
var Dialogs = require("ui/dialogs");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.saveObject = require("application-settings");
        this.budget = new budget_1.BudgetBinding(this.saveObject);
        this.habbajetList = [];
        this.loadSavedData();
    }
    AppComponent.prototype.loadSavedData = function () {
        var totalValue = this.saveObject.getNumber("total");
        if (totalValue !== undefined) {
            this.budget.setTotal(totalValue);
            var habbajetCount = this.saveObject.getNumber("habbajetCount");
            for (var i = 0; i < habbajetCount; i++) {
                this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, i, "", false));
            }
            if (habbajetCount > 0) {
                this.habbajetIndex = 0;
                this.habbajet = this.habbajetList[this.habbajetIndex];
            }
        }
    };
    AppComponent.prototype.newHabbajet = function () {
        var _this = this;
        var name;
        Dialogs.prompt({
            title: "Name the new Habbajet",
            okButtonText: "Confirm",
        }).then(function (result) {
            name = result.text;
            _this.habbajetIndex = _this.habbajetList.length;
            _this.habbajetList.push(new habbajet_1.HabbajetBinding(_this.budget, _this.saveObject, _this.habbajetIndex, name, true));
            _this.habbajet = _this.habbajetList[_this.habbajetIndex];
            _this.saveObject.setNumber("habbajetCount", _this.habbajetList.length);
        });
    };
    AppComponent.prototype.nextHabbajet = function () {
        this.habbajetIndex = (this.habbajetIndex + 1) % this.habbajetList.length;
        this.habbajet = this.habbajetList[this.habbajetIndex];
    };
    AppComponent.prototype.onCheckboxTap = function (args) {
        this.habbajet.dailyUpdate(args.index);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./habbajet.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUV6QyxvQ0FBc0M7QUFRdEM7SUFPRTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHNCQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2pFLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksMEJBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFGLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUFBLGlCQWVDO1FBZEMsSUFBSSxJQUFZLENBQUM7UUFDakIsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNiLEtBQUssRUFBRSx1QkFBdUI7WUFDOUIsWUFBWSxFQUFFLFNBQVM7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDYixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNuQixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQzlDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksMEJBQWUsQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxVQUFVLEVBQ3BFLEtBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDekUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQUk7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFyRFUsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGlCQUFpQjtTQUMvQixDQUFDOztPQUVXLFlBQVksQ0FzRHhCO0lBQUQsbUJBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIYWJiYWpldEJpbmRpbmcgfSBmcm9tIFwiLi9oYWJiYWpldFwiO1xuaW1wb3J0IHsgQ2hlY2tib3hCaW5kaW5nIH0gZnJvbSBcIi4vY2hlY2tib3hcIjtcbmltcG9ydCB7IEJ1ZGdldEJpbmRpbmcgfSBmcm9tIFwiLi9idWRnZXRcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2hhYmJhamV0Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwdWJsaWMgaGFiYmFqZXRMaXN0OiBIYWJiYWpldEJpbmRpbmdbXTtcbiAgcHVibGljIGhhYmJhamV0OiBIYWJiYWpldEJpbmRpbmc7XG4gIHB1YmxpYyBoYWJiYWpldEluZGV4OiBudW1iZXI7XG4gIHB1YmxpYyBidWRnZXQ6IEJ1ZGdldEJpbmRpbmc7XG4gIHB1YmxpYyBzYXZlT2JqZWN0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zYXZlT2JqZWN0ID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuICAgIHRoaXMuYnVkZ2V0ID0gbmV3IEJ1ZGdldEJpbmRpbmcodGhpcy5zYXZlT2JqZWN0KTtcbiAgICB0aGlzLmhhYmJhamV0TGlzdCA9W107XG4gICAgdGhpcy5sb2FkU2F2ZWREYXRhKCk7XG4gIH1cblxuICBsb2FkU2F2ZWREYXRhKCkge1xuICAgIGNvbnN0IHRvdGFsVmFsdWUgPSB0aGlzLnNhdmVPYmplY3QuZ2V0TnVtYmVyKFwidG90YWxcIik7XG4gICAgaWYodG90YWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmJ1ZGdldC5zZXRUb3RhbCh0b3RhbFZhbHVlKTtcbiAgICAgIGNvbnN0IGhhYmJhamV0Q291bnQgPSB0aGlzLnNhdmVPYmplY3QuZ2V0TnVtYmVyKFwiaGFiYmFqZXRDb3VudFwiKTtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBoYWJiYWpldENvdW50OyBpKyspIHtcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChuZXcgSGFiYmFqZXRCaW5kaW5nKHRoaXMuYnVkZ2V0LCB0aGlzLnNhdmVPYmplY3QsIGksIFwiXCIsIGZhbHNlKSk7XG4gICAgICB9XG4gICAgICBpZihoYWJiYWpldENvdW50ID4gMCkge1xuICAgICAgICB0aGlzLmhhYmJhamV0SW5kZXggPSAwO1xuICAgICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdIYWJiYWpldCgpIHtcbiAgICBsZXQgbmFtZTogc3RyaW5nO1xuICAgIERpYWxvZ3MucHJvbXB0KHtcbiAgICAgIHRpdGxlOiBcIk5hbWUgdGhlIG5ldyBIYWJiYWpldFwiLFxuICAgICAgb2tCdXR0b25UZXh0OiBcIkNvbmZpcm1cIixcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIG5hbWUgPSByZXN1bHQudGV4dDtcbiAgICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aDtcbiAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0QmluZGluZyh0aGlzLmJ1ZGdldCwgdGhpcy5zYXZlT2JqZWN0LFxuICAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4LCBuYW1lLCB0cnVlKSk7XG4gICAgICB0aGlzLmhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbdGhpcy5oYWJiYWpldEluZGV4XTtcbiAgICAgIHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJoYWJiYWpldENvdW50XCIsIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCk7XG4gICAgfSk7XG5cbiAgICBcbiAgfVxuXG4gIG5leHRIYWJiYWpldCgpIHtcbiAgICB0aGlzLmhhYmJhamV0SW5kZXggPSAodGhpcy5oYWJiYWpldEluZGV4ICsgMSkgJSB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XG4gICAgdGhpcy5oYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0W3RoaXMuaGFiYmFqZXRJbmRleF07XG4gIH1cblxuICBvbkNoZWNrYm94VGFwKGFyZ3MpIHtcbiAgICB0aGlzLmhhYmJhamV0LmRhaWx5VXBkYXRlKGFyZ3MuaW5kZXgpO1xuICB9XG59XG4iXX0=