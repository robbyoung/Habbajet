import { CheckboxBinding } from "./checkbox";
import * as _ from 'lodash';
import * as Dialogs from 'ui/dialogs';
import { BudgetBinding } from "./budget";

export class HabbajetBinding {
  private stateIndex: number;
  private frameIndex: number;
  public image: string;
  public checkboxes: CheckboxBinding[];
  public budget: BudgetBinding;

  constructor(budget: BudgetBinding) {
    this.stateIndex = 0;
    this.frameIndex = 0;
    this.setImage();
    this.checkboxes = [
      new CheckboxBinding("Sunday"),
      new CheckboxBinding("Monday"),
      new CheckboxBinding("Tuesday"),
      new CheckboxBinding("Wednesday"),
      new CheckboxBinding("Thursday"),
      new CheckboxBinding("Friday"),
      new CheckboxBinding("Saturday")
    ];
    this.budget = budget;
  }

  async dailyUpdate(index: number) {
    const checkbox = this.checkboxes[index];
    if(checkbox.isSet()) return;
    Dialogs.confirm({
      title: checkbox.title + '',
      message: "Did you accomplish your habit goals for today?",
      okButtonText: "Yes",
      cancelButtonText: "No",
    }).then((success) => {
      checkbox.fillCheckbox(success);
      this.checkboxStateUpdate();
    });
  }

  checkboxStateUpdate() {
    let newState = 0;
    let numSetBoxes = 0;
    _.forEach(this.checkboxes, (c) => {
      if(c.isChecked()) {
        newState++;
      }
      if(c.isSet()) {
        numSetBoxes++;
      }
    });

    if(numSetBoxes > 6) {
      this.endWeek(newState);
    } else {
      this.setState(newState);
    }
  }

  setImage() {
    this.image = "~/images/habbajet" + this.stateIndex + "_" + this.frameIndex + ".png";
  }

  setState(newState: number) {
    this.stateIndex = newState;
    this.setImage();
  }

  endWeek(successes: number) {
    this.budget.updateTotal(successes);
    _.forEach(this.checkboxes, (c) => {
      c.reset();
    });
    this.setState(0);
  }

}