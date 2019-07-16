// import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from "@angular/core";
// import { LncService } from '../../services/lnc-service';
import { UsersComponent } from "./users.components";
import { ListOfUsersComponent } from "./list-of-users/list-of-users/list-of-users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { CommonModule } from "@angular/common";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { SmartTableService } from "../../@core/data/smart-table.service";
import { AddUserComponent } from "./add-user/add-user.component";

@NgModule({
  declarations: [UsersComponent, ListOfUsersComponent, AddUserComponent],
  imports: [Ng2SmartTableModule, CommonModule, UsersRoutingModule],
  providers: [
    // LncService,
    SmartTableService
  ]
})
export class UsersModule {}
