import { Injectable, state } from "@angular/core";
import * as saveObject from 'application-settings';
import { Habbajet } from "./habbajet.service";
import * as _ from 'lodash';

@Injectable()
export class SavingService {
    constructor() {}

    public saveHabbajetList(habbajetList: Habbajet[]) {
        _.each(habbajetList, (habbajet, index) => {
            this.saveHabbajet(habbajet, index);
        });
    }

    public saveHabbajet(habbajet: Habbajet, index: number) {
        saveObject.setString(`hName${index}`, habbajet.name);
        saveObject.setNumber(`hState${index}`, habbajet.getState());
    }

    public loadHabbajetList(): Habbajet[] {
        const habbajetList: Habbajet[] = [];

        let i;
        while(i < 6) {
            habbajetList.push(this.loadHabbajet(i));
            i++;
        }

        return habbajetList;
    }

    public loadHabbajet(index: number): Habbajet {
        if(saveObject.hasKey(`hName${index}`) && saveObject.hasKey(`hName${index}`)) {
            const habbajet = new Habbajet(
                saveObject.getString(`hName${index}`),
                saveObject.getNumber(`hName${index}`),
            );
        } else {
            return undefined;
        }
    }

    public deleteHabbajet(index: number){
        if(saveObject.hasKey(`hName${index}`)) {
            saveObject.remove(`hName${index}`);
        }
        if(saveObject.hasKey(`hState${index}`)) {
            saveObject.remove(`hState${index}`);
        }
    }

    public moveHabbajet(habbajet: Habbajet, start: number, finish: number) {
        this.saveHabbajet(habbajet, finish);
        this.deleteHabbajet(start);
    }
}