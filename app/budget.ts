import * as _ from "lodash";
import * as Dialogs from 'ui/dialogs';

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
        this.saveObject.setNumber("total", this.totalAmount);
    }

    updateTotal(successes: number) {
        let weeklyIncome = this.weeklyAmount;
        for(let failures = 0; failures + successes < 7; failures++) {
            weeklyIncome /= 2;
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
                const purchaseAmount = _.toNumber(result.text) as number;
                if(purchaseAmount !== undefined) {
                    this.setTotal(this.totalAmount - purchaseAmount);
                }
          });
    }
}