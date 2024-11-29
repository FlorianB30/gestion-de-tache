import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiUserService } from '../../service/api-user/api-user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiUserService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async logUser() {
    if (this.loginForm.valid) {
      if (await this.api.logUser(this.loginForm.value.email, this.loginForm.value.password)) {
        this.router.navigate(['/'])
      }
    }
  }

  newUser() {
    this.router.navigate(['/register'])
  }
}
