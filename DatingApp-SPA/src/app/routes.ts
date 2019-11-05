// tslint:disable-next-line: quotemark
import { Routes } from "@angular/router";
// tslint:disable-next-line: quotemark
import { HomeComponent } from "./home/home.component";
// tslint:disable-next-line: quotemark
import { MemberListComponent } from "./member-list/member-list.component";
// tslint:disable-next-line: quotemark
import { MessagesComponent } from "./messages/messages.component";
// tslint:disable-next-line: quotemark
import { ListsComponent } from "./lists/lists.component";
import { AuthGuard } from "./_guards/auth.guard";

export const appRoutes: Routes = [
  // tslint:disable-next-line: quotemark
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      {
        path: "members",
        component: MemberListComponent,
        canActivate: [AuthGuard]
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
