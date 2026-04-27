import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingButtonComponent } from '../shared/booking-button/booking-button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, BookingButtonComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  host: { 'class': 'page-fade-in' }
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  submitted = false;

  onSubmit() {
    const body = new URLSearchParams();
    body.set('form-name', 'contact');
    body.set('name', this.formData.name);
    body.set('email', this.formData.email);
    body.set('phone', this.formData.phone);
    body.set('message', this.formData.message);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
      .then(() => {
        this.submitted = true;
      })
      .catch((error) => alert(error));
  }
}
