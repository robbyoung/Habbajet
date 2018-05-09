import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { HabbajetService } from "../../../../services/habbajet.service";


@Component({
    selector: "habbajet-buttons",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.html",
    styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.css"]
})

export class HabbajetButtonsComponent {
    @Input() habbajetIndex: number;
    public locked: boolean;

    constructor(private habbajetService: HabbajetService) {}

    ngOnInit() {
        this.locked = false;
    }

    onPositiveTap() {
        if(!this.locked) {
            this.habbajetService.evolve(this.habbajetIndex);
        }
        this.locked = true;
    }

    onNegativeTap() {
        this.locked = true;
    }
}