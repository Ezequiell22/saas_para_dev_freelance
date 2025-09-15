import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  title = 'Desenvolvimento de Software Profissional';
  subtitle = 'Soluções personalizadas para suas necessidades de programação';
  ctaText = 'Solicite um Orçamento';
  ctaLink = '#contato';
}