import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { HabbajetTabViewComponent } from "./views/habbajet-tab-view/habbajet-tab-view.component";
import { HabbajetTabComponent } from "./views/habbajet-tab-view/habbajet-tab/habbajet-tab.component";
import { BudgetTabComponent } from "./views/habbajet-tab-view/budget-tab/budget-tab.component";
import { AddTabComponent } from "./views/habbajet-tab-view/add-tab/add-tab.component";

@NgModule({
  declarations: [
    AppComponent,
    HabbajetTabViewComponent,
    HabbajetTabComponent,
    BudgetTabComponent,
    AddTabComponent
  ],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],

})
export class AppModule {

}
