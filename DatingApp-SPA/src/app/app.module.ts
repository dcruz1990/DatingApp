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
import { NgxGalleryModule } from "ngx-gallery";
// tslint:disable-next-line: quotemark
import { FormsModule } from "@angular/forms";
// tslint:disable-next-line: quotemark
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import { AlertifyService } from "./_services/alertify.service";
import { BsDropdownModule, TabsModule } from "ngx-bootstrap";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { ListsComponent } from "./lists/lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { AuthGuard } from "./_guards/auth.guard";
import { UserService } from "./_services/user.service";
import { MemberCardComponent } from "./members/member-card/member-card.component";
import { JwtModule } from "@auth0/angular-jwt";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver copy";
import { MemberEditComponent } from "./members/member-edit/member-edit.component";
import { MemberEditResolver } from "./_resolvers/member-edit.resolver";
import { PreventUnsavedChanges } from "./_guards/prevent-unsaved-changes.guard";
import { PhotoEditorComponent } from "./members/photo-editor/photo-editor.component";
import { FileUploadModule } from "ng2-file-upload";

export function tokenGetter() {
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    PhotoEditorComponent
  ],
  imports: [
    NgxGalleryModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    FileUploadModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: ["localhost:5000/api/auth"]
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    PreventUnsavedChanges
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
