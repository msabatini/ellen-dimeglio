import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-evaluations',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './evaluations.html',
  styleUrl: './evaluations.scss',
  host: { 'class': 'page-fade-in' }
})
export class EvaluationsComponent {}
