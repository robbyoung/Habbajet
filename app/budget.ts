import * as _ from "lodash";

export class BudgetBinding {

    private totalAmount: number;
    public totalAmountString: string;

    public weeklyAmount: number;

    constructor(private saveObject: any) {
        this.totalAmount = 0
        this.setTotalAmountString();
        this.weeklyAmount = 200;
    }

    setTotalAmountString() {
        this.totalAmountString = '$' + this.totalAmount.toFixed(2);
    }

    updateTotal(successes: number) {
        let weeklyIncome = this.weeklyAmount;
        for(let failures = 0; failures + successes < 7; failures++) {
            weeklyIncome /= 2;
        }

        this.totalAmount += weeklyIncome;
        this.saveObject.setNumber("total", this.totalAmount);
        this.setTotalAmountString();
    }

    setTotal(newTotal: number) {
        this.totalAmount = parseFloat(newTotal.toFixed(2));
        this.setTotalAmountString();
    }
}