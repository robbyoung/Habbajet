import { Component, NgModule, OnInit } from "@angular/core";
import { HabbajetBinding } from "./habbajet";
import { CheckboxBinding } from "./checkbox";
import { BudgetBinding } from "./budget";
import * as _ from 'lodash';
import * as Dialogs from 'ui/dialogs';
import { TextField } from "ui/text-field";
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
  public newHabbajetName: string;
  public newHabbajetValue: string;
  public date: string;
  public tempHabbajet;
  public editing;

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
        this.habbajetList.push(new HabbajetBinding(this.budget, this.saveObject, i, "", false, this.frames, ""));
      }
      if(habbajetCount > 0) {
        this.habbajetIndex = 0;
        this.habbajet = this.habbajetList[this.habbajetIndex];
      }
    }
    this.habbajetCount = this.habbajetList.length + 1;
  }

  newHabbajet() {
    if(this.isValidName() && this.isValidValue()) {
      this.habbajetIndex = this.habbajetList.length;
      this.habbajetList.push(new HabbajetBinding(this.budget, this.saveObject,
          this.habbajetIndex, this.newHabbajetName, true, this.frames, this.newHabbajetValue));
      this.habbajet = this.habbajetList[this.habbajetIndex];
      this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
      this.habbajetCount = this.habbajetList.length + 1;
      this.newHabbajetName = '';
      this.newHabbajetValue = '';
    }
  }

  selectHabbajet(index: number) {
    if (this.habbajetList.length > index) {
      this.habbajetIndex = index;
      this.habbajet = this.habbajetList[this.habbajetIndex];
    }
  }

  onNewHabbajetTap() {
    this.habbajet = undefined;
  }

  onCheckboxTap(args) {
    this.habbajet.dailyUpdate(args.index);
  }

  onPurchaseTap(args) {
    this.budget.makePurchase();
  }

  check() {
    if(this.editing) {
      this.editing = false;
      this.habbajet.update(this.newHabbajetName, this.newHabbajetValue);
      this.newHabbajetName = '';
      this.newHabbajetValue = '';
    } else {
      this.habbajet.dailyUpdate(true);
    }
    
  }

  cross() {
    if(this.editing) {
      this.editing = false;
      this.newHabbajetName = '';
      this.newHabbajetValue = '';
    } else {
      this.habbajet.dailyUpdate(false);
    }
  }

  onImageTap() {
    this.habbajet.act();
  }

  isValidName(): boolean {
    return this.newHabbajetName.length > 0;
  }

  isValidValue(): boolean {
    const value = _.toNumber(this.newHabbajetValue);
    return isFinite(value) && value > 0;
  }

  nameChange(args) {
    let textField = <TextField>args.object;
    this.newHabbajetName = textField.text;
  }

  valueChange(args) {
    let textField = <TextField>args.object;
    this.newHabbajetValue = textField.text;
  }

  onEditTap() {
    this.editing = true;
    this.newHabbajetName = this.habbajet.name;
    this.newHabbajetValue = this.habbajet.value;
  }

  onDeleteTap() {
    this.editing = false;
    this.habbajet.deleteData();
    this.habbajetList.splice(this.habbajetIndex);
    this.newHabbajetName = '';
    this.newHabbajetValue = '';
    this.habbajetCount--;
    for(let i = this.habbajetIndex; i < this.habbajetList.length; i++) {
      this.habbajetList[i].updateIndex(i);
    }
    this.habbajetIndex = 0;
    if(this.habbajetList.length > 0) {
      this.habbajet = this.habbajetList[0];
    } else {
      this.habbajet = undefined;
    }
  }
}
