"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.stateIndex = 0;
        this.animationIndex = 0;
        this.habbajetImage = "~/images/Habbajet" + this.stateIndex + "_" + this.animationIndex + ".png";
    }
    AppComponent.prototype.evolveState = function () {
        this.stateIndex < 5 ? this.stateIndex++ : this.stateIndex = 0;
        this.habbajetImage = "~/images/Habbajet" + this.stateIndex + "_" + this.animationIndex + ".png";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ActionBar title=\"Habbajet\" class=\"action-bar\"></ActionBar>\n    <!-- Your UI components go here -->\n\n    <StackLayout>\n      <GridView rows=\"auto\" columns=\"100, 100\">\n        <!--<Label row=\"0\" col=\"0\" text=\"habbajet\" tap=\"onTap\"> </Label>\n         <Label row=\"0\" col=\"1\" text=\"inferior beings\" tap=\"onOtherTap\"> </Label> -->\n      </GridView>\n      <Image [src]=\"habbajetImage\"></Image>\n      <Button text=\"EVOLVE\" (tap)=\"evolveState()\"></Button>\n    </StackLayout>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// exports.onTap = function() {
//   console.log('Habbajet tapped!');
// };
// exports.onOtherTap = function() {
//   console.log('Inferior being tapped!');
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFrQnBEO0lBaEJBO1FBaUJFLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixrQkFBYSxHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0lBUzdGLENBQUM7SUFQQyxrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUNsRyxDQUFDO0lBUlUsWUFBWTtRQWhCeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxzZ0JBWVQ7U0FDRixDQUFDO09BQ1csWUFBWSxDQVl4QjtJQUFELG1CQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksb0NBQVk7QUFjekIsK0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQyxLQUFLO0FBRUwsb0NBQW9DO0FBQ3BDLDJDQUEyQztBQUMzQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiSGFiYmFqZXRcIiBjbGFzcz1cImFjdGlvbi1iYXJcIj48L0FjdGlvbkJhcj5cbiAgICA8IS0tIFlvdXIgVUkgY29tcG9uZW50cyBnbyBoZXJlIC0tPlxuXG4gICAgPFN0YWNrTGF5b3V0PlxuICAgICAgPEdyaWRWaWV3IHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cIjEwMCwgMTAwXCI+XG4gICAgICAgIDwhLS08TGFiZWwgcm93PVwiMFwiIGNvbD1cIjBcIiB0ZXh0PVwiaGFiYmFqZXRcIiB0YXA9XCJvblRhcFwiPiA8L0xhYmVsPlxuICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIxXCIgdGV4dD1cImluZmVyaW9yIGJlaW5nc1wiIHRhcD1cIm9uT3RoZXJUYXBcIj4gPC9MYWJlbD4gLS0+XG4gICAgICA8L0dyaWRWaWV3PlxuICAgICAgPEltYWdlIFtzcmNdPVwiaGFiYmFqZXRJbWFnZVwiPjwvSW1hZ2U+XG4gICAgICA8QnV0dG9uIHRleHQ9XCJFVk9MVkVcIiAodGFwKT1cImV2b2x2ZVN0YXRlKClcIj48L0J1dHRvbj5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHN0YXRlSW5kZXggPSAwO1xuICBhbmltYXRpb25JbmRleCA9IDA7XG4gIGhhYmJhamV0SW1hZ2UgPSBcIn4vaW1hZ2VzL0hhYmJhamV0XCIgKyB0aGlzLnN0YXRlSW5kZXggKyBcIl9cIiArIHRoaXMuYW5pbWF0aW9uSW5kZXggKyBcIi5wbmdcIjtcblxuICBldm9sdmVTdGF0ZSgpIHtcbiAgICB0aGlzLnN0YXRlSW5kZXggPCA1ID8gdGhpcy5zdGF0ZUluZGV4KysgOiB0aGlzLnN0YXRlSW5kZXggPSAwO1xuICAgIHRoaXMuaGFiYmFqZXRJbWFnZSA9IFwifi9pbWFnZXMvSGFiYmFqZXRcIiArIHRoaXMuc3RhdGVJbmRleCArIFwiX1wiICsgdGhpcy5hbmltYXRpb25JbmRleCArIFwiLnBuZ1wiO1xuICB9XG5cblxuICBcbn1cblxuLy8gZXhwb3J0cy5vblRhcCA9IGZ1bmN0aW9uKCkge1xuLy8gICBjb25zb2xlLmxvZygnSGFiYmFqZXQgdGFwcGVkIScpO1xuLy8gfTtcblxuLy8gZXhwb3J0cy5vbk90aGVyVGFwID0gZnVuY3Rpb24oKSB7XG4vLyAgIGNvbnNvbGUubG9nKCdJbmZlcmlvciBiZWluZyB0YXBwZWQhJyk7XG4vLyB9O1xuIl19