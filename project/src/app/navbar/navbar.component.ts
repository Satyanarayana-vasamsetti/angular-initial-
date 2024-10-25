import { Component } from "@angular/core";

@Component({
  selector:"app-navbar",
  templateUrl:"./navbar.component.html",
  styleUrls:["./navbar.component.css"]
})
export class NavbarComponent{
  name ="Bunny"
  image = {
    src:"https://images.pexels.com/photos/12099451/pexels-photo-12099451.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    alt:"image"
  }
}