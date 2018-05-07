import { Injectable } from "@angular/core";
import { ImageState, ImageService } from "./images.service";

export class Habbajet {
    public image: ImageState;

    constructor(public name: string, public state: number, public color: string) {
        this.image = new ImageState(state, color);
    }

    public getState() {
        return this.image.state;
    }

    public getColor() {
        return this.image.color;
    }
}

@Injectable()
export class HabbajetService {
    public habbajetList: Habbajet[];

    constructor(private imageService: ImageService) {
        this.habbajetList = [];
        this.habbajetList.push(new Habbajet('one', 0, 'red'));
        this.habbajetList.push(new Habbajet('two', 0, 'blue'));
        this.habbajetList.push(new Habbajet('three', 0, 'green'));
        this.habbajetList.push(new Habbajet('four', 0, 'red'));
        this.habbajetList.push(new Habbajet('five', 0, 'red'));
        this.habbajetList.push(new Habbajet('six', 0, 'red'));
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

    public evolve(habbajet: Habbajet) {
        this.imageService.evolve(habbajet.image);
    }

    public action(habbajet: Habbajet) {
        this.imageService.action(habbajet.image);
    }
}