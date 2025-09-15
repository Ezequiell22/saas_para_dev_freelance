import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Propriedades do componente
  navItems = [
    { label: 'Serviços', link: '#servicos' },
    { label: 'Preços', link: '#precos' },
    { label: 'Tecnologias e Projetos', link: '#experiencias' },
    { label: 'Contato', link: '#contato' }
  ];
}