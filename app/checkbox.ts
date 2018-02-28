enum CheckboxState {
    NEUTRAL,
    POSITIVE,
    NEGATIVE
}

export class CheckboxBinding {
    public state: CheckboxState;
    public image: string;
    public title: string;
    public time: number;

    constructor(private saveObject: any, private index: number, isNew: boolean, private weekday: number) {
        if(isNew) {
            this.state = CheckboxState.NEUTRAL;
        } else {
            this.state = this.saveObject.getNumber(this.weekday + "" + this.index);
            this.time = this.saveObject.getNumber(this.weekday + "" + this.index + "t");
        }
        this.setImage();
    }

    cycleStates() {
        if (this.state === CheckboxState.NEUTRAL) {
            this.state = CheckboxState.POSITIVE;
        } else if (this.state === CheckboxState.POSITIVE) {
            this.state = CheckboxState.NEGATIVE;
        } else if (this.state === CheckboxState.NEGATIVE) {
            this.state = CheckboxState.NEUTRAL;
        }
        this.setImage();
    }

    setImage() {
        if (this.state === CheckboxState.NEUTRAL) {
            this.image = "~/images/checkbox/Neutral.png";
        } else if (this.state === CheckboxState.POSITIVE) {
            this.image = "~/images/checkbox/Positive.png";
        } else if (this.state === CheckboxState.NEGATIVE) {
            this.image = "~/images/checkbox/Negative.png";
        }
        this.saveData();
    }

    isChecked() {
        return this.state === CheckboxState.POSITIVE;
    }

    isSet() {
        return this.state !== CheckboxState.NEUTRAL;
    }

    fillCheckbox(success: boolean) {
        this.state = success ? CheckboxState.POSITIVE: CheckboxState.NEGATIVE;
        this.setImage();
    }

    reset() {
        this.state = CheckboxState.NEUTRAL;
        this.saveData();
        this.setImage();
    }

    saveData() {
        this.saveObject.setNumber(this.weekday + "" + this.index, this.state);
        if(this.time !== undefined) {
            this.saveObject.setNumber(this.weekday + "" + this.index + "t", this.time);
        }
    }

    clearData() {
        this.saveObject.remove(this.weekday + "" + this.index);
        this.saveObject.remove(this.weekday + "" + this.index + "t");
    }

    changeIndex(newIndex: number) {
        this.clearData();
        this.index = newIndex;
        this.saveData();
    }

    setTime(title: string, time: number) {
        this.title = title;
        this.time = time;
        this.saveData();
    }
}