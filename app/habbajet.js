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
    function HabbajetBinding(budget) {
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
        this.budget = budget;
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
                }).then(function (success) {
                    checkbox.fillCheckbox(success);
                    _this.checkboxStateUpdate();
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
    return HabbajetBinding;
}());
exports.HabbajetBinding = HabbajetBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDBCQUE0QjtBQUM1QixvQ0FBc0M7QUFHdEM7SUFPRSx5QkFBWSxNQUFxQjtRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNoQixJQUFJLDBCQUFlLENBQUMsUUFBUSxDQUFDO1lBQzdCLElBQUksMEJBQWUsQ0FBQyxRQUFRLENBQUM7WUFDN0IsSUFBSSwwQkFBZSxDQUFDLFNBQVMsQ0FBQztZQUM5QixJQUFJLDBCQUFlLENBQUMsV0FBVyxDQUFDO1lBQ2hDLElBQUksMEJBQWUsQ0FBQyxVQUFVLENBQUM7WUFDL0IsSUFBSSwwQkFBZSxDQUFDLFFBQVEsQ0FBQztZQUM3QixJQUFJLDBCQUFlLENBQUMsVUFBVSxDQUFDO1NBQ2hDLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUsscUNBQVcsR0FBakIsVUFBa0IsS0FBYTs7Ozs7Z0JBQ3ZCLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQUMsTUFBTSxnQkFBQztnQkFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDZCxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUMxQixPQUFPLEVBQUUsZ0RBQWdEO29CQUN6RCxZQUFZLEVBQUUsS0FBSztvQkFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtpQkFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87b0JBQ2QsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDL0IsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxDQUFDOzs7O0tBQ0o7SUFFRCw2Q0FBbUIsR0FBbkI7UUFDRSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUM7WUFDM0IsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakIsUUFBUSxFQUFFLENBQUM7WUFDYixDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDYixXQUFXLEVBQUUsQ0FBQztZQUNoQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUN0RixDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLFNBQWlCO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFSCxzQkFBQztBQUFELENBQUMsQUF6RUQsSUF5RUM7QUF6RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGVja2JveEJpbmRpbmcgfSBmcm9tIFwiLi9jaGVja2JveFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcbmltcG9ydCB7IEJ1ZGdldEJpbmRpbmcgfSBmcm9tIFwiLi9idWRnZXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldEJpbmRpbmcge1xyXG4gIHByaXZhdGUgc3RhdGVJbmRleDogbnVtYmVyO1xyXG4gIHByaXZhdGUgZnJhbWVJbmRleDogbnVtYmVyO1xyXG4gIHB1YmxpYyBpbWFnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBjaGVja2JveGVzOiBDaGVja2JveEJpbmRpbmdbXTtcclxuICBwdWJsaWMgYnVkZ2V0OiBCdWRnZXRCaW5kaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihidWRnZXQ6IEJ1ZGdldEJpbmRpbmcpIHtcclxuICAgIHRoaXMuc3RhdGVJbmRleCA9IDA7XHJcbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xyXG4gICAgdGhpcy5zZXRJbWFnZSgpO1xyXG4gICAgdGhpcy5jaGVja2JveGVzID0gW1xyXG4gICAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKFwiU3VuZGF5XCIpLFxyXG4gICAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKFwiTW9uZGF5XCIpLFxyXG4gICAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKFwiVHVlc2RheVwiKSxcclxuICAgICAgbmV3IENoZWNrYm94QmluZGluZyhcIldlZG5lc2RheVwiKSxcclxuICAgICAgbmV3IENoZWNrYm94QmluZGluZyhcIlRodXJzZGF5XCIpLFxyXG4gICAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKFwiRnJpZGF5XCIpLFxyXG4gICAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKFwiU2F0dXJkYXlcIilcclxuICAgIF07XHJcbiAgICB0aGlzLmJ1ZGdldCA9IGJ1ZGdldDtcclxuICB9XHJcblxyXG4gIGFzeW5jIGRhaWx5VXBkYXRlKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gdGhpcy5jaGVja2JveGVzW2luZGV4XTtcclxuICAgIGlmKGNoZWNrYm94LmlzU2V0KCkpIHJldHVybjtcclxuICAgIERpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiBjaGVja2JveC50aXRsZSArICcnLFxyXG4gICAgICBtZXNzYWdlOiBcIkRpZCB5b3UgYWNjb21wbGlzaCB5b3VyIGhhYml0IGdvYWxzIGZvciB0b2RheT9cIixcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIlllc1wiLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXHJcbiAgICB9KS50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgIGNoZWNrYm94LmZpbGxDaGVja2JveChzdWNjZXNzKTtcclxuICAgICAgdGhpcy5jaGVja2JveFN0YXRlVXBkYXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrYm94U3RhdGVVcGRhdGUoKSB7XHJcbiAgICBsZXQgbmV3U3RhdGUgPSAwO1xyXG4gICAgbGV0IG51bVNldEJveGVzID0gMDtcclxuICAgIF8uZm9yRWFjaCh0aGlzLmNoZWNrYm94ZXMsIChjKSA9PiB7XHJcbiAgICAgIGlmKGMuaXNDaGVja2VkKCkpIHtcclxuICAgICAgICBuZXdTdGF0ZSsrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGMuaXNTZXQoKSkge1xyXG4gICAgICAgIG51bVNldEJveGVzKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmKG51bVNldEJveGVzID4gNikge1xyXG4gICAgICB0aGlzLmVuZFdlZWsobmV3U3RhdGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRJbWFnZSgpIHtcclxuICAgIHRoaXMuaW1hZ2UgPSBcIn4vaW1hZ2VzL2hhYmJhamV0XCIgKyB0aGlzLnN0YXRlSW5kZXggKyBcIl9cIiArIHRoaXMuZnJhbWVJbmRleCArIFwiLnBuZ1wiO1xyXG4gIH1cclxuXHJcbiAgc2V0U3RhdGUobmV3U3RhdGU6IG51bWJlcikge1xyXG4gICAgdGhpcy5zdGF0ZUluZGV4ID0gbmV3U3RhdGU7XHJcbiAgICB0aGlzLnNldEltYWdlKCk7XHJcbiAgfVxyXG5cclxuICBlbmRXZWVrKHN1Y2Nlc3NlczogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmJ1ZGdldC51cGRhdGVUb3RhbChzdWNjZXNzZXMpO1xyXG4gICAgXy5mb3JFYWNoKHRoaXMuY2hlY2tib3hlcywgKGMpID0+IHtcclxuICAgICAgYy5yZXNldCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKDApO1xyXG4gIH1cclxuXHJcbn0iXX0=