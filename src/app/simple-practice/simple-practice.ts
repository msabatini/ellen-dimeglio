import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-practice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-practice.html',
  styleUrl: './simple-practice.scss',
  host: { 'class': 'page-fade-in' }
})
export class SimplePracticeComponent {}
