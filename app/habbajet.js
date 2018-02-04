"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkbox_1 = require("./checkbox");
var _ = require("lodash");
var Dialogs = require("ui/dialogs");
var HabbajetBinding = /** @class */ (function () {
    function HabbajetBinding(budget, saveObject, index, name, isNew) {
        this.budget = budget;
        this.saveObject = saveObject;
        this.index = index;
        this.name = name;
        this.checkboxes = [
            new checkbox_1.CheckboxBinding("Sunday", saveObject, index, isNew),
            new checkbox_1.CheckboxBinding("Monday", saveObject, index, isNew),
            new checkbox_1.CheckboxBinding("Tuesday", saveObject, index, isNew),
            new checkbox_1.CheckboxBinding("Wednesday", saveObject, index, isNew),
            new checkbox_1.CheckboxBinding("Thursday", saveObject, index, isNew),
            new checkbox_1.CheckboxBinding("Friday", saveObject, index, isNew),
            new checkbox_1.CheckboxBinding("Saturday", saveObject, index, isNew)
        ];
        this.frameIndex = 0;
        if (isNew) {
            this.stateIndex = 0;
            this.saveData();
        }
        else {
            this.name = saveObject.getString("h" + this.index + "name");
            this.stateIndex = saveObject.getNumber("h" + this.index + "stateIndex");
        }
        this.setImage();
    }
    HabbajetBinding.prototype.dailyUpdate = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var checkbox;
            return __generator(this, function (_a) {
                checkbox = this.checkboxes[index];
                if (checkbox.isSet())
                    return [2 /*return*/];
                Dialogs.confirm({
                    title: checkbox.title + '',
                    message: "Did you accomplish your habit goals for today?",
                    okButtonText: "Yes",
                    cancelButtonText: "No",
                    neutralButtonText: "Cancel",
                }).then(function (success) {
                    if (success !== undefined) {
                        checkbox.fillCheckbox(success);
                        _this.checkboxStateUpdate();
                        _this.saveData();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    HabbajetBinding.prototype.checkboxStateUpdate = function () {
        var newState = 0;
        var numSetBoxes = 0;
        _.forEach(this.checkboxes, function (c) {
            if (c.isChecked()) {
                newState++;
            }
            if (c.isSet()) {
                numSetBoxes++;
            }
        });
        if (numSetBoxes > 6) {
            this.endWeek(newState);
        }
        else {
            this.setState(newState);
        }
    };
    HabbajetBinding.prototype.setImage = function () {
        this.image = "~/images/habbajet" + this.stateIndex + "_" + this.frameIndex + ".png";
    };
    HabbajetBinding.prototype.setState = function (newState) {
        this.stateIndex = newState;
        this.setImage();
    };
    HabbajetBinding.prototype.endWeek = function (successes) {
        this.budget.updateTotal(successes);
        _.forEach(this.checkboxes, function (c) {
            c.reset();
        });
        this.setState(0);
    };
    HabbajetBinding.prototype.saveData = function () {
        this.saveObject.setString("h" + this.index + "name", this.name);
        this.stateIndex = this.saveObject.setNumber("h" + this.index + "stateIndex", this.stateIndex);
    };
    return HabbajetBinding;
}());
exports.HabbajetBinding = HabbajetBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDBCQUE0QjtBQUM1QixvQ0FBc0M7QUFHdEM7SUFNRSx5QkFBb0IsTUFBcUIsRUFBVSxVQUFlLEVBQ3RELEtBQWEsRUFBUyxJQUFZLEVBQUUsS0FBYztRQUQxQyxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUN0RCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUU1QyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLElBQUksMEJBQWUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdkQsSUFBSSwwQkFBZSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN2RCxJQUFJLDBCQUFlLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3hELElBQUksMEJBQWUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDMUQsSUFBSSwwQkFBZSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN6RCxJQUFJLDBCQUFlLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3ZELElBQUksMEJBQWUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDMUQsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVCxJQUFJLENB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SSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFSCxzQkFBQztBQUFELENBQUMsQUF4RkQsSUF3RkM7QUF4RlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGVja2JveEJpbmRpbmcgfSBmcm9tIFwiLi9jaGVja2JveFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcbmltcG9ydCB7IEJ1ZGdldEJpbmRpbmcgfSBmcm9tIFwiLi9idWRnZXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldEJpbmRpbmcge1xyXG4gIHByaXZhdGUgc3RhdGVJbmRleDogbnVtYmVyO1xyXG4gIHByaXZhdGUgZnJhbWVJbmRleDogbnVtYmVyO1xyXG4gIHB1YmxpYyBpbWFnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBjaGVja2JveGVzOiBDaGVja2JveEJpbmRpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBidWRnZXQ6IEJ1ZGdldEJpbmRpbmcsIHByaXZhdGUgc2F2ZU9iamVjdDogYW55LFxyXG4gICAgICBwcml2YXRlIGluZGV4OiBudW1iZXIsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIGlzTmV3OiBib29sZWFuKSB7XHJcbiAgICBcclxuICAgIHRoaXMuY2hlY2tib3hlcyA9IFtcclxuICAgICAgbmV3IENoZWNrYm94QmluZGluZyhcIlN1bmRheVwiLCBzYXZlT2JqZWN0LCBpbmRleCwgaXNOZXcpLFxyXG4gICAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKFwiTW9uZGF5XCIsIHNhdmVPYmplY3QsIGluZGV4LCBpc05ldyksXHJcbiAgICAgIG5ldyBDaGVja2JveEJpbmRpbmcoXCJUdWVzZGF5XCIsIHNhdmVPYmplY3QsIGluZGV4LCBpc05ldyksXHJcbiAgICAgIG5ldyBDaGVja2JveEJpbmRpbmcoXCJXZWRuZXNkYXlcIiwgc2F2ZU9iamVjdCwgaW5kZXgsIGlzTmV3KSxcclxuICAgICAgbmV3IENoZWNrYm94QmluZGluZyhcIlRodXJzZGF5XCIsIHNhdmVPYmplY3QsIGluZGV4LCBpc05ldyksXHJcbiAgICAgIG5ldyBDaGVja2JveEJpbmRpbmcoXCJGcmlkYXlcIiwgc2F2ZU9iamVjdCwgaW5kZXgsIGlzTmV3KSxcclxuICAgICAgbmV3IENoZWNrYm94QmluZGluZyhcIlNhdHVyZGF5XCIsIHNhdmVPYmplY3QsIGluZGV4LCBpc05ldylcclxuICAgIF07XHJcbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xyXG4gICAgaWYoaXNOZXcpIHtcclxuICAgICAgdGhpcy5zdGF0ZUluZGV4ID0gMDtcclxuICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uYW1lID0gc2F2ZU9iamVjdC5nZXRTdHJpbmcoXCJoXCIgKyB0aGlzLmluZGV4ICsgXCJuYW1lXCIpO1xyXG4gICAgICB0aGlzLnN0YXRlSW5kZXggPSBzYXZlT2JqZWN0LmdldE51bWJlcihcImhcIiArIHRoaXMuaW5kZXggKyBcInN0YXRlSW5kZXhcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEltYWdlKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBkYWlseVVwZGF0ZShpbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IHRoaXMuY2hlY2tib3hlc1tpbmRleF07XHJcbiAgICBpZihjaGVja2JveC5pc1NldCgpKSByZXR1cm47XHJcbiAgICBEaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogY2hlY2tib3gudGl0bGUgKyAnJyxcclxuICAgICAgbWVzc2FnZTogXCJEaWQgeW91IGFjY29tcGxpc2ggeW91ciBoYWJpdCBnb2FscyBmb3IgdG9kYXk/XCIsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxyXG4gICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgIH0pLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgaWYoc3VjY2VzcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY2hlY2tib3guZmlsbENoZWNrYm94KHN1Y2Nlc3MpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hTdGF0ZVVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja2JveFN0YXRlVXBkYXRlKCkge1xyXG4gICAgbGV0IG5ld1N0YXRlID0gMDtcclxuICAgIGxldCBudW1TZXRCb3hlcyA9IDA7XHJcbiAgICBfLmZvckVhY2godGhpcy5jaGVja2JveGVzLCAoYykgPT4ge1xyXG4gICAgICBpZihjLmlzQ2hlY2tlZCgpKSB7XHJcbiAgICAgICAgbmV3U3RhdGUrKztcclxuICAgICAgfVxyXG4gICAgICBpZihjLmlzU2V0KCkpIHtcclxuICAgICAgICBudW1TZXRCb3hlcysrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihudW1TZXRCb3hlcyA+IDYpIHtcclxuICAgICAgdGhpcy5lbmRXZWVrKG5ld1N0YXRlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SW1hZ2UoKSB7XHJcbiAgICB0aGlzLmltYWdlID0gXCJ+L2ltYWdlcy9oYWJiYWpldFwiICsgdGhpcy5zdGF0ZUluZGV4ICsgXCJfXCIgKyB0aGlzLmZyYW1lSW5kZXggKyBcIi5wbmdcIjtcclxuICB9XHJcblxyXG4gIHNldFN0YXRlKG5ld1N0YXRlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3RhdGVJbmRleCA9IG5ld1N0YXRlO1xyXG4gICAgdGhpcy5zZXRJbWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgZW5kV2VlayhzdWNjZXNzZXM6IG51bWJlcikge1xyXG4gICAgdGhpcy5idWRnZXQudXBkYXRlVG90YWwoc3VjY2Vzc2VzKTtcclxuICAgIF8uZm9yRWFjaCh0aGlzLmNoZWNrYm94ZXMsIChjKSA9PiB7XHJcbiAgICAgIGMucmVzZXQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgwKTtcclxuICB9XHJcblxyXG4gIHNhdmVEYXRhKCkge1xyXG4gICAgdGhpcy5zYXZlT2JqZWN0LnNldFN0cmluZyhcImhcIiArIHRoaXMuaW5kZXggKyBcIm5hbWVcIiwgdGhpcy5uYW1lKTtcclxuICAgIHRoaXMuc3RhdGVJbmRleCA9IHRoaXMuc2F2ZU9iamVjdC5zZXROdW1iZXIoXCJoXCIgKyB0aGlzLmluZGV4ICsgXCJzdGF0ZUluZGV4XCIsIHRoaXMuc3RhdGVJbmRleCk7XHJcbiAgfVxyXG5cclxufSJdfQ==