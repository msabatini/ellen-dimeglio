import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-practice',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './simple-practice.html',
  styleUrl: './simple-practice.scss',
  host: { 'class': 'page-fade-in' }
})
export class SimplePracticeComponent {}
