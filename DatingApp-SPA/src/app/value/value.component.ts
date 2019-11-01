// tslint:disable-next-line: quotemark
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  // tslint:disable-next-line: quotemark
  selector: "app-value",
  // tslint:disable-next-line: quotemark
  templateUrl: "./value.component.html",
  // tslint:disable-next-line: quotemark
  styleUrls: ["./value.component.css"]
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    // tslint:disable-next-line: quotemark
    this.http.get("http://localhost:5000/api/values").subscribe(
      response => {
        this.values = response;
      },
      error => {
        console.error("Error");
      }
    );
  }
}
