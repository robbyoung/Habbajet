import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { HabbajetTabViewComponent } from "./views/habbajet-tab-view/habbajet-tab-view.component";
import { HabbajetTabComponent } from "./views/habbajet-tab/habbajet-tab.component";

@NgModule({
  declarations: [
    AppComponent,
    HabbajetTabViewComponent,
    HabbajetTabComponent
  ],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],

})
export class AppModule {

}
