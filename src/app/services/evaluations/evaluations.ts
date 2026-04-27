import { Component } from '@angular/core';
import { BookingButtonComponent } from '../../shared/booking-button/booking-button.component';

@Component({
  selector: 'app-evaluations',
  standalone: true,
  imports: [BookingButtonComponent],
  templateUrl: './evaluations.html',
  styleUrl: './evaluations.scss',
  host: { 'class': 'page-fade-in' }
})
export class EvaluationsComponent {}
