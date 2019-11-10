import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { MemberEditResolver } from "../_resolvers/member-edit.resolver";
import { MemberEditComponent } from "../members/member-edit/member-edit.component";
import { MemberListResolver } from "../_resolvers/member-list.resolver copy";

@Injectable()
export class PreventUnsavedChanges
  implements CanDeactivate<MemberEditComponent> {
  canDeactivate(component: MemberEditComponent) {
    if (component.editForm.dirty) {
      return confirm("Estas seguro?");
    }
    return true;
  }
}
