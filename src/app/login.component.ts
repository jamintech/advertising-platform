import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimeNgComponentsModule } from './shared/components/import-modules/prime-ng-components/prime-ng-components.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgComponentsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  username: string = '';
  password: string = '';
  display: boolean = true;

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  onSubmit(loginForm: any): void {
    console.log('Form Submitted', loginForm);
    if (loginForm.valid) {
      console.log('Form Submitted', {
        username: this.username,
        password: this.password,
      });
    }
  }

  onForgotPassword(): void {
    console.log('Forgot Password clicked');
    // Implement forgot password logic here
  }

  onSignup(): void {
    this.router.navigate(['/signup']);
  }

  onLogin(): void {
    console.log('Login clicked username: ' + this.username + ' password: ' + this.password);
  }

  onCancel(): void {
    this.router.navigate(['/']);
  } 
}