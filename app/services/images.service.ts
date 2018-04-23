import { Injectable } from "@angular/core";
import { frameCounts } from '../frame-counts';

export class ImageState {
    public state: number;
    public frame: number;
    public action: string;
    public imageUrl: string;

    constructor() {
        this.state = 0;
        this.frame = 0;
        this.action = 'i';
        this.refreshImageUrl();
    }
    
    public refreshImageUrl() {
        this.imageUrl = '~/images/habbajets/' + this.action + this.state + '-' + this.frame + '.png';
    }
}

@Injectable()
export class ImageService {
    
    constructor() {}

    public nextState(imageState: ImageState) {
        imageState.frame++;
        const numFrames = frameCounts(imageState.action + imageState.state);
        
        if (numFrames <= imageState.frame) {
            imageState.frame = 0;
            imageState.action = 'i';
        }

        imageState.refreshImageUrl();
    }

    public evolve(imageState: ImageState) {
        if(imageState.action !== 't') {
            imageState.action = 't';
            imageState.frame = 0;
            imageState.state = (imageState.state + 1) % 7;
            imageState.refreshImageUrl();
        }
    }
}