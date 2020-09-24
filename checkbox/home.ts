import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  drink: boolean=false
  smoke: boolean=false
  diseases: boolean=false
  dk:any
  constructor(public navCtrl: NavController) {}

  handleClickSaveButton() {
    if (this.drink = true){
      console.log("drinks is selected");
    }
    if (this.smoke = true){
      console.log("smoke is selected");
    }
    if (this.diseases = true){
      console.log("diseases is selected");
    }
  }
}
