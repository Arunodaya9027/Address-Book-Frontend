import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';

interface Person {
  fullname: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
}


@Component({
  selector: 'app-address-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './address-book.component.html',
  styleUrl: './address-book.component.scss'
})
export class AddressBookComponent {
  title = 'Address Book';
  personList: Person[] = [
    { fullname: 'Varaza Mishra', address: 'Marve Road, Next To Maniratna', city: 'Mumbai', state: 'Maharashtra', zipCode: '400064', phoneNumber: '02228017752' },
    { fullname: 'Trishna Bhalla', address: '77 ,rd Flr, , Desaichambers, Masjid Bunder', city: 'Mumbai', state: 'Maharashtra', zipCode: '400003', phoneNumber: '02223420607' },
    { fullname: 'Anish Kaskar', address: '473, Sector , Vardhaman Mkt, Vashi, Navi Mumbai', city: 'Mumbai', state: 'Maharashtra', zipCode: '400705', phoneNumber: '02227893390' }
  ];

  person: Person = {
    fullname: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: ''
  };

  newPerson: Person = {
    fullname: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: ''
  };
  isEdit = false;
  editIndex: number | null = null;

  addPerson() {
    if (this.isEdit && this.editIndex !== null) {
      this.personList[this.editIndex] = { ...this.newPerson };
      this.isEdit = false;
      this.editIndex = null;
    } else {
      this.personList.push({ ...this.newPerson });
    }
    this.resetForm();
  }

  editPerson(index: number) {
    this.newPerson = { ...this.personList[index] };
    this.isEdit = true;
    this.editIndex = index;
  }

  deletePerson(index: number) {
    this.personList.splice(index, 1);
  }

  resetForm() {
    this.newPerson = this.person;
  }
}
