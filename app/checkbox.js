"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckboxState;
(function (CheckboxState) {
    CheckboxState[CheckboxState["NEUTRAL"] = 0] = "NEUTRAL";
    CheckboxState[CheckboxState["POSITIVE"] = 1] = "POSITIVE";
    CheckboxState[CheckboxState["NEGATIVE"] = 2] = "NEGATIVE";
})(CheckboxState || (CheckboxState = {}));
var CheckboxBinding = /** @class */ (function () {
    function CheckboxBinding(title) {
        this.title = title;
        this.state = CheckboxState.NEUTRAL;
        this.setImage();
    }
    CheckboxBinding.prototype.cycleStates = function () {
        if (this.state === CheckboxState.NEUTRAL) {
            this.state = CheckboxState.POSITIVE;
        }
        else if (this.state === CheckboxState.POSITIVE) {
            this.state = CheckboxState.NEGATIVE;
        }
        else if (this.state === CheckboxState.NEGATIVE) {
            this.state = CheckboxState.NEUTRAL;
        }
        this.setImage();
    };
    CheckboxBinding.prototype.setImage = function () {
        if (this.state === CheckboxState.NEUTRAL) {
            this.image = "~/images/checkbox/Neutral.png";
        }
        else if (this.state === CheckboxState.POSITIVE) {
            this.image = "~/images/checkbox/Positive.png";
        }
        else if (this.state === CheckboxState.NEGATIVE) {
            this.image = "~/images/checkbox/Negative.png";
        }
    };
    CheckboxBinding.prototype.isChecked = function () {
        return this.state === CheckboxState.POSITIVE;
    };
    CheckboxBinding.prototype.reset = function () {
        this.state = CheckboxState.NEUTRAL;
        this.image = "~/images/checkbox/Neutral.png";
    };
    return CheckboxBinding;
}());
exports.CheckboxBinding = CheckboxBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUssYUFJSjtBQUpELFdBQUssYUFBYTtJQUNkLHVEQUFPLENBQUE7SUFDUCx5REFBUSxDQUFBO0lBQ1IseURBQVEsQ0FBQTtBQUNaLENBQUMsRUFKSSxhQUFhLEtBQWIsYUFBYSxRQUlqQjtBQUVEO0lBS0kseUJBQVksS0FBYTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDeEMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsK0JBQStCLENBQUM7UUFDakQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0NBQWdDLENBQUM7UUFDbEQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0NBQWdDLENBQUM7UUFDbEQsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNqRCxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLCtCQUErQixDQUFDO0lBQ2pELENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJlbnVtIENoZWNrYm94U3RhdGUge1xyXG4gICAgTkVVVFJBTCxcclxuICAgIFBPU0lUSVZFLFxyXG4gICAgTkVHQVRJVkVcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrYm94QmluZGluZyB7XHJcbiAgICBwdWJsaWMgc3RhdGU6IENoZWNrYm94U3RhdGU7XHJcbiAgICBwdWJsaWMgaW1hZ2U6IFN0cmluZztcclxuICAgIHB1YmxpYyB0aXRsZTogU3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENoZWNrYm94U3RhdGUuTkVVVFJBTDtcclxuICAgICAgICB0aGlzLnNldEltYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3ljbGVTdGF0ZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENoZWNrYm94U3RhdGUuTkVVVFJBTCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gQ2hlY2tib3hTdGF0ZS5QT1NJVElWRTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IENoZWNrYm94U3RhdGUuUE9TSVRJVkUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENoZWNrYm94U3RhdGUuTkVHQVRJVkU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBDaGVja2JveFN0YXRlLk5FR0FUSVZFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBDaGVja2JveFN0YXRlLk5FVVRSQUw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0SW1hZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbWFnZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ2hlY2tib3hTdGF0ZS5ORVVUUkFMKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBcIn4vaW1hZ2VzL2NoZWNrYm94L05ldXRyYWwucG5nXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBDaGVja2JveFN0YXRlLlBPU0lUSVZFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBcIn4vaW1hZ2VzL2NoZWNrYm94L1Bvc2l0aXZlLnBuZ1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gQ2hlY2tib3hTdGF0ZS5ORUdBVElWRSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlID0gXCJ+L2ltYWdlcy9jaGVja2JveC9OZWdhdGl2ZS5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNDaGVja2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBDaGVja2JveFN0YXRlLlBPU0lUSVZFO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBDaGVja2JveFN0YXRlLk5FVVRSQUw7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IFwifi9pbWFnZXMvY2hlY2tib3gvTmV1dHJhbC5wbmdcIjtcclxuICAgIH1cclxufSJdfQ==