import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fees-insurance',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fees-insurance.html',
  styleUrl: './fees-insurance.scss',
  host: { 'class': 'page-fade-in' }
})
export class FeesInsuranceComponent {}
