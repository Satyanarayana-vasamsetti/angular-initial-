import { Component } from "@angular/core";

@Component({
  selector:"app-navbar",
  templateUrl:"./navbar.component.html",
  styleUrls:["./navbar.component.css"],
})
export class NavbarComponent{
  name = "Manchodu(Innocent)";
  image = {
    src : "https://images.pexels.com/photos/63285/pig-alp-rona-furna-sow-63285.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt : "Image"
  }
}
