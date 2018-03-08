import * as _ from "lodash";
import * as Dialogs from 'ui/dialogs';

export class BudgetBinding {

    private totalAmount: number;
    public totalAmountString: string;

    constructor(private saveObject: any) {
        this.totalAmount = 0
        this.setTotalAmountString();
    }

    setTotalAmountString() {
        this.totalAmountString = '$' + this.totalAmount.toFixed(2);
        this.saveObject.setNumber("total", this.totalAmount);
    }

    updateTotal(successes: number, value: string, factor: number, slack: number) {
        if(successes + slack === 0) {
            return;
        }
        let weeklyMax = _.toNumber(value);
        let weeklyIncome = weeklyMax;
        for(let failures = slack; failures + successes < 7; failures++) {
            weeklyIncome /= factor;
        }

        this.totalAmount += weeklyIncome;
        this.setTotalAmountString();
    }

    setTotal(newTotal: number) {
        this.totalAmount = parseFloat(newTotal.toFixed(2));
        this.setTotalAmountString();
    }

    makePurchase() {
        Dialogs.prompt({
            title: "New Purchase",
            message: "How much did you spend?",
            okButtonText: "Confirm",
          }).then((result) => {
                const purchaseAmount = _.toNumber(result.text);
                if(this.verifyPurchase(purchaseAmount)) {
                    this.setTotal(this.totalAmount - purchaseAmount);
                }
          });
    }

    verifyPurchase(amount: any): boolean {
        return isFinite(amount) && amount > 0 && amount < this.totalAmount;
    }
}