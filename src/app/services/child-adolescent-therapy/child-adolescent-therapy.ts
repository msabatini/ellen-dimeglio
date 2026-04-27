import { Component } from '@angular/core';
import { BookingButtonComponent } from '../../shared/booking-button/booking-button.component';

@Component({
  selector: 'app-child-adolescent-therapy',
  standalone: true,
  imports: [BookingButtonComponent],
  templateUrl: './child-adolescent-therapy.html',
  styleUrl: './child-adolescent-therapy.scss',
  host: { 'class': 'page-fade-in' }
})
export class ChildAdolescentTherapy {}
