// tslint:disable-next-line: quotemark
import { BrowserModule } from "@angular/platform-browser";
// tslint:disable-next-line: quotemark
import { NgModule } from "@angular/core";

// tslint:disable-next-line: quotemark
import { AppComponent } from "./app.component";

// tslint:disable-next-line: quotemark

// tslint:disable-next-line: quotemark
import { HttpClientModule } from "@angular/common/http";
// tslint:disable-next-line: quotemark
import { NavComponent } from "./nav/nav.component";

// tslint:disable-next-line: quotemark
import { FormsModule } from "@angular/forms";
// tslint:disable-next-line: quotemark
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
