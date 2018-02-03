import { Component, NgModule } from "@angular/core";
import { HabbajetBinding } from "./habbajet";
import { CheckboxBinding } from "./checkbox";
import * as _ from 'lodash';


@Component({
  selector: "my-app",
  templateUrl: "./habbajet.html",
})

export class AppComponent {
  habbajet = new HabbajetBinding();

  onCheckboxTap(args) {
    this.habbajet.checkboxStateUpdate(args.index);
  }
}
