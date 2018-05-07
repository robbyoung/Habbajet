import { Component, NgModule, OnInit } from "@angular/core";
import * as _ from 'lodash';
import { HabbajetService } from "./services/habbajet.service";
import { ImageService } from "./services/images.service";

@Component({
  selector: "main",
  templateUrl: "./main.html",
})

export class AppComponent {

  constructor(private habbajetService: HabbajetService, private imageService: ImageService) {
    imageService = new ImageService();
    habbajetService = new HabbajetService(imageService);
    
  }
}