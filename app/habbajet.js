"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkbox_1 = require("./checkbox");
var _ = require("lodash");
var Moment = require("moment");
var HabbajetBinding = /** @class */ (function () {
    function HabbajetBinding(budget, saveObject, index, name, isNew, frames, value, factor, slack) {
        this.budget = budget;
        this.saveObject = saveObject;
        this.index = index;
        this.name = name;
        this.frames = frames;
        this.value = value;
        this.factor = factor;
        this.slack = slack;
        this.checkboxes = [
            new checkbox_1.CheckboxBinding(saveObject, index, isNew, 0),
            new checkbox_1.CheckboxBinding(saveObject, index, isNew, 1),
            new checkbox_1.CheckboxBinding(saveObject, index, isNew, 2),
            new checkbox_1.CheckboxBinding(saveObject, index, isNew, 3),
            new checkbox_1.CheckboxBinding(saveObject, index, isNew, 4),
            new checkbox_1.CheckboxBinding(saveObject, index, isNew, 5),
            new checkbox_1.CheckboxBinding(saveObject, index, isNew, 6)
        ];
        this.transforming = false;
        this.action = 'i';
        this.frame = 0;
        if (isNew) {
            this.state = 0;
            this.saveData();
        }
        else {
            this.value = saveObject.getString("h" + this.index + "value");
            this.name = saveObject.getString("h" + this.index + "name");
            this.state = saveObject.getNumber("h" + this.index + "stateIndex");
            this.factor = saveObject.getNumber("h" + this.index + "factor");
            this.slack = saveObject.getNumber("h" + this.index + "slack");
        }
        this.setState(this.state);
        this.setCheckboxTimes(isNew);
    }
    HabbajetBinding.prototype.dailyUpdate = function (success) {
        if (!this.activeDay.isSet()) {
            this.activeDay.fillCheckbox(success);
            this.checkboxStateUpdate();
            this.locked = true;
            this.saveData();
        }
    };
    HabbajetBinding.prototype.checkboxStateUpdate = function () {
        var newState = 0;
        _.forEach(this.checkboxes, function (c) {
            if (c.isChecked()) {
                newState++;
            }
        });
        if (this.activeDay.time === this.checkboxes[6].time) {
            this.endWeek(newState);
        }
        else {
            this.setState(newState);
        }
    };
    HabbajetBinding.prototype.setImage = function () {
        this.image = "~/images/h" + this.state + "/" + this.action + this.frame + ".png";
        // console.log("image changed to: " + this.image);
    };
    HabbajetBinding.prototype.animate = function () {
        if (this.frames.exists(this.state, this.frame, this.action)) {
            this.setImage();
        }
        else {
            this.makeIdle();
        }
        this.frame++;
    };
    HabbajetBinding.prototype.makeIdle = function () {
        this.resetBusiness();
        this.action = 'i';
        this.restartAnimation();
    };
    HabbajetBinding.prototype.restartAnimation = function () {
        var _this = this;
        clearInterval(this.animationID);
        this.frame = 0;
        this.animationID = setInterval(function () {
            _this.animate();
        }, 100);
    };
    HabbajetBinding.prototype.setState = function (newState) {
        var oldState = this.state;
        this.state = newState;
        if (newState !== oldState) {
            this.transform();
        }
        else {
            this.makeIdle();
        }
    };
    HabbajetBinding.prototype.endWeek = function (successes) {
        this.budget.updateTotal(successes, this.value, this.factor, this.slack);
        this.setState(0);
    };
    HabbajetBinding.prototype.saveData = function () {
        this.saveObject.setString("h" + this.index + "value", this.value);
        this.saveObject.setString("h" + this.index + "name", this.name);
        this.saveObject.setNumber("h" + this.index + "stateIndex", this.state);
        this.saveObject.setNumber("h" + this.index + "factor", this.factor);
        this.saveObject.setNumber("h" + this.index + "slack", this.slack);
    };
    HabbajetBinding.prototype.transform = function () {
        this.transforming = true;
        this.action = 't';
        this.restartAnimation();
    };
    HabbajetBinding.prototype.act = function () {
        if (this.isBusy()) {
            return;
        }
        this.transforming = false;
        var actionType = Math.random() * 2;
        if (actionType < 1 && this.frames.exists(this.state, 0, 'a')) {
            this.action = 'a';
        }
        else if (this.frames.exists(this.state, 0, 'b')) {
            this.action = 'b';
        }
        this.restartAnimation();
    };
    HabbajetBinding.prototype.resetBusiness = function () {
        this.transforming = false;
    };
    HabbajetBinding.prototype.isBusy = function () {
        return this.transforming;
    };
    HabbajetBinding.prototype.update = function (newName, newValue) {
        this.name = newName;
        this.value = newValue;
    };
    HabbajetBinding.prototype.updateIndex = function (newIndex) {
        this.deleteData();
        this.index = newIndex;
        this.saveData();
        this.changeCheckboxIndices();
    };
    HabbajetBinding.prototype.deleteData = function () {
        this.saveObject.remove("h" + this.index + "value");
        this.saveObject.remove("h" + this.index + "name");
        this.saveObject.remove("h" + this.index + "stateIndex");
        this.saveObject.remove("h" + this.index + "factor");
        this.saveObject.remove("h" + this.index + "slack");
    };
    HabbajetBinding.prototype.setCheckboxTimes = function (isNew) {
        var today = Moment().startOf('week').subtract(1, 'days');
        if (!isNew && this.checkboxes[6].time < today.valueOf()) {
            if (!this.checkboxes[6].isSet()) {
                var numChecked_1 = 0;
                _.forEach(this.checkboxes, function (c) {
                    if (c.isChecked()) {
                        numChecked_1++;
                    }
                });
                this.state = 0;
                this.endWeek(numChecked_1);
            }
            _.forEach(this.checkboxes, function (c) {
                c.reset();
            });
        }
        for (var i = 0; i < 7; i++) {
            this.checkboxes[i].setTime(today.add(1, 'days').format('dddd Do MMM'), today.valueOf());
            if (this.checkboxes[i].time < Moment().endOf('day').valueOf()) {
                this.activeDay = this.checkboxes[i];
            }
        }
        this.locked = this.activeDay.isSet();
    };
    HabbajetBinding.prototype.changeCheckboxIndices = function () {
        for (var i = 0; i < 7; i++) {
            this.checkboxes[i].changeIndex(this.index);
        }
    };
    HabbajetBinding.prototype.updateTabText = function (maxChars) {
        if (this.name.length > maxChars) {
            this.tabName = this.name.substring(0, maxChars);
        }
        else {
            this.tabName = this.name;
        }
    };
    HabbajetBinding.prototype.switchDay = function (index) {
        this.activeDay = this.checkboxes[index];
        this.locked = this.activeDay.isSet() || this.checkboxes[6].isSet();
    };
    return HabbajetBinding;
}());
exports.HabbajetBinding = HabbajetBinding;
