import { CheckboxBinding } from "./checkbox";
import * as _ from 'lodash';

export class HabbajetBinding {
    private stateIndex: number;
    private frameIndex: number;
    public image: string;
    public checkboxes: CheckboxBinding[];
    
  
    constructor() {
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
    }

    checkboxStateUpdate(index: number) {
      this.checkboxes[index].cycleStates();

      let newState = 0;
      _.forEach(this.checkboxes, (c) => {
        if(c.isChecked()) {
          newState++;
        }
      });

      this.setState(newState);
    }

    setImage() {
      this.image = "~/images/habbajet" + this.stateIndex + "_" + this.frameIndex + ".png";
    }

    setState(newState: number) {
      if(newState < 0 || newState > 6) {
        this.stateIndex = 0;
        _.forEach(this.checkboxes, (c) => {
          c.reset();
        });
      } else {
        this.stateIndex = newState;
      }
      this.setImage();
    }
  }