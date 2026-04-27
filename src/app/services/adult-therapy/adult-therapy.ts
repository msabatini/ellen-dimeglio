import { Component } from '@angular/core';
import { BookingButtonComponent } from '../../shared/booking-button/booking-button.component';

@Component({
  selector: 'app-adult-therapy',
  standalone: true,
  imports: [BookingButtonComponent],
  templateUrl: './adult-therapy.html',
  styleUrl: './adult-therapy.scss',
  host: { 'class': 'page-fade-in' }
})
export class AdultTherapy {}
