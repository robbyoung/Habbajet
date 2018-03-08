import { Component, NgModule, OnInit } from "@angular/core";
import { HabbajetBinding } from "./habbajet";
import { CheckboxBinding } from "./checkbox";
import { BudgetBinding } from "./budget";
import * as _ from 'lodash';
import * as Dialogs from 'ui/dialogs';
import { TextField } from "ui/text-field";
import {Page} from "ui/page";
import frame = require("ui/frame");
import { FrameCounts } from "./frame-counts";

@Component({
  selector: "my-app",
  templateUrl: "./habbajet.html",
})

export class AppComponent {
  public habbajetList: HabbajetBinding[];
  public habbajet: HabbajetBinding;
  public habbajetIndex: number;
  public habbajetCount: number;
  public budget: BudgetBinding;
  public saveObject: any;
  public tabWidth: number;
  public frames: FrameCounts;
  public date: string;
  public columnWidths;
  public editing;

  public newHabbajetName: string;
  public newHabbajetValue: string;
  public newHabbajetFactor: string;
  public newHabbajetSlack: string;

  constructor() {
    this.saveObject = require("application-settings");
    this.budget = new BudgetBinding(this.saveObject);
    this.frames = new FrameCounts();
    this.habbajetList =[];
    this.editing = false;
    this.newHabbajetName="";
    this.newHabbajetValue="";
    this.loadSavedData();
  }

  loadSavedData() {
    const totalValue = this.saveObject.getNumber("total");
    if(totalValue !== undefined) {
      this.budget.setTotal(totalValue);
      const habbajetCount = this.saveObject.getNumber("habbajetCount");
      for(let i = 0; i < habbajetCount; i++) {
        this.habbajetList.push(new HabbajetBinding(this.budget, this.saveObject, i, "", false, this.frames, "", 0, 0));
      }
      if(habbajetCount > 0) {
        this.habbajetIndex = 0;
        this.habbajet = this.habbajetList[this.habbajetIndex];
      }
    }
    this.habbajetCount = this.habbajetList.length;
    this.setColumnWidths();
  }

  newHabbajet() {
    if(this.newFieldsValid()) {
      this.habbajetIndex = this.habbajetList.length;
      this.habbajetList.push(new HabbajetBinding(this.budget, this.saveObject,
          this.habbajetIndex, this.newHabbajetName, true, this.frames, this.newHabbajetValue,
          _.toNumber(this.newHabbajetFactor), _.toNumber(this.newHabbajetSlack)));
      this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
      this.habbajetCount = this.habbajetList.length;
      this.resetNewVariables();
      this.selectHabbajet(this.habbajetIndex, true);
    }
    this.setColumnWidths();
  }

  selectHabbajet(index: number, force?: boolean) {
    if ((index >= 0 && this.habbajetList.length > index) &&
        (this.habbajetIndex !== index || force || !this.habbajet)) {
      const habbajetDisplay = <Page>frame.topmost().currentPage.getViewById("habbajetDisplay");
      habbajetDisplay.animate({
          opacity: 0,
          duration: 200,
      })
      .then(() => {
        this.habbajetIndex = index;
        this.habbajet = this.habbajetList[this.habbajetIndex];
      })
      .then(() => {
        habbajetDisplay.animate({
          opacity: 1,
          duration: 200,
        });
      })
    }
  }

  onNewHabbajetTap() {
    if(this.habbajetCount < 6) {
      this.habbajet = undefined;
    }
  }

  onCheckboxTap(args) {
    this.habbajet.dailyUpdate(args.index);
  }

  onPurchaseTap(args) {
    this.budget.makePurchase();
  }

  onSwipe(args) {
    const direction = args.direction;
    if(direction === 1) {
      this.selectHabbajet(this.habbajetIndex - 1);
    } else if(direction === 2) {
      this.selectHabbajet(this.habbajetIndex + 1);
    } else if(direction === 4) {
      this.onEditTap();
    } else if(direction === 8 && this.editing) {
      this.cross();
    }
  }

  check() {
    if(this.editing) {
      this.editing = false;
      this.habbajet.update(this.newHabbajetName, this.newHabbajetValue);
      this.resetNewVariables();
    } else {
      this.habbajet.dailyUpdate(true);
    }
    
  }

  cross() {
    if(this.editing) {
      this.editing = false;
      this.resetNewVariables();
    } else {
      this.habbajet.dailyUpdate(false);
    }
  }

  onImageTap() {
    this.habbajet.act();
  }

  onEditTap() {
    if(_.isNil(this.habbajet) || this.editing) return;
    this.editing = true;
    this.newHabbajetName = this.habbajet.name;
    this.newHabbajetValue = this.habbajet.value;
  }

  onDeleteTap() {
    this.editing = false;
    this.habbajet.deleteData();
    this.habbajetList = _.filter(this.habbajetList, (h) => {
      return h.index !== this.habbajetIndex;
    });
    this.resetNewVariables();
    this.habbajetCount--;
    for(let i = this.habbajetIndex; i < this.habbajetList.length; i++) {
      this.habbajetList[i].updateIndex(i);
    }
    this.habbajetIndex = 0;
    if(this.habbajetList.length > 0) {
      this.selectHabbajet(0, true);
    } else {
      this.habbajet = undefined;
    }
    this.setColumnWidths();
    this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
  }

  setColumnWidths() {
    switch(this.habbajetCount) {
      case 2: this.columnWidths = '*,140,140,0,0,0,0'; break;
      case 3: this.columnWidths = '*,93,93,94,0,0,0'; break;
      case 4: this.columnWidths = '*,70,70,70,70,0,0'; break;
      case 5: this.columnWidths = '*,56,56,56,56,56,0'; break;
      case 6: this.columnWidths = '*,46,46,47,46,46,47'; break;
      default: this.columnWidths = '*,280,0,0,0,0,0'; break;
    }
    this.updateTabText();
  }

  updateTabText() {
    let maxChars: number;
    switch(this.habbajetCount) {
      case 2: maxChars = 5; break;
      case 3: maxChars = 3; break;
      case 4: maxChars = 2; break;
      case 5: maxChars = 1; break;
      case 6: maxChars = 1; break;
      default: maxChars = 10; break;
    }
    _.each(this.habbajetList, (h) => {
      h.updateTabText(maxChars);
    })
  }

  newFieldsValid(): boolean {
    return this.isValidName() && this.isValidValue() && this.isValidFactor() && this.isValidSlack();
  }

  isValidName(): boolean {
    return this.newHabbajetName.length > 0 &&
     this.newHabbajetName.length < 15;
  }

  isValidValue(): boolean {
    const value = _.toNumber(this.newHabbajetValue);
    return isFinite(value) && value > 0 && value <= 1000;
  }

  isValidFactor(): boolean {
    const value = _.toNumber(this.newHabbajetFactor);
    return isFinite(value) && value > 1 && value <= 100;
  }

  isValidSlack(): boolean {
    const value = _.toNumber(this.newHabbajetSlack);
    return isFinite(value) && value >= 0 && value <= 6;
  }

  nameChange(args) {
    let textField = <TextField>args.object;
    this.newHabbajetName = textField.text;
  }

  valueChange(args) {
    let textField = <TextField>args.object;
    this.newHabbajetValue = textField.text;
  }

  factorChange(args) {
    let textField = <TextField>args.object;
    this.newHabbajetFactor = textField.text;
  }

  slackChange(args) {
    let textField = <TextField>args.object;
    this.newHabbajetSlack = textField.text;
  }

  resetNewVariables() {
    this.newHabbajetName = '';
    this.newHabbajetValue = '';
    this.newHabbajetFactor = '';
    this.newHabbajetSlack = '';
  }
}
