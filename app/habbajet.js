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
    HabbajetBinding.prototype.saveData = function () {
        this.saveObject.setString("h" + this.index + "name", this.name);
        this.saveObject.setNumber("h" + this.index + "stateIndex", this.stateIndex);
    };
    return HabbajetBinding;
}());
exports.HabbajetBinding = HabbajetBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDBCQUE0QjtBQUM1QixvQ0FBc0M7QUFHdEM7SUFNRSx5QkFBb0IsTUFBcUIsRUFBVSxVQUFlLEVBQ3RELEtBQWEsRUFBUyxJQUFZLEVBQUUsS0FBYztRQUQxQyxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUN0RCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUU1QyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLElBQUksMEJBQWUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdkQsSUFBSSwwQkFBZSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN2RCxJQUFJLDBCQUFlLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3hELElBQUksMEJBQWUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDMUQsSUFBSSwwQkFBZSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN6RCxJQUFJLDBCQUFlLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3ZELElBQUksMEJBQWUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDMUQsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVCxJQUFJLENB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QUFDO1lBQzNCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUgsc0JBQUM7QUFBRCxDQUFDLEFBekZELElBeUZDO0FBekZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tib3hCaW5kaW5nIH0gZnJvbSBcIi4vY2hlY2tib3hcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnO1xyXG5pbXBvcnQgeyBCdWRnZXRCaW5kaW5nIH0gZnJvbSBcIi4vYnVkZ2V0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRCaW5kaW5nIHtcclxuICBwcml2YXRlIHN0YXRlSW5kZXg6IG51bWJlcjtcclxuICBwcml2YXRlIGZyYW1lSW5kZXg6IG51bWJlcjtcclxuICBwdWJsaWMgaW1hZ2U6IHN0cmluZztcclxuICBwdWJsaWMgY2hlY2tib3hlczogQ2hlY2tib3hCaW5kaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYnVkZ2V0OiBCdWRnZXRCaW5kaW5nLCBwcml2YXRlIHNhdmVPYmplY3Q6IGFueSxcclxuICAgICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyLCBwdWJsaWMgbmFtZTogc3RyaW5nLCBpc05ldzogYm9vbGVhbikge1xyXG4gICAgXHJcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBbXHJcbiAgICAgIG5ldyBDaGVja2JveEJpbmRpbmcoXCJTdW5kYXlcIiwgc2F2ZU9iamVjdCwgaW5kZXgsIGlzTmV3KSxcclxuICAgICAgbmV3IENoZWNrYm94QmluZGluZyhcIk1vbmRheVwiLCBzYXZlT2JqZWN0LCBpbmRleCwgaXNOZXcpLFxyXG4gICAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKFwiVHVlc2RheVwiLCBzYXZlT2JqZWN0LCBpbmRleCwgaXNOZXcpLFxyXG4gICAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKFwiV2VkbmVzZGF5XCIsIHNhdmVPYmplY3QsIGluZGV4LCBpc05ldyksXHJcbiAgICAgIG5ldyBDaGVja2JveEJpbmRpbmcoXCJUaHVyc2RheVwiLCBzYXZlT2JqZWN0LCBpbmRleCwgaXNOZXcpLFxyXG4gICAgICBuZXcgQ2hlY2tib3hCaW5kaW5nKFwiRnJpZGF5XCIsIHNhdmVPYmplY3QsIGluZGV4LCBpc05ldyksXHJcbiAgICAgIG5ldyBDaGVja2JveEJpbmRpbmcoXCJTYXR1cmRheVwiLCBzYXZlT2JqZWN0LCBpbmRleCwgaXNOZXcpXHJcbiAgICBdO1xyXG4gICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcclxuICAgIGlmKGlzTmV3KSB7XHJcbiAgICAgIHRoaXMuc3RhdGVJbmRleCA9IDA7XHJcbiAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IHNhdmVPYmplY3QuZ2V0U3RyaW5nKFwiaFwiICsgdGhpcy5pbmRleCArIFwibmFtZVwiKTtcclxuICAgICAgdGhpcy5zdGF0ZUluZGV4ID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoXCJoXCIgKyB0aGlzLmluZGV4ICsgXCJzdGF0ZUluZGV4XCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRJbWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGFpbHlVcGRhdGUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSB0aGlzLmNoZWNrYm94ZXNbaW5kZXhdO1xyXG4gICAgaWYoY2hlY2tib3guaXNTZXQoKSkgcmV0dXJuO1xyXG4gICAgRGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgdGl0bGU6IGNoZWNrYm94LnRpdGxlICsgJycsXHJcbiAgICAgIG1lc3NhZ2U6IFwiRGlkIHlvdSBhY2NvbXBsaXNoIHlvdXIgaGFiaXQgZ29hbHMgZm9yIHRvZGF5P1wiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcclxuICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICB9KS50aGVuKChzdWNjZXNzKSA9PiB7XHJcbiAgICAgIGlmKHN1Y2Nlc3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNoZWNrYm94LmZpbGxDaGVja2JveChzdWNjZXNzKTtcclxuICAgICAgICB0aGlzLmNoZWNrYm94U3RhdGVVcGRhdGUoKTtcclxuICAgICAgICB0aGlzLnNhdmVEYXRhKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tib3hTdGF0ZVVwZGF0ZSgpIHtcclxuICAgIGxldCBuZXdTdGF0ZSA9IDA7XHJcbiAgICBsZXQgbnVtU2V0Qm94ZXMgPSAwO1xyXG4gICAgXy5mb3JFYWNoKHRoaXMuY2hlY2tib3hlcywgKGMpID0+IHtcclxuICAgICAgaWYoYy5pc0NoZWNrZWQoKSkge1xyXG4gICAgICAgIG5ld1N0YXRlKys7XHJcbiAgICAgIH1cclxuICAgICAgaWYoYy5pc1NldCgpKSB7XHJcbiAgICAgICAgbnVtU2V0Qm94ZXMrKztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYobnVtU2V0Qm94ZXMgPiA2KSB7XHJcbiAgICAgIHRoaXMuZW5kV2VlayhuZXdTdGF0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEltYWdlKCkge1xyXG4gICAgdGhpcy5pbWFnZSA9IFwifi9pbWFnZXMvaGFiYmFqZXRcIiArIHRoaXMuc3RhdGVJbmRleCArIFwiX1wiICsgdGhpcy5mcmFtZUluZGV4ICsgXCIucG5nXCI7XHJcbiAgICBjb25zb2xlLmxvZyhcImltYWdlIGNoYW5nZWQgdG86IFwiICsgdGhpcy5pbWFnZSk7XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0ZShuZXdTdGF0ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN0YXRlSW5kZXggPSBuZXdTdGF0ZTtcclxuICAgIHRoaXMuc2V0SW1hZ2UoKTtcclxuICB9XHJcblxyXG4gIGVuZFdlZWsoc3VjY2Vzc2VzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuYnVkZ2V0LnVwZGF0ZVRvdGFsKHN1Y2Nlc3Nlcyk7XHJcbiAgICBfLmZvckVhY2godGhpcy5jaGVja2JveGVzLCAoYykgPT4ge1xyXG4gICAgICBjLnJlc2V0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoMCk7XHJcbiAgfVxyXG5cclxuICBzYXZlRGF0YSgpIHtcclxuICAgIHRoaXMuc2F2ZU9iamVjdC5zZXRTdHJpbmcoXCJoXCIgKyB0aGlzLmluZGV4ICsgXCJuYW1lXCIsIHRoaXMubmFtZSk7XHJcbiAgICB0aGlzLnNhdmVPYmplY3Quc2V0TnVtYmVyKFwiaFwiICsgdGhpcy5pbmRleCArIFwic3RhdGVJbmRleFwiLCB0aGlzLnN0YXRlSW5kZXgpO1xyXG4gIH1cclxuXHJcbn0iXX0=