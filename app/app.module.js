"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var habbajet_tab_view_component_1 = require("./views/habbajet-tab-view/habbajet-tab-view.component");
var habbajet_tab_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-tab.component");
var budget_tab_component_1 = require("./views/habbajet-tab-view/budget-tab/budget-tab.component");
var add_tab_component_1 = require("./views/habbajet-tab-view/add-tab/add-tab.component");
var habbajet_image_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.component");
var habbajet_info_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.component");
var habbajet_buttons_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.component");
var habbajet_checkbox_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.component");
var images_service_1 = require("./services/images.service");
var habbajet_service_1 = require("./services/habbajet.service");
var saving_service_1 = require("./services/saving.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                habbajet_tab_view_component_1.HabbajetTabViewComponent,
                habbajet_tab_component_1.HabbajetTabComponent,
                budget_tab_component_1.BudgetTabComponent,
                add_tab_component_1.AddTabComponent,
                habbajet_image_component_1.HabbajetImageComponent,
                habbajet_info_component_1.HabbajetInfoComponent,
                habbajet_buttons_component_1.HabbajetButtonsComponent,
                habbajet_checkbox_component_1.HabbajetCheckboxComponent
            ],
            providers: [
                habbajet_service_1.HabbajetService,
                images_service_1.ImageService,
                saving_service_1.SavingService,
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [nativescript_module_1.NativeScriptModule],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLGlEQUErQztBQUMvQyxxR0FBaUc7QUFDakcsd0dBQXFHO0FBQ3JHLGtHQUErRjtBQUMvRix5RkFBc0Y7QUFDdEYsMkhBQXdIO0FBQ3hILHdIQUFxSDtBQUNySCxpSUFBOEg7QUFDOUgsb0lBQWlJO0FBQ2pJLDREQUF5RDtBQUN6RCxnRUFBOEQ7QUFDOUQsNERBQTBEO0FBdUIxRDtJQUFBO0lBRUEsQ0FBQztJQUZZLFNBQVM7UUFyQnJCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWixzREFBd0I7Z0JBQ3hCLDZDQUFvQjtnQkFDcEIseUNBQWtCO2dCQUNsQixtQ0FBZTtnQkFDZixpREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIscURBQXdCO2dCQUN4Qix1REFBeUI7YUFDMUI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsa0NBQWU7Z0JBQ2YsNkJBQVk7Z0JBQ1osOEJBQWE7YUFDZDtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsd0NBQWtCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLFNBQVMsQ0FFckI7SUFBRCxnQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSGFiYmFqZXRUYWJWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIYWJiYWpldFRhYkNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC10YWIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCdWRnZXRUYWJDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL2J1ZGdldC10YWIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBZGRUYWJDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2FkZC10YWIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIYWJiYWpldEltYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWltYWdlL2hhYmJhamV0LWltYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSGFiYmFqZXRJbmZvQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWluZm8vaGFiYmFqZXQtaW5mby5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhhYmJhamV0QnV0dG9uc0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1idXR0b25zL2hhYmJhamV0LWJ1dHRvbnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIYWJiYWpldENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWNoZWNrYm94L2hhYmJhamV0LWNoZWNrYm94LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvaW1hZ2VzLnNlcnZpY2VcIjtcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFNhdmluZ1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zYXZpbmcuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSGFiYmFqZXRUYWJWaWV3Q29tcG9uZW50LFxuICAgIEhhYmJhamV0VGFiQ29tcG9uZW50LFxuICAgIEJ1ZGdldFRhYkNvbXBvbmVudCxcbiAgICBBZGRUYWJDb21wb25lbnQsXG4gICAgSGFiYmFqZXRJbWFnZUNvbXBvbmVudCxcbiAgICBIYWJiYWpldEluZm9Db21wb25lbnQsXG4gICAgSGFiYmFqZXRCdXR0b25zQ29tcG9uZW50LFxuICAgIEhhYmJhamV0Q2hlY2tib3hDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgSGFiYmFqZXRTZXJ2aWNlLFxuICAgIEltYWdlU2VydmljZSxcbiAgICBTYXZpbmdTZXJ2aWNlLFxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuXG59XG4iXX0=