import { Component } from "@angular/core";
import * as _ from 'lodash';

@Component({
    selector: "budget-tab",
    templateUrl: "views/habbajet-tab-view/budget-tab/budget-tab.html",
})

export class BudgetTabComponent {
    public totalMoneyString: string;
    public totalMoney: number;

    constructor() {
        this.totalMoney = 0;
        this.setTotalMoneyString();
    }

    setTotalMoneyString() {
        if (this.totalMoney >= 0) {
            this.totalMoneyString = '$' + this.totalMoney.toFixed(2);
        } else {
            this.totalMoneyString = '-$' + (this.totalMoney * -1).toFixed(2);
        }
    }
}