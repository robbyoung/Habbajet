import { CheckboxBinding } from "./checkbox";
import * as _ from 'lodash';
import * as Dialogs from 'ui/dialogs';
import { BudgetBinding } from "./budget";
import { FrameCounts } from "./frame-counts";
import * as Moment from "moment";

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
  public locked: boolean;

  constructor(private budget: BudgetBinding, private saveObject: any,
      private index: number, public name: string, isNew: boolean,
      private frames: FrameCounts, public value: string) {
    
    this.checkboxes = [
      new CheckboxBinding(saveObject, index, isNew, 0),
      new CheckboxBinding(saveObject, index, isNew, 1),
      new CheckboxBinding(saveObject, index, isNew, 2),
      new CheckboxBinding(saveObject, index, isNew, 3),
      new CheckboxBinding(saveObject, index, isNew, 4),
      new CheckboxBinding(saveObject, index, isNew, 5),
      new CheckboxBinding(saveObject, index, isNew, 6)
    ];
    
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
    this.setState(this.state);
    this.setCheckboxTimes(isNew);
  }

  dailyUpdate(success: boolean) {
    if(!this.activeDay.isSet()) {
      this.activeDay.fillCheckbox(success);
      this.checkboxStateUpdate();
      this.locked = true;
      this.saveData();
    }
  }

  checkboxStateUpdate() {
    let newState = 0;
    _.forEach(this.checkboxes, (c) => {
      if(c.isChecked()) {
        newState++;
      }
    });

    if(this.activeDay.time === this.checkboxes[6].time) {
      this.endWeek(newState);
    } else {
      this.setState(newState);
    }
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
    this.setState(0);
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
    this.transforming = false;
  }

  isBusy() {
    return this.transforming;
  }

  update(newName: string, newValue: string) {
    this.name = newName;
    this.value = newValue;
  }

  updateIndex(newIndex: number) {
    this.deleteData();
    this.index = newIndex;
    this.saveData();
    this.changeCheckboxIndices();
  }

  deleteData() {
    this.saveObject.remove("h" + this.index + "value");
    this.saveObject.remove("h" + this.index + "name");
    this.saveObject.remove("h" + this.index + "stateIndex");
  }

  setCheckboxTimes(isNew: boolean) {
    let today = Moment().startOf('week').subtract(1, 'days');
    if(!isNew &&  this.checkboxes[6].time < today.valueOf()) {
      if(!this.checkboxes[6].isSet()) {
        let numChecked = 0;
        _.forEach(this.checkboxes, (c) => {
          if(c.isChecked()) {
            numChecked++;
          }
        });
        this.state = 0;
        this.endWeek(numChecked);
      }

      _.forEach(this.checkboxes, (c) => {
        c.reset();
      });
    }
    for (let i = 0; i < 7; i++) {
      this.checkboxes[i].setTime(today.add(1, 'days').format('dddd Do MMM'), today.valueOf());
      if(this.checkboxes[i].time < Moment().endOf('day').valueOf()) {
        this.activeDay = this.checkboxes[i];
      }
    }
    this.locked = this.activeDay.isSet();
  }

  changeCheckboxIndices() {
    for (let i = 0; i < 7; i++) {
      this.checkboxes[i].changeIndex(this.index);
    }
  }
}