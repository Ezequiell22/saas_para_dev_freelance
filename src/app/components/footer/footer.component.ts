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
      title: 'Serviços',
      items: [
        { label: 'Desenvolvimento Web', url: '#servicos' },
        { label: 'Aplicativos Mobile', url: '#servicos' },
        { label: 'Soluções Backend', url: '#servicos' },
        { label: 'Consultoria em TI', url: '#servicos' }
      ]
    },
    {
      title: 'Empresa',
      items: [
        { label: 'Sobre Nós', url: '#' },
        { label: 'Projetos', url: '#projetos' },
        { label: 'Depoimentos', url: '#' },
        { label: 'Blog', url: '#' }
      ]
    },
    {
      title: 'Suporte',
      items: [
        { label: 'FAQ', url: '#' },
        { label: 'Contato', url: '#contato' },
        { label: 'Política de Privacidade', url: '#' },
        { label: 'Termos de Serviço', url: '#' }
      ]
    }
  ];
}