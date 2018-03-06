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
var _ = require("lodash");
var frame = require("ui/frame");
var frame_counts_1 = require("./frame-counts");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.saveObject = require("application-settings");
        this.budget = new budget_1.BudgetBinding(this.saveObject);
        this.frames = new frame_counts_1.FrameCounts();
        this.habbajetList = [];
        this.editing = false;
        this.newHabbajetName = "";
        this.newHabbajetValue = "";
        this.loadSavedData();
    }
    AppComponent.prototype.loadSavedData = function () {
        var totalValue = this.saveObject.getNumber("total");
        if (totalValue !== undefined) {
            this.budget.setTotal(totalValue);
            var habbajetCount = this.saveObject.getNumber("habbajetCount");
            for (var i = 0; i < habbajetCount; i++) {
                this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, i, "", false, this.frames, ""));
            }
            if (habbajetCount > 0) {
                this.habbajetIndex = 0;
                this.habbajet = this.habbajetList[this.habbajetIndex];
            }
        }
        this.habbajetCount = this.habbajetList.length;
        this.setColumnWidths();
    };
    AppComponent.prototype.newHabbajet = function () {
        if (this.isValidName() && this.isValidValue()) {
            this.habbajetIndex = this.habbajetList.length;
            this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, this.habbajetIndex, this.newHabbajetName, true, this.frames, this.newHabbajetValue));
            this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
            this.habbajetCount = this.habbajetList.length;
            this.newHabbajetName = '';
            this.newHabbajetValue = '';
            this.selectHabbajet(this.habbajetIndex, true);
        }
        this.setColumnWidths();
    };
    AppComponent.prototype.selectHabbajet = function (index, force) {
        var _this = this;
        if (this.habbajetList.length > index && this.habbajetIndex !== index || force || !this.habbajet) {
            var habbajetDisplay_1 = frame.topmost().currentPage.getViewById("habbajetDisplay");
            habbajetDisplay_1.animate({
                opacity: 0,
                duration: 200,
            })
                .then(function () {
                _this.habbajetIndex = index;
                _this.habbajet = _this.habbajetList[_this.habbajetIndex];
            })
                .then(function () {
                habbajetDisplay_1.animate({
                    opacity: 1,
                    duration: 200,
                });
            });
        }
    };
    AppComponent.prototype.onNewHabbajetTap = function () {
        if (this.habbajetCount < 6) {
            this.habbajet = undefined;
        }
    };
    AppComponent.prototype.onCheckboxTap = function (args) {
        this.habbajet.dailyUpdate(args.index);
    };
    AppComponent.prototype.onPurchaseTap = function (args) {
        this.budget.makePurchase();
    };
    AppComponent.prototype.check = function () {
        if (this.editing) {
            this.editing = false;
            this.habbajet.update(this.newHabbajetName, this.newHabbajetValue);
            this.newHabbajetName = '';
            this.newHabbajetValue = '';
        }
        else {
            this.habbajet.dailyUpdate(true);
        }
    };
    AppComponent.prototype.cross = function () {
        if (this.editing) {
            this.editing = false;
            this.newHabbajetName = '';
            this.newHabbajetValue = '';
        }
        else {
            this.habbajet.dailyUpdate(false);
        }
    };
    AppComponent.prototype.onImageTap = function () {
        this.habbajet.act();
    };
    AppComponent.prototype.isValidName = function () {
        return this.newHabbajetName.length > 0 &&
            this.newHabbajetName.length < 15;
    };
    AppComponent.prototype.isValidValue = function () {
        var value = _.toNumber(this.newHabbajetValue);
        return isFinite(value) && value > 0 && value <= 1000;
    };
    AppComponent.prototype.nameChange = function (args) {
        var textField = args.object;
        this.newHabbajetName = textField.text;
    };
    AppComponent.prototype.valueChange = function (args) {
        var textField = args.object;
        this.newHabbajetValue = textField.text;
    };
    AppComponent.prototype.onEditTap = function () {
        if (_.isNil(this.habbajet))
            return;
        this.editing = true;
        this.newHabbajetName = this.habbajet.name;
        this.newHabbajetValue = this.habbajet.value;
    };
    AppComponent.prototype.onDeleteTap = function () {
        var _this = this;
        this.editing = false;
        this.habbajet.deleteData();
        this.habbajetList = _.filter(this.habbajetList, function (h) {
            return h.index !== _this.habbajetIndex;
        });
        this.newHabbajetName = '';
        this.newHabbajetValue = '';
        this.habbajetCount--;
        for (var i = this.habbajetIndex; i < this.habbajetList.length; i++) {
            this.habbajetList[i].updateIndex(i);
        }
        this.habbajetIndex = 0;
        if (this.habbajetList.length > 0) {
            this.selectHabbajet(0, true);
        }
        else {
            this.habbajet = undefined;
        }
        this.setColumnWidths();
    };
    AppComponent.prototype.setColumnWidths = function () {
        switch (this.habbajetCount) {
            case 2:
                this.columnWidths = '38,114,114,0,0,0,0,*';
                break;
            case 3:
                this.columnWidths = '38,76,76,76,0,0,0,*';
                break;
            case 4:
                this.columnWidths = '38,57,57,57,57,0,0,*';
                break;
            case 5:
                this.columnWidths = '38,45,45,45,46,46,0,*';
                break;
            case 6:
                this.columnWidths = '38,38,38,38,38,38,38,*';
                break;
            default:
                this.columnWidths = '38,228,0,0,0,0,0,*';
                break;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsdUNBQTZDO0FBRTdDLG1DQUF5QztBQUN6QywwQkFBNEI7QUFJNUIsZ0NBQW1DO0FBQ25DLCtDQUE2QztBQU83QztJQWVFO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksc0JBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFFLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2pFLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JB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QUFZLEdBQUcsc0JBQXNCLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBQzFELEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDO2dCQUFDLEtBQUssQ0FBQztZQUN6RCxLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxzQkFBc0IsQ0FBQztnQkFBQyxLQUFLLENBQUM7WUFDMUQsS0FBSyxDQUFDO2dCQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsdUJBQXVCLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBQzNELEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLHdCQUF3QixDQUFDO2dCQUFDLEtBQUssQ0FBQztZQUM1RDtnQkFBUyxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFvQixDQUFDO2dCQUFDLEtBQUssQ0FBQztRQUMzRCxDQUFDO0lBQ0gsQ0FBQztJQTlLVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsaUJBQWlCO1NBQy9CLENBQUM7O09BRVcsWUFBWSxDQStLeEI7SUFBRCxtQkFBQztDQUFBLEFBL0tELElBK0tDO0FBL0tZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRCaW5kaW5nIH0gZnJvbSBcIi4vaGFiYmFqZXRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3hCaW5kaW5nIH0gZnJvbSBcIi4vY2hlY2tib3hcIjtcclxuaW1wb3J0IHsgQnVkZ2V0QmluZGluZyB9IGZyb20gXCIuL2J1ZGdldFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IGZyYW1lID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xyXG5pbXBvcnQgeyBGcmFtZUNvdW50cyB9IGZyb20gXCIuL2ZyYW1lLWNvdW50c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9oYWJiYWpldC5odG1sXCIsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBwdWJsaWMgaGFiYmFqZXRMaXN0OiBIYWJiYWpldEJpbmRpbmdbXTtcclxuICBwdWJsaWMgaGFiYmFqZXQ6IEhhYmJhamV0QmluZGluZztcclxuICBwdWJsaWMgaGFiYmFqZXRJbmRleDogbnVtYmVyO1xyXG4gIHB1YmxpYyBoYWJiYWpldENvdW50OiBudW1iZXI7XHJcbiAgcHVibGljIGJ1ZGdldDogQnVkZ2V0QmluZGluZztcclxuICBwdWJsaWMgc2F2ZU9iamVjdDogYW55O1xyXG4gIHB1YmxpYyB0YWJXaWR0aDogbnVtYmVyO1xyXG4gIHB1YmxpYyBmcmFtZXM6IEZyYW1lQ291bnRzO1xyXG4gIHB1YmxpYyBuZXdIYWJiYWpldE5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgbmV3SGFiYmFqZXRWYWx1ZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBkYXRlOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvbHVtbldpZHRocztcclxuICBwdWJsaWMgZWRpdGluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNhdmVPYmplY3QgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcbiAgICB0aGlzLmJ1ZGdldCA9IG5ldyBCdWRnZXRCaW5kaW5nKHRoaXMuc2F2ZU9iamVjdCk7XHJcbiAgICB0aGlzLmZyYW1lcyA9IG5ldyBGcmFtZUNvdW50cygpO1xyXG4gICAgdGhpcy5oYWJiYWpldExpc3QgPVtdO1xyXG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0TmFtZT1cIlwiO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlPVwiXCI7XHJcbiAgICB0aGlzLmxvYWRTYXZlZERhdGEoKTtcclxuICB9XHJcblxyXG4gIGxvYWRTYXZlZERhdGEoKSB7XHJcbiAgICBjb25zdCB0b3RhbFZhbHVlID0gdGhpcy5zYXZlT2JqZWN0LmdldE51bWJlcihcInRvdGFsXCIpO1xyXG4gICAgaWYodG90YWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuYnVkZ2V0LnNldFRvdGFsKHRvdGFsVmFsdWUpO1xyXG4gICAgICBjb25zdCBoYWJiYWpldENvdW50ID0gdGhpcy5zYXZlT2JqZWN0LmdldE51bWJlcihcImhhYmJhamV0Q291bnRcIik7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBoYWJiYWpldENvdW50OyBpKyspIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKG5ldyBIYWJiYWpldEJpbmRpbmcodGhpcy5idWRnZXQsIHRoaXMuc2F2ZU9iamVjdCwgaSwgXCJcIiwgZmFsc2UsIHRoaXMuZnJhbWVzLCBcIlwiKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoaGFiYmFqZXRDb3VudCA+IDApIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXQgPSB0aGlzLmhhYmJhamV0TGlzdFt0aGlzLmhhYmJhamV0SW5kZXhdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmhhYmJhamV0Q291bnQgPSB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XHJcbiAgICB0aGlzLnNldENvbHVtbldpZHRocygpO1xyXG4gIH1cclxuXHJcbiAgbmV3SGFiYmFqZXQoKSB7XHJcbiAgICBpZih0aGlzLmlzVmFsaWROYW1lKCkgJiYgdGhpcy5pc1ZhbGlkVmFsdWUoKSkge1xyXG4gICAgICB0aGlzLmhhYmJhamV0SW5kZXggPSB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2gobmV3IEhhYmJhamV0QmluZGluZyh0aGlzLmJ1ZGdldCwgdGhpcy5zYXZlT2JqZWN0LFxyXG4gICAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4LCB0aGlzLm5ld0hhYmJhamV0TmFtZSwgdHJ1ZSwgdGhpcy5mcmFtZXMsIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSkpO1xyXG4gICAgICB0aGlzLnNhdmVPYmplY3Quc2V0TnVtYmVyKFwiaGFiYmFqZXRDb3VudFwiLCB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGgpO1xyXG4gICAgICB0aGlzLmhhYmJhamV0Q291bnQgPSB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XHJcbiAgICAgIHRoaXMubmV3SGFiYmFqZXROYW1lID0gJyc7XHJcbiAgICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLnNlbGVjdEhhYmJhamV0KHRoaXMuaGFiYmFqZXRJbmRleCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENvbHVtbldpZHRocygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SGFiYmFqZXQoaW5kZXg6IG51bWJlciwgZm9yY2U/OiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5oYWJiYWpldExpc3QubGVuZ3RoID4gaW5kZXggJiYgdGhpcy5oYWJiYWpldEluZGV4ICE9PSBpbmRleCB8fCBmb3JjZSB8fCAhdGhpcy5oYWJiYWpldCkge1xyXG4gICAgICBjb25zdCBoYWJiYWpldERpc3BsYXkgPSA8UGFnZT5mcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoXCJoYWJiYWpldERpc3BsYXlcIik7XHJcbiAgICAgIGhhYmJhamV0RGlzcGxheS5hbmltYXRlKHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0W3RoaXMuaGFiYmFqZXRJbmRleF07XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBoYWJiYWpldERpc3BsYXkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTmV3SGFiYmFqZXRUYXAoKSB7XHJcbiAgICBpZih0aGlzLmhhYmJhamV0Q291bnQgPCA2KSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrYm94VGFwKGFyZ3MpIHtcclxuICAgIHRoaXMuaGFiYmFqZXQuZGFpbHlVcGRhdGUoYXJncy5pbmRleCk7XHJcbiAgfVxyXG5cclxuICBvblB1cmNoYXNlVGFwKGFyZ3MpIHtcclxuICAgIHRoaXMuYnVkZ2V0Lm1ha2VQdXJjaGFzZSgpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2soKSB7XHJcbiAgICBpZih0aGlzLmVkaXRpbmcpIHtcclxuICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQudXBkYXRlKHRoaXMubmV3SGFiYmFqZXROYW1lLCB0aGlzLm5ld0hhYmJhamV0VmFsdWUpO1xyXG4gICAgICB0aGlzLm5ld0hhYmJhamV0TmFtZSA9ICcnO1xyXG4gICAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWUgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQuZGFpbHlVcGRhdGUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNyb3NzKCkge1xyXG4gICAgaWYodGhpcy5lZGl0aW5nKSB7XHJcbiAgICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm5ld0hhYmJhamV0TmFtZSA9ICcnO1xyXG4gICAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWUgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFiYmFqZXQuZGFpbHlVcGRhdGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JbWFnZVRhcCgpIHtcclxuICAgIHRoaXMuaGFiYmFqZXQuYWN0KCk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkTmFtZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm5ld0hhYmJhamV0TmFtZS5sZW5ndGggPiAwICYmXHJcbiAgICAgdGhpcy5uZXdIYWJiYWpldE5hbWUubGVuZ3RoIDwgMTU7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IF8udG9OdW1iZXIodGhpcy5uZXdIYWJiYWpldFZhbHVlKTtcclxuICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgJiYgdmFsdWUgPiAwICYmIHZhbHVlIDw9IDEwMDA7XHJcbiAgfVxyXG5cclxuICBuYW1lQ2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSB0ZXh0RmllbGQudGV4dDtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldFZhbHVlID0gdGV4dEZpZWxkLnRleHQ7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRUYXAoKSB7XHJcbiAgICBpZihfLmlzTmlsKHRoaXMuaGFiYmFqZXQpKSByZXR1cm47XHJcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSB0aGlzLmhhYmJhamV0Lm5hbWU7XHJcbiAgICB0aGlzLm5ld0hhYmJhamV0VmFsdWUgPSB0aGlzLmhhYmJhamV0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGVUYXAoKSB7XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFiYmFqZXQuZGVsZXRlRGF0YSgpO1xyXG4gICAgdGhpcy5oYWJiYWpldExpc3QgPSBfLmZpbHRlcih0aGlzLmhhYmJhamV0TGlzdCwgKGgpID0+IHtcclxuICAgICAgcmV0dXJuIGguaW5kZXggIT09IHRoaXMuaGFiYmFqZXRJbmRleDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uZXdIYWJiYWpldE5hbWUgPSAnJztcclxuICAgIHRoaXMubmV3SGFiYmFqZXRWYWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5oYWJiYWpldENvdW50LS07XHJcbiAgICBmb3IobGV0IGkgPSB0aGlzLmhhYmJhamV0SW5kZXg7IGkgPCB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmhhYmJhamV0TGlzdFtpXS51cGRhdGVJbmRleChpKTtcclxuICAgIH1cclxuICAgIHRoaXMuaGFiYmFqZXRJbmRleCA9IDA7XHJcbiAgICBpZih0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0SGFiYmFqZXQoMCwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhYmJhamV0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRDb2x1bW5XaWR0aHMoKTtcclxuICB9XHJcblxyXG4gIHNldENvbHVtbldpZHRocygpIHtcclxuICAgIHN3aXRjaCh0aGlzLmhhYmJhamV0Q291bnQpIHtcclxuICAgICAgY2FzZSAyOiB0aGlzLmNvbHVtbldpZHRocyA9ICczOCwxMTQsMTE0LDAsMCwwLDAsKic7IGJyZWFrO1xyXG4gICAgICBjYXNlIDM6IHRoaXMuY29sdW1uV2lkdGhzID0gJzM4LDc2LDc2LDc2LDAsMCwwLConOyBicmVhaztcclxuICAgICAgY2FzZSA0OiB0aGlzLmNvbHVtbldpZHRocyA9ICczOCw1Nyw1Nyw1Nyw1NywwLDAsKic7IGJyZWFrO1xyXG4gICAgICBjYXNlIDU6IHRoaXMuY29sdW1uV2lkdGhzID0gJzM4LDQ1LDQ1LDQ1LDQ2LDQ2LDAsKic7IGJyZWFrO1xyXG4gICAgICBjYXNlIDY6IHRoaXMuY29sdW1uV2lkdGhzID0gJzM4LDM4LDM4LDM4LDM4LDM4LDM4LConOyBicmVhaztcclxuICAgICAgZGVmYXVsdDogdGhpcy5jb2x1bW5XaWR0aHMgPSAnMzgsMjI4LDAsMCwwLDAsMCwqJzsgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==