import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginSuccesBody } from 'src/app/models/ILoginSuccessBody';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginFormGroup!: FormGroup;
  loading = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.loginFormGroup = this.buildLoginFormGroup();
  }

  onSubmit() {
    if (this.loginFormGroup?.invalid) {
      return;
    }
    this.loading = true;
    const username = this.loginFormGroup?.get('UserNameControl')?.value;
    const password = this.loginFormGroup?.get('PasswordControl')?.value;
    this.authenticationService.login(username, password).subscribe((response: ILoginSuccesBody) => {
      window.localStorage.setItem('jwt', response.access_token);
      this.loading = false;
      this.router.navigate(['/']);
    });
  }
  
  private buildLoginFormGroup(): FormGroup {
    return this.formBuilder.group({
      UserNameControl: ['', Validators.required],
      PasswordControl: ['', Validators.required]
    });
  }

}
