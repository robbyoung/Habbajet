import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { ImageState, ImageService } from "../../../../services/images.service";
import { Habbajet, HabbajetService } from "../../../../services/habbajet.service";

@Component({
    selector: "habbajet-image",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.html",
    styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.css"]
})

export class HabbajetImageComponent {
    @Input() habbajet: Habbajet;
    public intervalId: number;
    public image: ImageState;
    
    constructor(private habbajetService: HabbajetService, private imageService: ImageService) {
        this.image = this.habbajet.image;
    }

    ngOnInit() {
        this.intervalId = setInterval(() => {
            this.imageService.nextState(this.image);
        }, 100);
    }

    public onImageTap() {
        this.imageService.evolve(this.image);
    }
}