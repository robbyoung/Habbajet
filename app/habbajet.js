"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HabbajetBinding = /** @class */ (function () {
    function HabbajetBinding() {
        this.stateIndex = 0;
        this.frameIndex = 0;
        this.image = "~/images/Habbajet" + this.stateIndex + "_" + this.frameIndex + ".png";
    }
    HabbajetBinding.prototype.evolveState = function () {
        this.stateIndex < 5 ? this.stateIndex++ : this.stateIndex = 0;
        this.image = "~/images/Habbajet" + this.stateIndex + "_" + this.frameIndex + ".png";
    };
    HabbajetBinding.prototype.getImage = function () {
        return this.image;
    };
    return HabbajetBinding;
}());
exports.HabbajetBinding = HabbajetBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBS0k7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQ3RGLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUN0RixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFuQkgsSUFtQkc7QUFuQlUsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSGFiYmFqZXRCaW5kaW5nIHtcclxuICAgIHByaXZhdGUgc3RhdGVJbmRleDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBmcmFtZUluZGV4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGltYWdlOiBzdHJpbmc7XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5zdGF0ZUluZGV4ID0gMDtcclxuICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcclxuICAgICAgdGhpcy5pbWFnZSA9IFwifi9pbWFnZXMvSGFiYmFqZXRcIiArIHRoaXMuc3RhdGVJbmRleCArIFwiX1wiICsgdGhpcy5mcmFtZUluZGV4ICsgXCIucG5nXCI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBldm9sdmVTdGF0ZSgpIHtcclxuICAgICAgdGhpcy5zdGF0ZUluZGV4IDwgNSA/IHRoaXMuc3RhdGVJbmRleCsrIDogdGhpcy5zdGF0ZUluZGV4ID0gMDtcclxuICAgICAgdGhpcy5pbWFnZSA9IFwifi9pbWFnZXMvSGFiYmFqZXRcIiArIHRoaXMuc3RhdGVJbmRleCArIFwiX1wiICsgdGhpcy5mcmFtZUluZGV4ICsgXCIucG5nXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcclxuICAgIH1cclxuICB9Il19