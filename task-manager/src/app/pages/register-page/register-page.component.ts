import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiUserService } from '../../service/api-user/api-user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-page',
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './register-page.component.html',
    styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiUserService, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  registerUser() {
    if (this.registerForm.valid) {
      this.api.registerUser(this.registerForm.value.email, this.registerForm.value.password);
      this.router.navigate(['/login'])
    }
  }
}
