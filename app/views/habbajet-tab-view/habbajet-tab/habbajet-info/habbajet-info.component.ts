import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { Habbajet } from "../../../../services/habbajet.service";

@Component({
    selector: "habbajet-info",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.html",
    styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.css"]
})

export class HabbajetInfoComponent {
    @Input() habbajet: Habbajet;

    constructor() {};

    ngOnInit() {}
}