import { Component, NgModule, OnInit } from "@angular/core";
import { HabbajetBinding } from "./habbajet";
import { CheckboxBinding } from "./checkbox";
import { BudgetBinding } from "./budget";
import * as _ from 'lodash';
import * as Dialogs from 'ui/dialogs';
import { FrameCounts } from "./frame-counts";

@Component({
  selector: "my-app",
  templateUrl: "./habbajet.html",
})

export class AppComponent {
  public habbajetList: HabbajetBinding[];
  public habbajet: HabbajetBinding;
  public habbajetIndex: number;
  public budget: BudgetBinding;
  public saveObject: any;
  public tabWidth: number;
  public frames: FrameCounts;
  public newHabbajetName: string;
  public newHabbajetValue: string;

  constructor() {
    this.saveObject = require("application-settings");
    this.budget = new BudgetBinding(this.saveObject);
    this.frames = new FrameCounts();
    this.habbajetList =[];
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
        this.habbajetList.push(new HabbajetBinding(this.budget, this.saveObject, i, "", false, this.frames));
      }
      if(habbajetCount > 0) {
        this.habbajetIndex = 0;
        this.habbajet = this.habbajetList[this.habbajetIndex];
      }
    }
  }

  newHabbajet() {
    if(this.isValidName() && this.isValidValue()) {
      this.habbajetIndex = this.habbajetList.length;
      this.habbajetList.push(new HabbajetBinding(this.budget, this.saveObject,
          this.habbajetIndex, this.newHabbajetName, true, this.frames));
      this.habbajet = this.habbajetList[this.habbajetIndex];
      this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
    }
  }

  selectHabbajet(index: number) {
    if (this.habbajetList.length > index) {
      this.habbajetIndex = index;
      this.habbajet = this.habbajetList[this.habbajetIndex];
    }
  }

  onCheckboxTap(args) {
    this.habbajet.dailyUpdate(args.index);
  }

  onPurchaseTap(args) {
    this.budget.makePurchase();
  }

  check() {
    this.habbajet.dailyUpdate(true);
  }

  cross() {
    this.habbajet.dailyUpdate(false);
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
}
