// tslint:disable-next-line: quotemark
import { Injectable } from "@angular/core";
// tslint:disable-next-line: quotemark
import { HttpClient } from "@angular/common/http";

// tslint:disable-next-line: quotemark
import { map } from "rxjs/operators";
@Injectable({
  // tslint:disable-next-line: quotemark
  providedIn: "root"
})
export class AuthService {
  // tslint:disable-next-line: quotemark
  baseUrl = "http://localhost:5000/api/auth/";

  constructor(private http: HttpClient) {}

  login(model: any) {
    // tslint:disable-next-line: quotemark
    return this.http.post(this.baseUrl + "login", model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          // tslint:disable-next-line: quotemark
          localStorage.setItem("token", user.token);
        }
      })
    );
  }
}
