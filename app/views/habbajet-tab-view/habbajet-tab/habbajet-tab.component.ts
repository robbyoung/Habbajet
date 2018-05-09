import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { HabbajetService } from "../../../services/habbajet.service";

@Component({
    selector: "habbajet-tab",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-tab.html",
})

export class HabbajetTabComponent {
    @Input() habbajetIndex: number;
    public name: string;
    
    constructor(private habbajetService: HabbajetService) {}

    ngOnInit() {
        this.name = this.habbajetService.getHabbajetName(this.habbajetIndex) + ' (' + this.habbajetIndex + ')';
    }
}