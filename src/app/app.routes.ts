import { Routes } from '@angular/router';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { AuthComponent } from './components/auth/auth.component';
import { AddressListComponent } from './pages/address-list/address-list.component';
import { AddPersonFormComponent } from './pages/add-person-form/add-person-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'address-book', pathMatch: 'full' }, // Default Route
    { path: 'address-list', component: AddressListComponent },
    { path: 'add', component: AddPersonFormComponent },
    { path: 'edit/:id', component: AddPersonFormComponent },
    { path: 'address-book', component: AddressBookComponent },
    { path: 'auth', component: AuthComponent },
    { path: '**', redirectTo: '/address-list' }, // Fallback route
];
