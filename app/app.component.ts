import { Component, NgModule } from "@angular/core";
import { HabbajetBinding } from "./habbajet";
import { CheckboxBinding } from "./checkbox";

@Component({
  selector: "my-app",
  template: `<ActionBar title="Habbajet" class="action-bar"></ActionBar>

  <StackLayout>
      <Image [src]="currentImage"></Image>
      <Button text="EVOLVE" (tap)="onEvolveTap()"></Button>
      <ListView [items]="checkboxes" (itemTap)="onCheckboxTap($event)">
      <ng-template let-item="item">
          <StackLayout>
              <Image [src]="image"></Image>
          </StackLayout>
      </ng-template>
      </ListView>
  </StackLayout>`
  // templateUrl: "./habbajet.xml",
})
export class AppComponent {
  habbajet = new HabbajetBinding();
  currentImage = this.habbajet.getImage();
  checkboxes: CheckboxBinding[] = [
    new CheckboxBinding(),
    new CheckboxBinding(),
    new CheckboxBinding(),
    new CheckboxBinding(),
    new CheckboxBinding(),
    new CheckboxBinding(),
    new CheckboxBinding()
  ];

  onCheckboxTap(args) {
    this.checkboxes[args.index].cycleStates();
  }


  onEvolveTap() {
    this.habbajet.evolveState();
    this.currentImage = this.habbajet.getImage();
  }
}
