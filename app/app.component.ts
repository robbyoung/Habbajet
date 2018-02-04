import { Component, NgModule } from "@angular/core";
import { HabbajetBinding } from "./habbajet";
import { CheckboxBinding } from "./checkbox";
import { BudgetBinding } from "./budget";
import * as _ from 'lodash';


@Component({
  selector: "my-app",
  templateUrl: "./habbajet.html",
})

export class AppComponent {
  budget = new BudgetBinding();
  habbajet = new HabbajetBinding(this.budget);

  onCheckboxTap(args) {
    this.habbajet.dailyUpdate(args.index);
  }
}
