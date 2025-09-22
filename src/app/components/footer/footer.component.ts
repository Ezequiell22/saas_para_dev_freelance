import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = [
    {
      title: 'Navegação',
      items: [
        { label: 'Home', url: '#home' },
        { label: 'Demonstração', url: '#demo' },
        { label: 'Contato', url: '#contact' }
      ]
    },
    {
      title: 'Serviços',
      items: [
        { label: 'Desenvolvimento Web', url: '#demo' },
        { label: 'Aplicativos Mobile', url: '#demo' },
        { label: 'Soluções Backend', url: '#demo' },
        { label: 'Dashboards ERP', url: '#demo' }
      ]
    },
    {
      title: 'Contato',
      items: [
        { label: 'Entre em Contato', url: '#contact' },
        { label: 'WhatsApp', url: '#contact' },
        { label: 'Email', url: '#contact' }
      ]
    }
  ];
}