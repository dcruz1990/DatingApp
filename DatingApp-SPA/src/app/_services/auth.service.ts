// tslint:disable-next-line: quotemark
import { Injectable } from "@angular/core";
// tslint:disable-next-line: quotemark
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
// tslint:disable-next-line: quotemark
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { User } from "../_models/user";
@Injectable({
  // tslint:disable-next-line: quotemark
  providedIn: "root"
})
export class AuthService {
  // tslint:disable-next-line: quotemark
  baseUrl = environment.apiUrl + "auth/";
  photoUrl = new BehaviorSubject<string>("../../assets/user.png");
  currentPhotoUrl = this.photoUrl.asObservable();
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;

  constructor(private http: HttpClient) {}

  changeMemberPhoto(photoUrl: string) {
    this.photoUrl.next(photoUrl);
  }

  login(model: any) {
    // tslint:disable-next-line: quotemark
    return this.http.post(this.baseUrl + "login", model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          // tslint:disable-next-line: quotemark
          localStorage.setItem("token", user.token);
          localStorage.setItem("user", JSON.stringify(user.user));
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.currentUser = user.user;
          this.changeMemberPhoto(this.currentUser.photoUrl);
        }
      })
    );
  }

  register(user: User) {
    // tslint:disable-next-line: quotemark
    return this.http.post(this.baseUrl + "register", user);
  }

  loggedIn() {
    // tslint:disable-next-line: quotemark
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }
}
