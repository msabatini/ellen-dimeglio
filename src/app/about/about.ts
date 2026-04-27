import { Component } from '@angular/core';
import { BookingButtonComponent } from '../shared/booking-button/booking-button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BookingButtonComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  host: { 'class': 'page-fade-in' }
})
export class About {}
