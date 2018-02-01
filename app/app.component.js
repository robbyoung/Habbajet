"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var habbajet_1 = require("./habbajet");
var checkbox_1 = require("./checkbox");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.habbajet = new habbajet_1.HabbajetBinding();
        this.currentImage = this.habbajet.getImage();
        this.checkboxes = [
            new checkbox_1.CheckboxBinding(),
            new checkbox_1.CheckboxBinding(),
            new checkbox_1.CheckboxBinding(),
            new checkbox_1.CheckboxBinding(),
            new checkbox_1.CheckboxBinding(),
            new checkbox_1.CheckboxBinding(),
            new checkbox_1.CheckboxBinding()
        ];
    }
    AppComponent.prototype.onCheckboxTap = function (args) {
        this.checkboxes[args.index].cycleStates();
    };
    AppComponent.prototype.onEvolveTap = function () {
        this.habbajet.evolveState();
        this.currentImage = this.habbajet.getImage();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "<ActionBar title=\"Habbajet\" class=\"action-bar\"></ActionBar>\n\n  <StackLayout>\n      <Image [src]=\"currentImage\"></Image>\n      <Button text=\"EVOLVE\" (tap)=\"onEvolveTap()\"></Button>\n      <ListView [items]=\"checkboxes\" (itemTap)=\"onCheckboxTap($event)\">\n      <ng-template let-item=\"item\">\n          <StackLayout>\n              <Image [src]=\"image\"></Image>\n          </StackLayout>\n      </ng-template>\n      </ListView>\n  </StackLayout>"
            // templateUrl: "./habbajet.xml",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFDcEQsdUNBQTZDO0FBQzdDLHVDQUE2QztBQW1CN0M7SUFqQkE7UUFrQkUsYUFBUSxHQUFHLElBQUksMEJBQWUsRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QyxlQUFVLEdBQXNCO1lBQzlCLElBQUksMEJBQWUsRUFBRTtZQUNyQixJQUFJLDBCQUFlLEVBQUU7WUFDckIsSUFBSSwwQkFBZSxFQUFFO1lBQ3JCLElBQUksMEJBQWUsRUFBRTtZQUNyQixJQUFJLDBCQUFlLEVBQUU7WUFDckIsSUFBSSwwQkFBZSxFQUFFO1lBQ3JCLElBQUksMEJBQWUsRUFBRTtTQUN0QixDQUFDO0lBV0osQ0FBQztJQVRDLG9DQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFHRCxrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQXJCVSxZQUFZO1FBakJ4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLG9kQVlLO1lBQ2YsaUNBQWlDO1NBQ2xDLENBQUM7T0FDVyxZQUFZLENBc0J4QjtJQUFELG1CQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEhhYmJhamV0QmluZGluZyB9IGZyb20gXCIuL2hhYmJhamV0XCI7XG5pbXBvcnQgeyBDaGVja2JveEJpbmRpbmcgfSBmcm9tIFwiLi9jaGVja2JveFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgPEFjdGlvbkJhciB0aXRsZT1cIkhhYmJhamV0XCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+PC9BY3Rpb25CYXI+XG5cbiAgPFN0YWNrTGF5b3V0PlxuICAgICAgPEltYWdlIFtzcmNdPVwiY3VycmVudEltYWdlXCI+PC9JbWFnZT5cbiAgICAgIDxCdXR0b24gdGV4dD1cIkVWT0xWRVwiICh0YXApPVwib25Fdm9sdmVUYXAoKVwiPjwvQnV0dG9uPlxuICAgICAgPExpc3RWaWV3IFtpdGVtc109XCJjaGVja2JveGVzXCIgKGl0ZW1UYXApPVwib25DaGVja2JveFRhcCgkZXZlbnQpXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XCJpdGVtXCI+XG4gICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICA8SW1hZ2UgW3NyY109XCJpbWFnZVwiPjwvSW1hZ2U+XG4gICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L0xpc3RWaWV3PlxuICA8L1N0YWNrTGF5b3V0PmBcbiAgLy8gdGVtcGxhdGVVcmw6IFwiLi9oYWJiYWpldC54bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgaGFiYmFqZXQgPSBuZXcgSGFiYmFqZXRCaW5kaW5nKCk7XG4gIGN1cnJlbnRJbWFnZSA9IHRoaXMuaGFiYmFqZXQuZ2V0SW1hZ2UoKTtcbiAgY2hlY2tib3hlczogQ2hlY2tib3hCaW5kaW5nW10gPSBbXG4gICAgbmV3IENoZWNrYm94QmluZGluZygpLFxuICAgIG5ldyBDaGVja2JveEJpbmRpbmcoKSxcbiAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKCksXG4gICAgbmV3IENoZWNrYm94QmluZGluZygpLFxuICAgIG5ldyBDaGVja2JveEJpbmRpbmcoKSxcbiAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKCksXG4gICAgbmV3IENoZWNrYm94QmluZGluZygpXG4gIF07XG5cbiAgb25DaGVja2JveFRhcChhcmdzKSB7XG4gICAgdGhpcy5jaGVja2JveGVzW2FyZ3MuaW5kZXhdLmN5Y2xlU3RhdGVzKCk7XG4gIH1cblxuXG4gIG9uRXZvbHZlVGFwKCkge1xuICAgIHRoaXMuaGFiYmFqZXQuZXZvbHZlU3RhdGUoKTtcbiAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHRoaXMuaGFiYmFqZXQuZ2V0SW1hZ2UoKTtcbiAgfVxufVxuIl19