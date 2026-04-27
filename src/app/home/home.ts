import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingButtonComponent } from '../shared/booking-button/booking-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, BookingButtonComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  host: { 'class': 'page-fade-in' }
})
export class Home {}
