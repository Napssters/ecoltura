import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import trabajadores from '../../assets/trabajadores.json';
import galeria from '../../assets/galeria.json';
import servicios from '../../assets/servicios.json';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  // Variables para swipe táctil
  private touchStartX: number = 0;
  private touchEndX: number = 0;
  trabajadores: any[] = [];
  galeria: any[] = [];
  selectedImage: string | null = null;
  hoveredIndex: number | null = null;

  servicios: any[] = [];

  // Carrusel solo para móviles
  isMobile: boolean = false;
  currentSlide: number = 0;

  ngOnInit() {
    this.trabajadores = (trabajadores as any[]);
    this.galeria = (galeria as any[]);
    this.servicios = (servicios as any[]);
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 900;
      window.addEventListener('resize', () => {
        this.isMobile = window.innerWidth <= 900;
      });
      // Borrar cache de imágenes (forzar recarga)
      if (this.isMobile) {
        this.galeria = this.galeria.map(item => ({
          ...item,
          imagen: item.imagen + '?t=' + Date.now()
        }));
      }
    }
  }
  // Métodos para swipe táctil en móviles
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;
    if (Math.abs(deltaX) > 40) { // umbral mínimo para swipe
      if (deltaX < 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  nextSlide() {
    if (this.currentSlide < this.galeria.length - 1) {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
}
