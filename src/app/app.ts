import { Component, signal, afterNextRender, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { BookingButtonComponent } from './shared/booking-button/booking-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, BookingButtonComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ellen-dimeglio');
  protected readonly router = inject(Router);

  constructor() {
    afterNextRender(() => {
      this.initRevealObserver();
    });
  }

  private initRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Also watch for newly added elements (e.g., after navigation)
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll('.reveal:not(.observed)');
      newElements.forEach(el => {
        el.classList.add('observed');
        observer.observe(el);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
  }
}
