import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginModel } from "./login-model";
import { FormControl, Validators } from "@angular/forms";
import { environment } from "../../../environments/environment";
import { createSession } from "../../common/sessionHandler";
import { LncService } from "../../services/lnc-service";
// import { routerTransition } from '../router.animations';
// import { LoginModel } from "app/login/login-model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
  // animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  serviceURL: any;
  errorMessage: string;
  isSpinnerHidden: Boolean = false;
  isLoginBtnDisabled: Boolean = true;
  userName: string;
  password: string;
  txtLogin: String = "Login";
  userNameControl: FormControl = new FormControl();
  passwordControl: FormControl = new FormControl();

  loginModel: LoginModel = new LoginModel();
  submitted = false;
  constructor(
    public router: Router,
    private service: LncService
    ) {}

  onSubmit() {
    this.submitted = true;
  }
  ngOnInit() {
    this.userNameControl = new FormControl("", Validators.required);
    this.passwordControl = new FormControl("", Validators.required);
  }
  userLogin() {

    this.isLoginBtnDisabled = false;
    this.isSpinnerHidden = true;
    this.txtLogin = 'Logging in';
    if (this.passwordControl.hasError('required') || this.userNameControl.hasError('required')) {
      this.isSpinnerHidden = false;
      this.txtLogin = 'Login';
    }
    else {
      const requestObject = {
        UserName: this.userNameControl.value,
        Password: this.passwordControl.value
      }

      
      //login user api call
      this.service.Post(environment.lncServiceIp + "User/Login", requestObject).subscribe(response => {
        if (response != null) {

          setTimeout(() => {
            createSession(response);
            this.router.navigate(['/pages']);
          }, 3000);
        }
        else {
          this.isSpinnerHidden = false;
          this.txtLogin = 'Login';
          this.errorMessage = "Invalid Crendentials"
        }
      }, error => {
        this.isSpinnerHidden = false;
        this.txtLogin = 'Login';
        this.errorMessage = "Error"
      });
    }
  }
}
