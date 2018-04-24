import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { ImageState, ImageService } from "../../../../services/images.service";

@Component({
    selector: "habbajet-image",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.html",
    styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.css"]
})

export class HabbajetImageComponent {
    @Input() image: ImageState;
    public intervalId: number;
    
    constructor(private imageService: ImageService) {}

    ngOnInit() {
        this.intervalId = setInterval(() => {
            this.imageService.nextState(this.image);
        }, 100);
    }

    public onImageTap() {
        this.imageService.evolve(this.image);
    }
}