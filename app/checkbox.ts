enum CheckboxState {
    NEUTRAL,
    POSITIVE,
    NEGATIVE
}

export class CheckboxBinding {
    public state: CheckboxState;
    public image: String;

    constructor() {
        this.state = CheckboxState.NEUTRAL;
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
    }
}