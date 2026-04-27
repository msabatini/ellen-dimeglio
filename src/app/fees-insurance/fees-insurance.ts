import { Component } from '@angular/core';
import { BookingButtonComponent } from '../shared/booking-button/booking-button.component';

@Component({
  selector: 'app-fees-insurance',
  standalone: true,
  imports: [BookingButtonComponent],
  templateUrl: './fees-insurance.html',
  styleUrl: './fees-insurance.scss',
  host: { 'class': 'page-fade-in' }
})
export class FeesInsuranceComponent {}
