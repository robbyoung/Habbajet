import * as _ from "lodash";
import * as Dialogs from 'ui/dialogs';

export class BudgetBinding {

    private totalAmount: number;
    public totalAmountString: string;

    constructor(private saveObject: any) {
        const totalAmount = this.saveObject.getNumber("total");
        if (totalAmount === undefined) {
            this.totalAmount = 0;
        } else {
            this.totalAmount = totalAmount;
        }
        this.setTotalAmountString();
    }

    setTotalAmountString() {
        if (this.totalAmount < 0) {
            this.totalAmountString = '-$' + (this.totalAmount * -1).toFixed(2);
        } else {
            this.totalAmountString = '$' + this.totalAmount.toFixed(2);
        }
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

        if (this.totalAmount < 0) {
            weeklyIncome *= 0.9;
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
        return isFinite(amount) && amount > 0;
    }
}