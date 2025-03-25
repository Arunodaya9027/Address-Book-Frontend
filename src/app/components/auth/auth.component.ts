import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
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
    password: '',
    allowNotifications: false
  };

  showSignIn(): void {
    this.isSignUp = false;
  }

  showSignUp(): void {
    this.isSignUp = true;
  }

  onSignIn(): void {
    console.log('Sign In Data:', this.signInData);
    // Add your sign-in logic here
  }

  onSignUp(): void {
    console.log('Sign Up Data:', this.signUpData);
    // Add your sign-up logic here
  }
}
