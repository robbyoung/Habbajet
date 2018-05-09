import { Injectable, state } from "@angular/core";
import * as saveObject from 'application-settings';
import { Habbajet, HabbajetService } from "./habbajet.service";
import * as _ from 'lodash';

@Injectable()
export class SavingService {
    constructor(private habbajetService: HabbajetService) {}

    public saveHabbajetList() {
        const habbajetList = this.habbajetService.habbajetList;
        _.each(habbajetList, (habbajet, index) => {
            if(habbajet !== undefined) {
                this.saveHabbajet(habbajet, index);
            }
        });
    }

    public saveHabbajet(habbajet: Habbajet, index: number) {
        saveObject.setString(`hName${index}`, habbajet.name);
        saveObject.setNumber(`hState${index}`, habbajet.state);
        saveObject.setString(`hColor${index}`, habbajet.color)
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
        if(saveObject.hasKey(`hName${index}`) &&
                saveObject.hasKey(`hState${index}`) &&
                saveObject.hasKey(`hColor${index}`)) {
            const habbajet = new Habbajet(
                saveObject.getString(`hName${index}`),
                saveObject.getNumber(`hState${index}`),
                saveObject.getString(`hColor${index}`)
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