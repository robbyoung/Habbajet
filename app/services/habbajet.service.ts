import { Injectable } from "@angular/core";
import { ImageState } from "./images.service";

export class Habbajet {
    public image: ImageState;

    constructor(public name: string, public state: number) {
        this.image = new ImageState(state);
    }

    public getState() {
        return this.image.state;
    }
}

@Injectable()
export class HabbajetService {
    public habbajetList: Habbajet[];

    constructor() {
        this.habbajetList = [];
        this.habbajetList.push(new Habbajet('one', 0));
        this.habbajetList.push(new Habbajet('two', 0));
        this.habbajetList.push(new Habbajet('three', 0));
        this.habbajetList.push(new Habbajet('four', 0));
        this.habbajetList.push(new Habbajet('five', 0));
        this.habbajetList.push(new Habbajet('six', 0));
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