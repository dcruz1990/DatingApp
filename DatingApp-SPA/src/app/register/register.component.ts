import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        // tslint:disable-next-line: quotemark
        console.log("registro bien");
      },
      error => {
        // tslint:disable-next-line: quotemark
        console.log(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
    // tslint:disable-next-line: quotemark
    console.log("canceled");
  }
}
