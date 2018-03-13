export class FrameCounts {

    public iFrames: number[];
    public tFrames: number[];
    public aFrames: number[];
    public bFrames: number[];

    constructor() {

        this.tFrames = [
            10,
            19,
            14,
            10,
            12,
            9,
            6,
        ];

        this.iFrames = [
            10,
            9,
            8,
            6,
            7,
            6,
            7,
        ];

        this.aFrames = [
            14,
            13,
            7,
            6,
            9,
            11,
            0,
        ];

        this.bFrames = [
            18,
            11,
            6,
            9,
            7,
            0,
            0,
        ];
    }

    exists(state: number, frame: number, action: string): boolean {
        if(frame < 0) return false;
        switch(action) {
            case('t'): return this.tFrames[state] > frame;
            case('i'): return this.iFrames[state] > frame;
            case('a'): return this.aFrames[state] > frame;
            case('b'): return this.bFrames[state] > frame;
            default: return false;
        }
    }
}