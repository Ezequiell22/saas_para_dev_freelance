import { Component } from '@angular/core';
import { faCode, faMobile, faServer, faDesktop, faRocket, faCogs, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  sectionTitle = 'Nossos Serviços';
  
  services = [
    {
      icon: faCode,
      title: 'Desenvolvimento Web',
      description: 'Criação de sites responsivos, landing pages e aplicações web com as tecnologias mais modernas do mercado como React, Angular e Vue.js.'
    },
    {
      icon: faRocket,
      title: 'Integração API IFOOD',
      description: 'Integração completa da API do iFood com sistemas ERP, permitindo sincronização automática de pedidos, produtos e relatórios.'
    },
    {
      icon: faCogs,
      title: 'Automação de Processos',
      description: 'Desenvolvimento de scripts e automações inteligentes para otimizar processos repetitivos e aumentar a produtividade da sua empresa.'
    },
    {
      icon: faMobile,
      title: 'Aplicativos Mobile',
      description: 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android com foco em performance, usabilidade e experiência do usuário.'
    },
    {
      icon: faServer,
      title: 'Soluções Backend',
      description: 'Criação de APIs robustas, microserviços, sistemas de gerenciamento e integrações com serviços externos usando Node.js, Python e .NET.'
    },
    {
      icon: faDesktop,
      title: 'Consultoria em TI',
      description: 'Análise e otimização de sistemas existentes, consultoria em arquitetura de software, code review e implementação de melhores práticas.'
    },
    {
      icon: faUsers,
      title: 'Consultoria em Agilidade',
      description: 'Transformação digital de processos, implementação de metodologias ágeis e melhoria contínua focada na entrega de valor ao cliente.'
    }
  ];
}