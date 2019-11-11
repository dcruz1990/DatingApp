// tslint:disable-next-line: quotemark
import { Component, OnInit } from "@angular/core";
// tslint:disable-next-line: quotemark
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../_services/alertify.service";
import { Router } from "@angular/router";
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
  photoUrl: string;

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(
      photoUrl => (this.photoUrl = photoUrl)
    );
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        // tslint:disable-next-line: quotemark
        this.alertify.success("Loged In SUccefuly");
      },
      error => {
        // tslint:disable-next-line: quotemark
        this.alertify.error(error);
      },
      () => {
        this.router.navigate(["/members"]);
      }
    );
  }

  loggedIn() {
    // tslint:disable-next-line: quotemark
    return this.authService.loggedIn();
  }

  logout() {
    // tslint:disable-next-line: quotemark
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    // tslint:disable-next-line: quotemark
    this.alertify.message("Loged out");
    this.router.navigate(["/home"]);
  }
}
