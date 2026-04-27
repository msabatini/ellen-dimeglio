import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-button',
  standalone: true,
  template: `
    <a [href]="url" 
       [class]="className" 
       data-spwidget-scope-id="b400843d-7696-4f93-9527-c25079fa0c15" 
       data-spwidget-scope-uri="ellen-dimeglio" 
       data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b" 
       data-spwidget-type="OAR" 
       data-spwidget-scope-global 
       data-spwidget-autobind>
      <ng-content></ng-content>
    </a>
  `,
  styles: [`
    :host ::ng-deep {
      .spwidget-button {
        // Brand variables are already applied globally in styles.scss
        // This component allows for further specific overrides if needed
      }
    }
  `]
})
export class BookingButtonComponent {
  @Input() url: string = 'https://ellen-dimeglio.clientsecure.me';
  @Input() className: string = 'btn btn-gradient px-5 spwidget-button';
}
