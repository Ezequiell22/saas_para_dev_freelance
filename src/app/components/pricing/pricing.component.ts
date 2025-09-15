import { Component } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  sectionTitle = 'Planos e Preços';
  checkIcon = faCheck;
  
  plans = [
    {
      name: 'Básico',
      price: 'R$ 90/h',
      description: 'Para pequenos projetos',
      features: [
        'Manutenção de site',
        'Manutenção de automação',
        'suporte via email'
      ],
      ctaText: 'Selecionar Plano',
      ctaLink: '#contato',
      highlighted: false
    },
    {
      name: 'Profissional',
      price: 'R$ 100/h',
      description: 'Para negócios em crescimento',
      features: [
        'Criação completa de site',
        'Criação completa de automação',
        'Integração com redes sociais',
        'suporte via whatsapp'
      ],
      ctaText: 'Selecionar Plano',
      ctaLink: '#contato',
      highlighted: true
    },
    {
      name: 'Empresarial',
      price: 'R$ 150/h',
      description: 'Para grandes projetos',
      features: [
        'Tudo do Plano Profissional',
        'Integrações com sistemas externos',
        'Implementação de CI/CD'
      ],
      ctaText: 'Selecionar Plano',
      ctaLink: '#contato',
      highlighted: false
    }
  ];
}