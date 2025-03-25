import { Routes } from '@angular/router';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' }, // Default Route
    { path: 'address-book', component: AddressBookComponent },
    { path: 'auth', component: AuthComponent },
    { path: '**', redirectTo: '/auth' }, // Fallback route
];
