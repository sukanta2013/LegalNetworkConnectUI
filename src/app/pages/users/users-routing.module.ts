import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.components";
import { ListOfUsersComponent } from "./list-of-users/list-of-users/list-of-users.component";
import { AddUserComponent } from "./add-user/add-user.component";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    children: [
      {
        path: "list-of-users",
        component: ListOfUsersComponent
      },
      {
        path: "add-users",
        component: AddUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
