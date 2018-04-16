import { Component, OnInit, NgModule } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    templateUrl: "./dialogbox.html",
})

export class DialogBox implements OnInit {

    constructor(private params: ModalDialogParams, private page: Page) {

        this.page.on("unloaded", () => {
            // using the unloaded event to close the modal when there is user interaction
            // e.g. user taps outside the modal page
            this.params.closeCallback();
        });
    }

    ngOnInit() {

    }

    public submit() {
       
    }
}