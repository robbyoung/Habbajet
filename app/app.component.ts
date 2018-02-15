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

  constructor() {
    this.saveObject = require("application-settings");
    this.budget = new BudgetBinding(this.saveObject);
    this.frames = new FrameCounts();
    this.habbajetList =[];
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
    let name: string;
    Dialogs.prompt({
      title: "Name the new Habbajet",
      okButtonText: "Confirm",
    }).then((result) => {
      name = result.text;
      this.habbajetIndex = this.habbajetList.length;
      this.habbajetList.push(new HabbajetBinding(this.budget, this.saveObject,
         this.habbajetIndex, name, true, this.frames));
      this.habbajet = this.habbajetList[this.habbajetIndex];
      this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
    });
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
}
