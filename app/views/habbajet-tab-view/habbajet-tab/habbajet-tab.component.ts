import { Component, Input } from "@angular/core";
import * as _ from 'lodash';

@Component({
    selector: "habbajet-tab",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-tab.html",
})

export class HabbajetTabComponent {
    public name: string;
    
    constructor() {
        this.name = 'Soupboy';
    }
}