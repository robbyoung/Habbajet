import { Component } from "@angular/core";
import * as _ from 'lodash';
import * as frame from 'ui/frame';

@Component({
    selector: "habbajet-tab-view",
    templateUrl: "views/habbajet-tab-view/habbajet-tab-view.html",
})

export class HabbajetTabViewComponent {

    constructor() {
        setTimeout(() => {
            const page = frame.topmost().currentPage;
            page.getViewById('tabView').android.removeViewAt(0);
            console.log('done?');
        }, 1000);
    }
}