import { Injectable } from "@angular/core";
import { ImageState } from "./images.service";

export class Habbajet {
    public image: ImageState
    
    constructor(public name: string) {
        this.image = new ImageState();
    }
}

@Injectable()
export class HabbajetService {
    public habbajetList: Habbajet[];

    constructor() {
        this.habbajetList = [];
        this.habbajetList.push(new Habbajet('one'));
        this.habbajetList.push(new Habbajet('two'));
        this.habbajetList.push(new Habbajet('three'));
        this.habbajetList.push(new Habbajet('four'));
        this.habbajetList.push(new Habbajet('five'));
        this.habbajetList.push(new Habbajet('six'));
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