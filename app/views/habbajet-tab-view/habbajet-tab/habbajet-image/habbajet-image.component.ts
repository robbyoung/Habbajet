import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { ImageState, ImageService } from "../../../../services/images.service";
import { HabbajetService } from "../../../../services/habbajet.service";

@Component({
    selector: "habbajet-image",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.html",
    styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.css"]
})

export class HabbajetImageComponent {
    @Input() habbajetIndex: number;
    public intervalId: number;
    public image: ImageState;
    
    constructor(private habbajetService: HabbajetService, private imageService: ImageService) {}

    ngOnInit() {
        this.image = this.habbajetService.getHabbajetImage(this.habbajetIndex);
        this.intervalId = setInterval(() => {
            this.imageService.nextState(this.image);
        }, 100);
    }

    public onImageTap() {
        this.habbajetService.action(this.habbajetIndex);
    }
}