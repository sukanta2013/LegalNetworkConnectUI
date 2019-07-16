import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login.routing-module";
import { LoginComponent } from "./login.component";
import {MatFormFieldModule, } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class LoginModule {}
