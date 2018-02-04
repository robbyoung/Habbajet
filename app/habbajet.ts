import { CheckboxBinding } from "./checkbox";
import * as _ from 'lodash';
import * as Dialogs from 'ui/dialogs';
import { BudgetBinding } from "./budget";

export class HabbajetBinding {
  private stateIndex: number;
  private frameIndex: number;
  public image: string;
  public checkboxes: CheckboxBinding[];

  constructor(private budget: BudgetBinding, private saveObject: any,
      private index: number, public name: string, isNew: boolean) {
    
    this.checkboxes = [
      new CheckboxBinding("Sunday", saveObject, index, isNew),
      new CheckboxBinding("Monday", saveObject, index, isNew),
      new CheckboxBinding("Tuesday", saveObject, index, isNew),
      new CheckboxBinding("Wednesday", saveObject, index, isNew),
      new CheckboxBinding("Thursday", saveObject, index, isNew),
      new CheckboxBinding("Friday", saveObject, index, isNew),
      new CheckboxBinding("Saturday", saveObject, index, isNew)
    ];
    this.frameIndex = 0;
    if(isNew) {
      this.stateIndex = 0;
      this.saveData();
    } else {
      this.name = saveObject.getString("h" + this.index + "name");
      this.stateIndex = saveObject.getNumber("h" + this.index + "stateIndex");
    }
    this.setImage();
  }

  async dailyUpdate(index: number) {
    const checkbox = this.checkboxes[index];
    if(checkbox.isSet()) return;
    Dialogs.confirm({
      title: checkbox.title + '',
      message: "Did you accomplish your habit goals for today?",
      okButtonText: "Yes",
      cancelButtonText: "No",
      neutralButtonText: "Cancel",
    }).then((success) => {
      if(success !== undefined) {
        checkbox.fillCheckbox(success);
        this.checkboxStateUpdate();
        this.saveData();
      }
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

  saveData() {
    this.saveObject.setString("h" + this.index + "name", this.name);
    this.stateIndex = this.saveObject.setNumber("h" + this.index + "stateIndex", this.stateIndex);
  }

}