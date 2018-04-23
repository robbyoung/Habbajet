import { Component } from "@angular/core";
import * as _ from 'lodash';
import * as frame from 'ui/frame';
import { HabbajetService } from "../../services/habbajet.service";

@Component({
    selector: "habbajet-tab-view",
    templateUrl: "views/habbajet-tab-view/habbajet-tab-view.html",
})

export class HabbajetTabViewComponent {

    constructor(private habbajetService: HabbajetService) {
        setTimeout(() => {
            const page = frame.topmost().currentPage;
            page.getViewById('tabView').android.removeViewAt(0);
        }, 1000);
    }

    public showTab(index: number): boolean {
        return this.habbajetService.habbajetExists(index);
    }

    public getName(index: number): string {
        return this.habbajetService.getHabbajetName(index);
    }
}