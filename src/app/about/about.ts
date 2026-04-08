import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
  host: { 'class': 'page-fade-in' }
})
export class About {}
