import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Propriedades do componente
  navItems = [
    { label: 'Home', link: '#home' },
    { label: 'Demonstração', link: '#demo' },
    { label: 'Contato', link: '#contact' }
  ];

  // Método para scroll suave
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }
}