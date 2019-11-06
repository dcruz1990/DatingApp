// tslint:disable-next-line: quotemark
import { Injectable } from "@angular/core";
// tslint:disable-next-line: quotemark
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../_models/user";

const httpOptions = {
  headers: new HttpHeaders({
    Autorization: "Bearer " + localStorage.getItem("token")
  })
};
@Injectable({
  // tslint:disable-next-line: quotemark
  providedIn: "root"
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + "users");
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + "users/" + id);
  }
}
