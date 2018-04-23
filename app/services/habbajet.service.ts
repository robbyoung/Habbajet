import { Injectable } from "@angular/core";
import { ImageState } from "./images.service";

export class Habbajet {
    private image: ImageState
    
    constructor(public name: string) {
        
    }
}

@Injectable()
export class HabbajetService {
    private habbajetList: Habbajet[];

    constructor() {
        this.habbajetList = [];
        this.habbajetList.push(new Habbajet(''))
    }
    
    public habbajetExists(index: number): boolean {
        return this.habbajetList.length > index && this.habbajetList[index] !== undefined;
    }

    public getHabbajetName(index: number): string {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].name;
        } else {
            return 'To Remove';
        }
    }

    public getHabbajet(index: number): Habbajet {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index];
        } else {
            return undefined;
        }
    }
}