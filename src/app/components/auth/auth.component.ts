import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  isSignUp: boolean = true;

  signInData = {
    email: '',
    password: ''
  };

  signUpData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  showSignIn(): void {
    this.isSignUp = false;
  }

  showSignUp(): void {
    this.isSignUp = true;
  }

  onSignIn(): void {
    const data = {"email": this.signInData.email, "password": this.signInData.password};
    console.log('Sign In Data:', data);
    // Add your sign-in logic here
    this.http.post('http://localhost:8080/api/auth/login', data)
      .subscribe({
        next: (response) => {
          console.log('Login Successful:', response);
          // Handle the response (e.g., save token, navigate to another page)
        },
        error: (error) => {
          console.error('Login Failed:', error);
          // Handle the error (e.g., show an error message)
        }
      });
  }

  onSignUp(): void {
    console.log('Sign Up Data:', this.signUpData);
    // Add your sign-up logic here
    this.http.post('http://localhost:8080/api/auth/register', this.signUpData)
      .subscribe({
        next: (response) => {
          console.log('Registration Successful:', response);
          // Handle the response (e.g., show success message, navigate to login)
        },
        error: (error) => {
          console.error('Registration Failed:', error);
          // Handle the error (e.g., show an error message)
        }
      });
  }
}
