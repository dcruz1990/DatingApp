// tslint:disable-next-line: quotemark
import { Routes } from "@angular/router";
// tslint:disable-next-line: quotemark
import { HomeComponent } from "./home/home.component";
// tslint:disable-next-line: quotemark
import { MemberListComponent } from "./members/member-list/member-list.component";
// tslint:disable-next-line: quotemark
import { MessagesComponent } from "./messages/messages.component";
// tslint:disable-next-line: quotemark
import { ListsComponent } from "./lists/lists.component";
import { AuthGuard } from "./_guards/auth.guard";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver copy";

export const appRoutes: Routes = [
  // tslint:disable-next-line: quotemark
  { path: "home", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      {
        path: "members",
        component: MemberListComponent,
        resolve: { users: MemberListResolver }
      },
      {
        path: "members/:id",
        component: MemberDetailComponent,
        resolve: { user: MemberDetailResolver }
      },
      // tslint:disable-next-line: quotemark
      { path: "messages", component: MessagesComponent },
      // tslint:disable-next-line: quotemark
      { path: "lists", component: ListsComponent }
    ]
  },
  // tslint:disable-next-line: quotemark
  // tslint:disable-next-line: quotemark
  { path: "**", redirectTo: "", pathMatch: "full" }
];
