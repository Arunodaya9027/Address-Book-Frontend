// import { Component, NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { AuthComponent } from "./components/auth/auth.component";
// import { AddressBookComponent } from "./components/address-book/address-book.component";

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AddressBook-Frontend';
  imageUrl = '../../public/logo.png';
}
