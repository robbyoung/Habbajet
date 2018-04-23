import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { Habbajet, HabbajetService } from "../../../services/habbajet.service";

@Component({
    selector: "habbajet-tab",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-tab.html",
})

export class HabbajetTabComponent {
    @Input() habbajetIndex: number;
    public name: string;
    public habbajet: Habbajet;
    
    constructor(private habbajetService: HabbajetService) {
        console.log(this.habbajetIndex);
        this.habbajet = this.habbajetService.getHabbajet(this.habbajetIndex);
        this.name = this.habbajetService.getHabbajetName(this.habbajetIndex);
    }
}