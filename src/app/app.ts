import { Component, signal, afterNextRender } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { BookingButtonComponent } from './shared/booking-button/booking-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, BookingButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ellen-dimeglio');

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
