import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  drink: boolean = false;
  smoke: boolean = false;
  diseases: boolean = false;
  constructor(public navCtrl: NavController) {}

  handleClickSaveButton() {
    console.log("drink = ", this.drink);
    console.log("smoke = ", this.smoke);
    console.log("diseases = ", this.diseases);
  }
}
