import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  sectionTitle = 'Projetos Recentes';
  currentSlide = 0;
  autoplayInterval: any;
  
  projects = [
    {
      image: 'assets/images/project1.jpg',
      title: 'E-commerce de Moda',
      description: 'Desenvolvimento de loja virtual completa com sistema de pagamentos integrado e painel administrativo.',
      technologies: ['Angular', 'Node.js', 'MongoDB']
    },
    {
      image: 'assets/images/project2.jpg',
      title: 'Aplicativo de Delivery',
      description: 'Aplicativo mobile para pedidos de comida com rastreamento em tempo real e sistema de avaliações.',
      technologies: ['React Native', 'Firebase', 'Google Maps API']
    },
    {
      image: 'assets/images/project3.jpg',
      title: 'Dashboard Analítico',
      description: 'Painel de controle com visualização de dados em tempo real para empresa do setor financeiro.',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL']
    }
  ];

  ngOnInit() {
    // Inicializa o carrossel
  }

  ngAfterViewInit() {
    this.startAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  prevSlide() {
    this.stopAutoplay();
    this.currentSlide = this.currentSlide === 0 ? this.projects.length - 1 : this.currentSlide - 1;
    this.startAutoplay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.projects.length;
  }

  goToSlide(index: number) {
    this.stopAutoplay();
    this.currentSlide = index;
    this.startAutoplay();
  }
}