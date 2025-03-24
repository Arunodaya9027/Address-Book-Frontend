import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { AuthComponent } from "./components/auth/auth.component";
import { AddressBookComponent } from "./components/address-book/address-book.component";

@Component({
  selector: 'app-root',
  imports: [AddressBookComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AddressBook-Frontend';
  imageUrl = './assets/Logo.png';
}
