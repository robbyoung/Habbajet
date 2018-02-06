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
        this.setActiveDay();
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
        this.setActiveDay();
    };
    HabbajetBinding.prototype.setImage = function () {
        this.image = "~/images/habbajet" + this.stateIndex + "_" + this.frameIndex + ".png";
        console.log("image changed to: " + this.image);
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
    HabbajetBinding.prototype.setActiveDay = function () {
        for (var i = 0; i < this.checkboxes.length; i++) {
            if (!this.checkboxes[i].isSet()) {
                this.activeDay = this.checkboxes[i].title;
                return;
            }
        }
    };
    HabbajetBinding.prototype.saveData = function () {
        this.saveObject.setString("h" + this.index + "name", this.name);
        this.saveObject.setNumber("h" + this.index + "stateIndex", this.stateIndex);
    };
    return HabbajetBinding;
}());
exports.HabbajetBinding = HabbajetBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDBCQUE0QjtBQUM1QixvQ0FBc0M7QUFHdEM7SUFPRSx5QkFBb0IsTUFBcUIsRUFBVSxVQUFlLEVBQ3RELEtBQWEsRUFBUyxJQUFZLEVBQUUsS0FBYztRQUQxQyxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUN0RCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUU1QyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLElBQUksMEJBQWUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdkQsSUFBSSwwQkFBZSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN2RCxJQUFJLDBCQUFlLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3hELElBQUksMEJBQWUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDMUQsSUFBSSwwQkFBZSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN6RCxJQUFJLDBCQUFlLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3ZELElBQUksMEJBQWUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDMUQsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQztRQUMxRSxDQUFDO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUsscUNBQVcsR0FBakIsVUFBa0IsS0FBYTs7Ozs7Z0JBQ3ZCLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQUMsTUFBTSxnQkFBQztnQkFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDZCxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUMxQixPQUFPLEVBQUUsZ0RBQWdEO29CQUN6RCxZQUFZLEVBQUUsS0FBSztvQkFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtvQkFDdEIsaUJBQWlCLEVBQUUsUUFBUTtpQkFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87b0JBQ2QsRUFBRSxDQUFBLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQy9CLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dCQUMzQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2xCLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Ozs7S0FDSjtJQUVELDZDQUFtQixHQUFuQjtRQUNFLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUMsQ0FBQztZQUMzQixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixRQUFRLEVBQUUsQ0FBQztZQUNiLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2hCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLFNBQWlCO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0UsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQy9DLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQztZQUNULENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVILHNCQUFDO0FBQUQsQ0FBQyxBQXJHRCxJQXFHQztBQXJHWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZWNrYm94QmluZGluZyB9IGZyb20gXCIuL2NoZWNrYm94XCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICogYXMgRGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcclxuaW1wb3J0IHsgQnVkZ2V0QmluZGluZyB9IGZyb20gXCIuL2J1ZGdldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0QmluZGluZyB7XHJcbiAgcHJpdmF0ZSBzdGF0ZUluZGV4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBmcmFtZUluZGV4OiBudW1iZXI7XHJcbiAgcHVibGljIGltYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIGNoZWNrYm94ZXM6IENoZWNrYm94QmluZGluZ1tdO1xyXG4gIHB1YmxpYyBhY3RpdmVEYXk6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBidWRnZXQ6IEJ1ZGdldEJpbmRpbmcsIHByaXZhdGUgc2F2ZU9iamVjdDogYW55LFxyXG4gICAgICBwcml2YXRlIGluZGV4OiBudW1iZXIsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIGlzTmV3OiBib29sZWFuKSB7XHJcbiAgICBcclxuICAgIHRoaXMuY2hlY2tib3hlcyA9IFtcclxuICAgICAgbmV3IENoZWNrYm94QmluZGluZyhcIlN1bmRheVwiLCBzYXZlT2JqZWN0LCBpbmRleCwgaXNOZXcpLFxyXG4gICAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKFwiTW9uZGF5XCIsIHNhdmVPYmplY3QsIGluZGV4LCBpc05ldyksXHJcbiAgICAgIG5ldyBDaGVja2JveEJpbmRpbmcoXCJUdWVzZGF5XCIsIHNhdmVPYmplY3QsIGluZGV4LCBpc05ldyksXHJcbiAgICAgIG5ldyBDaGVja2JveEJpbmRpbmcoXCJXZWRuZXNkYXlcIiwgc2F2ZU9iamVjdCwgaW5kZXgsIGlzTmV3KSxcclxuICAgICAgbmV3IENoZWNrYm94QmluZGluZyhcIlRodXJzZGF5XCIsIHNhdmVPYmplY3QsIGluZGV4LCBpc05ldyksXHJcbiAgICAgIG5ldyBDaGVja2JveEJpbmRpbmcoXCJGcmlkYXlcIiwgc2F2ZU9iamVjdCwgaW5kZXgsIGlzTmV3KSxcclxuICAgICAgbmV3IENoZWNrYm94QmluZGluZyhcIlNhdHVyZGF5XCIsIHNhdmVPYmplY3QsIGluZGV4LCBpc05ldylcclxuICAgIF07XHJcbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xyXG4gICAgaWYoaXNOZXcpIHtcclxuICAgICAgdGhpcy5zdGF0ZUluZGV4ID0gMDtcclxuICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uYW1lID0gc2F2ZU9iamVjdC5nZXRTdHJpbmcoXCJoXCIgKyB0aGlzLmluZGV4ICsgXCJuYW1lXCIpO1xyXG4gICAgICB0aGlzLnN0YXRlSW5kZXggPSBzYXZlT2JqZWN0LmdldE51bWJlcihcImhcIiArIHRoaXMuaW5kZXggKyBcInN0YXRlSW5kZXhcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEFjdGl2ZURheSgpO1xyXG4gICAgdGhpcy5zZXRJbWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGFpbHlVcGRhdGUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSB0aGlzLmNoZWNrYm94ZXNbaW5kZXhdO1xyXG4gICAgaWYoY2hlY2tib3guaXNTZXQoKSkgcmV0dXJuO1xyXG4gICAgRGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgdGl0bGU6IGNoZWNrYm94LnRpdGxlICsgJycsXHJcbiAgICAgIG1lc3NhZ2U6IFwiRGlkIHlvdSBhY2NvbXBsaXNoIHlvdXIgaGFiaXQgZ29hbHMgZm9yIHRvZGF5P1wiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcclxuICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICB9KS50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgIGlmKHN1Y2Nlc3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNoZWNrYm94LmZpbGxDaGVja2JveChzdWNjZXNzKTtcclxuICAgICAgICB0aGlzLmNoZWNrYm94U3RhdGVVcGRhdGUoKTtcclxuICAgICAgICB0aGlzLnNhdmVEYXRhKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tib3hTdGF0ZVVwZGF0ZSgpIHtcclxuICAgIGxldCBuZXdTdGF0ZSA9IDA7XHJcbiAgICBsZXQgbnVtU2V0Qm94ZXMgPSAwO1xyXG4gICAgXy5mb3JFYWNoKHRoaXMuY2hlY2tib3hlcywgKGMpID0+IHtcclxuICAgICAgaWYoYy5pc0NoZWNrZWQoKSkge1xyXG4gICAgICAgIG5ld1N0YXRlKys7XHJcbiAgICAgIH1cclxuICAgICAgaWYoYy5pc1NldCgpKSB7XHJcbiAgICAgICAgbnVtU2V0Qm94ZXMrKztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYobnVtU2V0Qm94ZXMgPiA2KSB7XHJcbiAgICAgIHRoaXMuZW5kV2VlayhuZXdTdGF0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0QWN0aXZlRGF5KCk7XHJcbiAgfVxyXG5cclxuICBzZXRJbWFnZSgpIHtcclxuICAgIHRoaXMuaW1hZ2UgPSBcIn4vaW1hZ2VzL2hhYmJhamV0XCIgKyB0aGlzLnN0YXRlSW5kZXggKyBcIl9cIiArIHRoaXMuZnJhbWVJbmRleCArIFwiLnBuZ1wiO1xyXG4gICAgY29uc29sZS5sb2coXCJpbWFnZSBjaGFuZ2VkIHRvOiBcIiArIHRoaXMuaW1hZ2UpO1xyXG4gIH1cclxuXHJcbiAgc2V0U3RhdGUobmV3U3RhdGU6IG51bWJlcikge1xyXG4gICAgdGhpcy5zdGF0ZUluZGV4ID0gbmV3U3RhdGU7XHJcbiAgICB0aGlzLnNldEltYWdlKCk7XHJcbiAgfVxyXG5cclxuICBlbmRXZWVrKHN1Y2Nlc3NlczogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmJ1ZGdldC51cGRhdGVUb3RhbChzdWNjZXNzZXMpO1xyXG4gICAgXy5mb3JFYWNoKHRoaXMuY2hlY2tib3hlcywgKGMpID0+IHtcclxuICAgICAgYy5yZXNldCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKDApO1xyXG4gIH1cclxuXHJcbiAgc2V0QWN0aXZlRGF5KCkge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2hlY2tib3hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIXRoaXMuY2hlY2tib3hlc1tpXS5pc1NldCgpKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVEYXkgPSB0aGlzLmNoZWNrYm94ZXNbaV0udGl0bGU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlRGF0YSgpIHtcclxuICAgIHRoaXMuc2F2ZU9iamVjdC5zZXRTdHJpbmcoXCJoXCIgKyB0aGlzLmluZGV4ICsgXCJuYW1lXCIsIHRoaXMubmFtZSk7XHJcbiAgICB0aGlzLnNhdmVPYmplY3Quc2V0TnVtYmVyKFwiaFwiICsgdGhpcy5pbmRleCArIFwic3RhdGVJbmRleFwiLCB0aGlzLnN0YXRlSW5kZXgpO1xyXG4gIH1cclxuXHJcbn0iXX0=