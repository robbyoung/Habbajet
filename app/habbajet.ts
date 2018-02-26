import { CheckboxBinding } from "./checkbox";
import * as _ from 'lodash';
import * as Dialogs from 'ui/dialogs';
import { BudgetBinding } from "./budget";
import { FrameCounts } from "./frame-counts";

export class HabbajetBinding {
  private state: number;
  private frame: number;
  private action: string;
  public image: string;
  public checkboxes: CheckboxBinding[];
  public activeDay: CheckboxBinding;
  public animating: boolean;
  public animationID: number;

  public transforming: boolean;
  private acting: boolean;

  constructor(private budget: BudgetBinding, private saveObject: any,
      private index: number, public name: string, isNew: boolean,
      private frames: FrameCounts, public value: string) {
    
    this.checkboxes = [
      new CheckboxBinding("Sunday", saveObject, index, isNew),
      new CheckboxBinding("Monday", saveObject, index, isNew),
      new CheckboxBinding("Tuesday", saveObject, index, isNew),
      new CheckboxBinding("Wednesday", saveObject, index, isNew),
      new CheckboxBinding("Thursday", saveObject, index, isNew),
      new CheckboxBinding("Friday", saveObject, index, isNew),
      new CheckboxBinding("Saturday", saveObject, index, isNew)
    ];
    this.acting = false;
    this. transforming = false;
    this.action = 'i';
    this.frame = 0;
    if(isNew) {
      this.state = 0;
      this.saveData();
    } else {
      this.value = saveObject.getString("h" + this.index + "value")
      this.name = saveObject.getString("h" + this.index + "name");
      this.state = saveObject.getNumber("h" + this.index + "stateIndex");
    }
    this.setActiveDay();
    this.setState(this.state);
  }

  dailyUpdate(success: boolean) {
    if(!this.isBusy()) {
      this.activeDay.fillCheckbox(success);
      this.checkboxStateUpdate();
      this.saveData();
    }
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
    this.setActiveDay();
  }

  setImage() {
    this.image = "~/images/h" + this.state + "/" + this.action + this.frame + ".png";
    // console.log("image changed to: " + this.image);
  }

  animate() {
      if(this.frames.exists(this.state, this.frame, this.action)) {
        this.setImage();
      } else {
        this.makeIdle();
      }
      this.frame++;
  }

  makeIdle() {
    this.resetBusiness();
    this.action = 'i';
    this.restartAnimation();
  }

  restartAnimation() {
    clearInterval(this.animationID);
    this.frame = 0;
    this.animationID = setInterval(() => {
      this.animate();
    }, 100);
  }

  setState(newState: number) {
    const oldState = this.state;
    this.state = newState;
    if(newState !== oldState) {
      this.transform();
    } else {
      this.makeIdle();
    }
  }

  endWeek(successes: number) {
    this.budget.updateTotal(successes, this.value);
    _.forEach(this.checkboxes, (c) => {
      c.reset();
    });
    this.setState(0);
  }

  setActiveDay() {
    for(let i = 0; i < this.checkboxes.length; i++) {
      if (!this.checkboxes[i].isSet()) {
        this.activeDay = this.checkboxes[i];
        return;
      }
    }
  }

  saveData() {
    this.saveObject.setString("h" + this.index + "value", this.value);
    this.saveObject.setString("h" + this.index + "name", this.name);
    this.saveObject.setNumber("h" + this.index + "stateIndex", this.state);
  }

  transform() {
    this.transforming = true;
    this.action = 't';
    this.restartAnimation();
  }

  act() {
    if (this.isBusy()) {
      return;
    }
    this.transforming = false;
    const actionType = Math.random() * 2
    if(actionType < 1 && this.frames.exists(this.state, 0, 'a')) {
      this.action = 'a';
    } else if(this.frames.exists(this.state, 0, 'b')) {
      this.action = 'b';
    }
    this.restartAnimation();
  }

  resetBusiness() {
    this.acting = false;
    this.transforming = false;
  }

  isBusy() {
    return this.acting || this.transforming;
  }

  update(newName: string, newValue: string) {
    this.name = newName;
    this.value = newValue;
  }

  updateIndex(newIndex: number) {
    this.deleteData();
    this.index = newIndex;
    this.saveData();
  }

  deleteData() {
    this.saveObject.remove("h" + this.index + "value");
    this.saveObject.remove("h" + this.index + "name");
    this.saveObject.remove("h" + this.index + "stateIndex");
  }
}