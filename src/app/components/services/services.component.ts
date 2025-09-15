import { Component } from '@angular/core';
import { faAddressBook, faCode, faDesktop, faMobile, faServer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  sectionTitle = 'Serviços';
  
  services = [
    {
      icon: faCode,
      title: 'Desenvolvimento Web',
      description: 'Criação de sites responsivos, landing pages e aplicações web com as tecnologias mais modernas do mercado.'
    },
    {
      icon: faCode,
      title: 'Integração API IFOOD com ERP',
      description: 'Integração da API IFOOd com o ERP, permitindo a sincronização de dados entre os dois sistemas.'
    },
    {
      icon: faCode,
      title: 'Automação de tarefas',
      description: 'Criação de scripts e automações para otimizar processos repetitivos, aumentar eficiência e reduzir erros.'
    },
    {
      icon: faMobile,
      title: 'Aplicativos Mobile',
      description: 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android com foco em performance e usabilidade.'
    },
    {
      icon: faServer,
      title: 'Soluções Backend',
      description: 'Criação de APIs robustas, sistemas de gerenciamento de conteúdo e integrações com serviços externos.'
    },
    {
      icon: faDesktop,
      title: 'Consultoria em TI',
      description: 'Análise e otimização de sistemas existentes, consultoria em arquitetura de software e melhores práticas.'
    },
    {
      icon: faAddressBook,
      title: 'Consultoria em agilidade',
      description: 'Transformação de processos e melhoria contínua, focado na entrega de valor e na satisfação do cliente.'
    }
  ];
}