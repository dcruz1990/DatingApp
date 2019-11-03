// tslint:disable-next-line: quotemark
import { Component, OnInit } from "@angular/core";
// tslint:disable-next-line: quotemark
import { AuthService } from "../_services/auth.service";

@Component({
  // tslint:disable-next-line: quotemark
  selector: "app-nav",
  // tslint:disable-next-line: quotemark
  templateUrl: "./nav.component.html",
  // tslint:disable-next-line: quotemark
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        // tslint:disable-next-line: quotemark
        console.log("Logedd in sucessfully");
      },
      error => {
        // tslint:disable-next-line: quotemark
        console.log("Failed to login");
      }
    );
  }

  loggedIn() {
    // tslint:disable-next-line: quotemark
    const token = localStorage.getItem("token");
    return !!token;
  }

  logout() {
    // tslint:disable-next-line: quotemark
    localStorage.removeItem("token");
    // tslint:disable-next-line: quotemark
    console.log("loged out");
  }
}
