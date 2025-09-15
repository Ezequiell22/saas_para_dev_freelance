import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  sectionTitle = 'Projetos';
  
  projects = [
    {
      title: 'Sistema Web para cooperativas',
      description: 'Plataforma web para gerenciamento de cooperativas, incluindo cadastro de membros, projetos de venda e controle de estoque.',
      technologies: ['React', 'Node.js', 'PostgreSql']
    },
    {
      title: 'App Mobile Para auditoria de medicamentos',
      description: 'Aplicativo mobile para auditoria de medicamentos controlados e auditoria de estoque.',
      technologies: ['React Native', 'Firebase', 'SqlServer', 'Jest']
    },
    {
      title: 'Backend Integração ERP X IFOOD',
      description: 'Backend para integração entre ERP e IFOOD, incluindo cadastro de produtos, pedidos e estoque.',
      technologies: ['Delphi', 'Firebird']
    },
    {
      title: 'Sistema ERP para farmácia',
      description: 'Sistema ERP para gestão de farmácia, incluindo cadastro de produtos, estoque, vendas e compras.',
      technologies: ['Delphi', 'Firebird', 'SqlServer', 'Python']
    },
    {
      title: 'API RESTful',
      description: 'Interface de programação robusta para integração entre sistemas com documentação completa e testes automatizados.',
      technologies: ['Express.js', 'JWT', 'Swagger', 'Jest']
    },
    {
      title: 'Sistema para geração de arquivo Sped Fiscal',
      description: 'Sistema para geração de arquivo Sped Fiscal, medias ponderadas, apuração e validação de dados.',
      technologies: ['Delphi', 'Firebird', 'SqlServer', 'Python', 'ACBR', 'Web scrapping']
    },
    {
      title: 'Automação de processo na LEFISC',
      description: 'Automação de processo na LEFISC',
      technologies: ['Python', 'Playwright', 'SqlServer', 'Web scrapping']
    }
  ];

}