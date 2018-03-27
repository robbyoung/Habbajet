"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var habbajet_1 = require("./habbajet");
var budget_1 = require("./budget");
var _ = require("lodash");
var frame = require("ui/frame");
var frame_counts_1 = require("./frame-counts");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.saveObject = require("application-settings");
        this.budget = new budget_1.BudgetBinding(this.saveObject);
        this.frames = new frame_counts_1.FrameCounts();
        this.habbajetList = [];
        this.editing = false;
        this.newHabbajetName = "";
        this.newHabbajetValue = "";
        this.loadSavedData();
    }
    AppComponent.prototype.loadSavedData = function () {
        var totalValue = this.saveObject.getNumber("total");
        if (totalValue !== undefined) {
            this.budget.setTotal(totalValue);
            var habbajetCount = this.saveObject.getNumber("habbajetCount");
            for (var i = 0; i < habbajetCount; i++) {
                this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, i, "", false, this.frames, "", 0, 0));
            }
            if (habbajetCount > 0) {
                this.habbajetIndex = 0;
                this.habbajet = this.habbajetList[this.habbajetIndex];
            }
        }
        this.habbajetCount = this.habbajetList.length;
        this.setColumnWidths();
    };
    AppComponent.prototype.newHabbajet = function () {
        if (this.newFieldsValid()) {
            this.habbajetIndex = this.habbajetList.length;
            this.habbajetList.push(new habbajet_1.HabbajetBinding(this.budget, this.saveObject, this.habbajetIndex, this.newHabbajetName, true, this.frames, this.newHabbajetValue, _.toNumber(this.newHabbajetFactor), _.toNumber(this.newHabbajetSlack)));
            this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
            this.habbajetCount = this.habbajetList.length;
            this.resetNewVariables();
            this.selectHabbajet(this.habbajetIndex, true);
        }
        this.setColumnWidths();
    };
    AppComponent.prototype.selectHabbajet = function (index, force) {
        var _this = this;
        if ((index >= 0 && this.habbajetList.length > index) &&
            (this.habbajetIndex !== index || force || !this.habbajet)) {
            var habbajetDisplay_1 = frame.topmost().currentPage.getViewById("habbajetDisplay");
            habbajetDisplay_1.animate({
                opacity: 0,
                duration: 200,
            })
                .then(function () {
                _this.habbajetIndex = index;
                _this.habbajet = _this.habbajetList[_this.habbajetIndex];
            })
                .then(function () {
                habbajetDisplay_1.animate({
                    opacity: 1,
                    duration: 200,
                });
            });
        }
        else if (index === -1) {
            this.onNewHabbajetTap();
        }
    };
    AppComponent.prototype.onNewHabbajetTap = function () {
        if (this.habbajetCount < 6) {
            this.habbajet = undefined;
            this.habbajetIndex = -1;
        }
    };
    AppComponent.prototype.onCheckboxTap = function (args) {
        this.habbajet.dailyUpdate(args.index);
    };
    AppComponent.prototype.onPurchaseTap = function (args) {
        this.budget.makePurchase();
    };
    AppComponent.prototype.onSwipe = function (args) {
        var direction = args.direction;
        if (direction === 1) {
            this.selectHabbajet(this.habbajetIndex - 1);
        }
        else if (direction === 2) {
            this.selectHabbajet(this.habbajetIndex + 1);
        }
        else if (direction === 4) {
            this.onEditTap();
        }
        else if (direction === 8 && this.editing) {
            this.cross();
        }
    };
    AppComponent.prototype.check = function () {
        if (this.editing) {
            this.editing = false;
            this.habbajet.update(this.newHabbajetName, this.newHabbajetValue);
            this.resetNewVariables();
        }
        else {
            this.habbajet.dailyUpdate(true);
        }
    };
    AppComponent.prototype.cross = function () {
        if (this.editing) {
            this.editing = false;
            this.resetNewVariables();
        }
        else {
            this.habbajet.dailyUpdate(false);
        }
    };
    AppComponent.prototype.onImageTap = function () {
        this.habbajet.act();
    };
    AppComponent.prototype.onEditTap = function () {
        if (_.isNil(this.habbajet) || this.editing)
            return;
        this.editing = true;
        this.newHabbajetName = this.habbajet.name;
        this.newHabbajetValue = this.habbajet.value;
    };
    AppComponent.prototype.onDeleteTap = function () {
        var _this = this;
        this.editing = false;
        this.habbajet.deleteData();
        this.habbajetList = _.filter(this.habbajetList, function (h) {
            return h.index !== _this.habbajetIndex;
        });
        this.resetNewVariables();
        this.habbajetCount--;
        for (var i = this.habbajetIndex; i < this.habbajetList.length; i++) {
            this.habbajetList[i].updateIndex(i);
        }
        this.habbajetIndex = 0;
        if (this.habbajetList.length > 0) {
            this.selectHabbajet(0, true);
        }
        else {
            this.habbajet = undefined;
        }
        this.setColumnWidths();
        this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
    };
    AppComponent.prototype.setColumnWidths = function () {
        switch (this.habbajetCount) {
            case 2:
                this.columnWidths = '*,140,140,0,0,0,0';
                break;
            case 3:
                this.columnWidths = '*,93,93,94,0,0,0';
                break;
            case 4:
                this.columnWidths = '*,70,70,70,70,0,0';
                break;
            case 5:
                this.columnWidths = '*,56,56,56,56,56,0';
                break;
            case 6:
                this.columnWidths = '*,46,46,47,46,46,47';
                break;
            default:
                this.columnWidths = '*,280,0,0,0,0,0';
                break;
        }
        this.updateTabText();
    };
    AppComponent.prototype.updateTabText = function () {
        var maxChars;
        switch (this.habbajetCount) {
            case 2:
                maxChars = 5;
                break;
            case 3:
                maxChars = 4;
                break;
            case 4:
                maxChars = 3;
                break;
            case 5:
                maxChars = 2;
                break;
            case 6:
                maxChars = 1;
                break;
            default:
                maxChars = 10;
                break;
        }
        _.each(this.habbajetList, function (h) {
            h.updateTabText(maxChars);
        });
    };
    AppComponent.prototype.newFieldsValid = function () {
        var name = this.isValidName();
        var value = this.isValidValue();
        var factor = this.isValidFactor();
        var slack = this.isValidSlack();
        return name && value && factor && slack;
    };
    AppComponent.prototype.isValidName = function () {
        var valid = this.newHabbajetName.length > 0 &&
            this.newHabbajetName.length < 15;
        if (!valid) {
            frame.topmost().currentPage.getViewById("nameField").setInlineStyle('color: red');
        }
        return valid;
    };
    AppComponent.prototype.isValidValue = function () {
        var value = _.toNumber(this.newHabbajetValue);
        var valid = isFinite(value) && value > 0 && value <= 1000;
        if (!valid) {
            frame.topmost().currentPage.getViewById("valueField").setInlineStyle('color: red');
        }
        return valid;
    };
    AppComponent.prototype.isValidFactor = function () {
        var value = _.toNumber(this.newHabbajetFactor);
        var valid = isFinite(value) && value > 1 && value <= 100;
        if (!valid) {
            frame.topmost().currentPage.getViewById("factorField").setInlineStyle('color: red');
        }
        return valid;
    };
    AppComponent.prototype.isValidSlack = function () {
        var value = _.toNumber(this.newHabbajetSlack);
        var valid = isFinite(value) && value >= 0 && value <= 6;
        if (!valid) {
            frame.topmost().currentPage.getViewById("slackField").setInlineStyle('color: red');
        }
        return valid;
    };
    AppComponent.prototype.nameChange = function (args) {
        var textField = args.object;
        this.newHabbajetName = textField.text;
        frame.topmost().currentPage.getViewById("nameField").setInlineStyle('color: black');
    };
    AppComponent.prototype.valueChange = function (args) {
        var textField = args.object;
        this.newHabbajetValue = textField.text;
        frame.topmost().currentPage.getViewById("valueField").setInlineStyle('color: black');
    };
    AppComponent.prototype.factorChange = function (args) {
        var textField = args.object;
        this.newHabbajetFactor = textField.text;
        frame.topmost().currentPage.getViewById("factorField").setInlineStyle('color: black');
    };
    AppComponent.prototype.slackChange = function (args) {
        var textField = args.object;
        this.newHabbajetSlack = textField.text;
        frame.topmost().currentPage.getViewById("slackField").setInlineStyle('color: black');
    };
    AppComponent.prototype.resetNewVariables = function () {
        this.newHabbajetName = '';
        this.newHabbajetValue = '';
        this.newHabbajetFactor = '';
        this.newHabbajetSlack = '';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./habbajet.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
