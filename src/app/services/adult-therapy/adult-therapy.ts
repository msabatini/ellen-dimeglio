import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adult-therapy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './adult-therapy.html',
  styleUrl: './adult-therapy.scss',
  host: { 'class': 'page-fade-in' }
})
export class AdultTherapy {}
