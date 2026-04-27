import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingButtonComponent } from '../shared/booking-button/booking-button.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, BookingButtonComponent],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  host: { 'class': 'page-fade-in' }
})
export class Services {}
