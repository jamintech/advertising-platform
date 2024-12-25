import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimeNgComponentsModule } from './shared/components/import-modules/prime-ng-components/prime-ng-components.module';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { LoginObj, User } from './models/user.model';

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
  constructor(private router: Router, private loginService: LoginService) { }
  username: string = '';
  password: string = '';
  display: boolean = true;
  loginStatus: string = '';
  loginObj: LoginObj = { username: '', password: '' };
  user: User = {
    id: '',
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    status: '',
    credits: '',
    token: '',
    password: '',
    loginstatus: '',
    refreshToken: ''
  };

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
    this.loginObj.username = this.username;
    this.loginObj.password = this.password;
    debugger
    this.loginService.login(this.loginObj).subscribe(
      (user: User) => {
        if (this.user.loginstatus === 'success') {  
            this.loginStatus = 'User logged in';
            this.user = user
            console.log('User logged in', user);
            console.log('Token', user.token);
        } else {
          console.error('Error logging in', user);
          this.loginStatus = 'Error logging in';
        }
      },
      error => {
        console.error('Error logging in', error);
        this.loginStatus = 'Error logging in';
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}