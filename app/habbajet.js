"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkbox_1 = require("./checkbox");
var _ = require("lodash");
var HabbajetBinding = /** @class */ (function () {
    function HabbajetBinding() {
        this.stateIndex = 0;
        this.frameIndex = 0;
        this.setImage();
        this.checkboxes = [
            new checkbox_1.CheckboxBinding("Sunday"),
            new checkbox_1.CheckboxBinding("Monday"),
            new checkbox_1.CheckboxBinding("Tuesday"),
            new checkbox_1.CheckboxBinding("Wednesday"),
            new checkbox_1.CheckboxBinding("Thursday"),
            new checkbox_1.CheckboxBinding("Friday"),
            new checkbox_1.CheckboxBinding("Saturday")
        ];
    }
    HabbajetBinding.prototype.checkboxStateUpdate = function (index) {
        this.checkboxes[index].cycleStates();
        var newState = 0;
        _.forEach(this.checkboxes, function (c) {
            if (c.isChecked()) {
                newState++;
            }
        });
        this.setState(newState);
    };
    HabbajetBinding.prototype.setImage = function () {
        this.image = "~/images/habbajet" + this.stateIndex + "_" + this.frameIndex + ".png";
    };
    HabbajetBinding.prototype.setState = function (newState) {
        if (newState < 0 || newState > 6) {
            this.stateIndex = 0;
            _.forEach(this.checkboxes, function (c) {
                c.reset();
            });
        }
        else {
            this.stateIndex = newState;
        }
        this.setImage();
    };
    return HabbajetBinding;
}());
exports.HabbajetBinding = HabbajetBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUE2QztBQUM3QywwQkFBNEI7QUFFNUI7SUFPSTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLElBQUksMEJBQWUsQ0FBQyxRQUFRLENBQUM7WUFDN0IsSUFBSSwwQkFBZSxDQUFDLFFBQVEsQ0FBQztZQUM3QixJQUFJLDBCQUFlLENBQUMsU0FBUyxDQUFDO1lBQzlCLElBQUksMEJBQWUsQ0FBQyxXQUFXLENBQUM7WUFDaEMsSUFBSSwwQkFBZSxDQUFDLFVBQVUsQ0FBQztZQUMvQixJQUFJLDBCQUFlLENBQUMsUUFBUSxDQUFDO1lBQzdCLElBQUksMEJBQWUsQ0FBQyxVQUFVLENBQUM7U0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRCw2Q0FBbUIsR0FBbkIsVUFBb0IsS0FBYTtRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXJDLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDO1lBQzNCLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLFFBQVEsRUFBRSxDQUFDO1lBQ2IsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDdEYsQ0FBQztJQUVELGtDQUFRLEdBQVIsVUFBUyxRQUFnQjtRQUN2QixFQUFFLENBQUEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDN0IsQ0FBQztRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBbERILElBa0RHO0FBbERVLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tib3hCaW5kaW5nIH0gZnJvbSBcIi4vY2hlY2tib3hcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0QmluZGluZyB7XHJcbiAgICBwcml2YXRlIHN0YXRlSW5kZXg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZnJhbWVJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIGltYWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2hlY2tib3hlczogQ2hlY2tib3hCaW5kaW5nW107XHJcbiAgICBcclxuICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLnN0YXRlSW5kZXggPSAwO1xyXG4gICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xyXG4gICAgICB0aGlzLnNldEltYWdlKCk7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hlcyA9IFtcclxuICAgICAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKFwiU3VuZGF5XCIpLFxyXG4gICAgICAgIG5ldyBDaGVja2JveEJpbmRpbmcoXCJNb25kYXlcIiksXHJcbiAgICAgICAgbmV3IENoZWNrYm94QmluZGluZyhcIlR1ZXNkYXlcIiksXHJcbiAgICAgICAgbmV3IENoZWNrYm94QmluZGluZyhcIldlZG5lc2RheVwiKSxcclxuICAgICAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKFwiVGh1cnNkYXlcIiksXHJcbiAgICAgICAgbmV3IENoZWNrYm94QmluZGluZyhcIkZyaWRheVwiKSxcclxuICAgICAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKFwiU2F0dXJkYXlcIilcclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja2JveFN0YXRlVXBkYXRlKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5jaGVja2JveGVzW2luZGV4XS5jeWNsZVN0YXRlcygpO1xyXG5cclxuICAgICAgbGV0IG5ld1N0YXRlID0gMDtcclxuICAgICAgXy5mb3JFYWNoKHRoaXMuY2hlY2tib3hlcywgKGMpID0+IHtcclxuICAgICAgICBpZihjLmlzQ2hlY2tlZCgpKSB7XHJcbiAgICAgICAgICBuZXdTdGF0ZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbWFnZSgpIHtcclxuICAgICAgdGhpcy5pbWFnZSA9IFwifi9pbWFnZXMvaGFiYmFqZXRcIiArIHRoaXMuc3RhdGVJbmRleCArIFwiX1wiICsgdGhpcy5mcmFtZUluZGV4ICsgXCIucG5nXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGUobmV3U3RhdGU6IG51bWJlcikge1xyXG4gICAgICBpZihuZXdTdGF0ZSA8IDAgfHwgbmV3U3RhdGUgPiA2KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZUluZGV4ID0gMDtcclxuICAgICAgICBfLmZvckVhY2godGhpcy5jaGVja2JveGVzLCAoYykgPT4ge1xyXG4gICAgICAgICAgYy5yZXNldCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3RhdGVJbmRleCA9IG5ld1N0YXRlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0SW1hZ2UoKTtcclxuICAgIH1cclxuICB9Il19