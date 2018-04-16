import { Component, NgModule, OnInit, Injectable, Input } from "@angular/core";
import * as _ from 'lodash';

@Component({
    selector: "habbajet-tab",
    templateUrl: "views/habbajet-tab/habbajet-tab.html",
})

export class HabbajetTabComponent {
    public name: string;
    
    onInit() {
        this.name = 'Soupboy';
    }
}