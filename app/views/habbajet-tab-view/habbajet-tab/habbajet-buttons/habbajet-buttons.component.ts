import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { Habbajet } from "../../../../services/habbajet.service";

@Component({
    selector: "habbajet-buttons",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.html",
    styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.css"]
})

export class HabbajetButtonsComponent {
    @Input() habbajet: Habbajet;
    public locked: boolean;

    ngOnInit() {
        this.locked = false;
    }

    onPositiveTap() {
        _.noop;
    }

    onNegativeTap() {
        _.noop;
    }
}