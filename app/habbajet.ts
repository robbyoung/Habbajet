export class HabbajetBinding {
    private stateIndex: number;
    private frameIndex: number;
    private image: string;
  
    constructor() {
      this.stateIndex = 0;
      this.frameIndex = 0;
      this.image = "~/images/Habbajet" + this.stateIndex + "_" + this.frameIndex + ".png";
    }
  
    evolveState() {
      this.stateIndex < 5 ? this.stateIndex++ : this.stateIndex = 0;
      this.image = "~/images/Habbajet" + this.stateIndex + "_" + this.frameIndex + ".png";
    }

    getImage(): string {
        return this.image;
    }
  }