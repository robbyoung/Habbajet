enum CheckboxState {
    NEUTRAL,
    POSITIVE,
    NEGATIVE
}

export class CheckboxBinding {
    public state: CheckboxState;
    public image: string;
    public title: string;

    constructor(title: string, private saveObject: any, private index: number, isNew: boolean) {
        this.title = title;
        if(isNew) {
            this.state = CheckboxState.NEUTRAL;
        } else {
            this.state = this.saveObject.getNumber(this.title + "" + this.index);
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
        this.setImage();
    }

    saveData() {
        this.saveObject.setNumber(this.title + "" + this.index, this.state);
    }
}