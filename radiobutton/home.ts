import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  sex: string = "male";

  constructor(public navCtrl: NavController) {}

  handleClickSaveButton() {
    console.log("drink = ", this.sex);
  }
}
