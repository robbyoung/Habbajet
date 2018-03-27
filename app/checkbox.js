"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckboxState;
(function (CheckboxState) {
    CheckboxState[CheckboxState["NEUTRAL"] = 0] = "NEUTRAL";
    CheckboxState[CheckboxState["POSITIVE"] = 1] = "POSITIVE";
    CheckboxState[CheckboxState["NEGATIVE"] = 2] = "NEGATIVE";
})(CheckboxState || (CheckboxState = {}));
var CheckboxBinding = /** @class */ (function () {
    function CheckboxBinding(saveObject, index, isNew, weekday) {
        this.saveObject = saveObject;
        this.index = index;
        this.weekday = weekday;
        if (isNew) {
            this.state = CheckboxState.NEUTRAL;
        }
        else {
            this.state = this.saveObject.getNumber(this.weekday + "" + this.index);
            this.time = this.saveObject.getNumber(this.weekday + "" + this.index + "t");
        }
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
        this.saveData();
    };
    CheckboxBinding.prototype.isChecked = function () {
        return this.state === CheckboxState.POSITIVE;
    };
    CheckboxBinding.prototype.isSet = function () {
        return this.state !== CheckboxState.NEUTRAL;
    };
    CheckboxBinding.prototype.fillCheckbox = function (success) {
        this.state = success ? CheckboxState.POSITIVE : CheckboxState.NEGATIVE;
        this.setImage();
    };
    CheckboxBinding.prototype.reset = function () {
        this.state = CheckboxState.NEUTRAL;
        this.saveData();
        this.setImage();
    };
    CheckboxBinding.prototype.saveData = function () {
        this.saveObject.setNumber(this.weekday + "" + this.index, this.state);
        if (this.time !== undefined) {
            this.saveObject.setNumber(this.weekday + "" + this.index + "t", this.time);
        }
    };
    CheckboxBinding.prototype.clearData = function () {
        this.saveObject.remove(this.weekday + "" + this.index);
        this.saveObject.remove(this.weekday + "" + this.index + "t");
    };
    CheckboxBinding.prototype.changeIndex = function (newIndex) {
        this.clearData();
        this.index = newIndex;
        this.saveData();
    };
    CheckboxBinding.prototype.setTime = function (title, time) {
        this.title = title;
        this.time = time;
        this.saveData();
    };
    return CheckboxBinding;
}());
exports.CheckboxBinding = CheckboxBinding;
