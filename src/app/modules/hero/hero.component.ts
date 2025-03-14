import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  images = [
    '/hero/hero1.jpeg',
    '/hero/hero2.jpeg',
    '/hero/hero3.jpeg',
    '/hero/hero4.jpeg',
    '/hero/hero5.jpeg'
  ];
  currentImageIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        const heroElement = document.querySelector('.hero') as HTMLElement;
        if (heroElement) {
          heroElement.style.backgroundImage = `url(${this.images[this.currentImageIndex]})`;
        }
      }, 5000);
    }
  }
}
