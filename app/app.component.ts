import { Component, NgModule, OnInit } from "@angular/core";
import { HabbajetBinding } from "./habbajet";
import { CheckboxBinding } from "./checkbox";
import { BudgetBinding } from "./budget";
import * as _ from 'lodash';
import * as Dialogs from 'ui/dialogs';


@Component({
  selector: "my-app",
  templateUrl: "./habbajet.html",
})

export class AppComponent implements OnInit {
  public habbajetList: HabbajetBinding[];
  public habbajet: HabbajetBinding;
  public habbajetIndex: number;
  public budget: BudgetBinding;
  public saveObject: any;

  ngOnInit() {
    this.saveObject = require("application-settings");
    this.budget = new BudgetBinding(this.saveObject);
    this.habbajetList =[];
    this.loadSavedData();
  }

  loadSavedData() {
    const totalValue = this.saveObject.getNumber("total");
    if(totalValue !== undefined) {
      this.budget.setTotal(totalValue);
      const habbajetCount = this.saveObject.getNumber("habbajetCount");
      for(let i = 0; i < habbajetCount; i++) {
        this.habbajetList.push(new HabbajetBinding(this.budget, this.saveObject, i, "", false));
      }
    } else {
      const name = "First Habbajet";
      this.habbajetIndex = this.habbajetList.length;
      this.habbajetList.push(new HabbajetBinding(this.budget, this.saveObject,
         this.habbajetIndex, name, true));
      this.habbajet = this.habbajetList[this.habbajetIndex];
      this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
      // this.newHabbajet();
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
         this.habbajetIndex, name, true));
      this.habbajet = this.habbajetList[this.habbajetIndex];
      this.saveObject.setNumber("habbajetCount", this.habbajetList.length);
    });

    
  }

  nextHabbajet() {
    this.habbajetIndex = (this.habbajetIndex + 1) % this.habbajetList.length;
    this.habbajet = this.habbajetList[this.habbajetIndex];
  }

  onCheckboxTap(args) {
    this.habbajet.dailyUpdate(args.index);
  }
}
