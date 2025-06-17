import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Service {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'fas fa-code',
      titleKey: 'SERVICES.ITEMS.FRONTEND.TITLE',
      descriptionKey: 'SERVICES.ITEMS.FRONTEND.DESCRIPTION'
    },
    {
      icon: 'fas fa-mobile-alt',
      titleKey: 'SERVICES.ITEMS.MOBILE.TITLE',
      descriptionKey: 'SERVICES.ITEMS.MOBILE.DESCRIPTION'
    },
    {
      icon: 'fas fa-layer-group',
      titleKey: 'SERVICES.ITEMS.TECH_STACK.TITLE',
      descriptionKey: 'SERVICES.ITEMS.TECH_STACK.DESCRIPTION'
    },
    {
      icon: 'fas fa-tachometer-alt',
      titleKey: 'SERVICES.ITEMS.OPTIMIZATION.TITLE',
      descriptionKey: 'SERVICES.ITEMS.OPTIMIZATION.DESCRIPTION'
    },
    {
      icon: 'fas fa-users',
      titleKey: 'SERVICES.ITEMS.DESIGN.TITLE',
      descriptionKey: 'SERVICES.ITEMS.DESIGN.DESCRIPTION'
    }
  ];
} 