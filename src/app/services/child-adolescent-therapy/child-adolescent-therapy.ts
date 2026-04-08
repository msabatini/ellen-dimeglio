import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-child-adolescent-therapy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './child-adolescent-therapy.html',
  styleUrl: './child-adolescent-therapy.scss',
  host: { 'class': 'page-fade-in' }
})
export class ChildAdolescentTherapy {}
