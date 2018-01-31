import { Component, NgModule } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Habbajet" class="action-bar"></ActionBar>
    <!-- Your UI components go here -->

    <StackLayout>
      <GridView rows="auto" columns="100, 100">
        <!--<Label row="0" col="0" text="habbajet" tap="onTap"> </Label>
         <Label row="0" col="1" text="inferior beings" tap="onOtherTap"> </Label> -->
      </GridView>
      <Image [src]="habbajetImage"></Image>
      <Button text="EVOLVE" (tap)="evolveState()"></Button>
    </StackLayout>
  `
})
export class AppComponent {
  stateIndex = 0;
  animationIndex = 0;
  habbajetImage = "~/images/Habbajet" + this.stateIndex + "_" + this.animationIndex + ".png";

  evolveState() {
    this.stateIndex < 5 ? this.stateIndex++ : this.stateIndex = 0;
    this.habbajetImage = "~/images/Habbajet" + this.stateIndex + "_" + this.animationIndex + ".png";
  }


  
}

// exports.onTap = function() {
//   console.log('Habbajet tapped!');
// };

// exports.onOtherTap = function() {
//   console.log('Inferior being tapped!');
// };
