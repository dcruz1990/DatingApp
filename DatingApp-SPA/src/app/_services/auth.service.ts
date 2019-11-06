// tslint:disable-next-line: quotemark
import { Injectable } from "@angular/core";
// tslint:disable-next-line: quotemark
import { HttpClient } from "@angular/common/http";

import { JwtHelperService } from "@auth0/angular-jwt";
// tslint:disable-next-line: quotemark
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
@Injectable({
  // tslint:disable-next-line: quotemark
  providedIn: "root"
})
export class AuthService {
  // tslint:disable-next-line: quotemark
  baseUrl = environment.apiUrl + "auth/";

  jwtHelper = new JwtHelperService();
  decodedToken: any;
  constructor(private http: HttpClient) {}

  login(model: any) {
    // tslint:disable-next-line: quotemark
    return this.http.post(this.baseUrl + "login", model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          // tslint:disable-next-line: quotemark
          localStorage.setItem("token", user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          console.log(this.decodedToken);
        }
      })
    );
  }

  register(model: any) {
    // tslint:disable-next-line: quotemark
    return this.http.post(this.baseUrl + "register", model);
  }

  loggedIn() {
    // tslint:disable-next-line: quotemark
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }
}
