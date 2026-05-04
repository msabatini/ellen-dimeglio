import { Component } from '@angular/core';
import { BookingButtonComponent } from '../shared/booking-button/booking-button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BookingButtonComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  host: { 'class': 'page-fade-in' }
})
export class ContactComponent {}
