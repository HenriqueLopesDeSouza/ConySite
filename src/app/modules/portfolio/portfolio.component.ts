import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lightbox, LightboxConfig, LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, LightboxModule], // Certifique-se que o LightboxModule está importado corretamente
  providers: [Lightbox, LightboxConfig], // Adiciona o LightboxConfig para configurar a navegação
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolio = [
    { src: '/hero/hero1.jpeg', category: 'facetas', caption: 'Faceta 1' },
    { src: '/hero/hero2.jpeg', category: 'todos', caption: 'Caso Clínico 1' },
    { src: '/hero/hero3.jpeg', category: 'facetas', caption: 'Faceta 2' },
    { src: '/hero/hero4.jpeg', category: 'todos', caption: 'Caso Clínico 2' },
  ];

  filteredPortfolio = [...this.portfolio];

  constructor(private lightbox: Lightbox, private _lightboxConfig: LightboxConfig) {
    // Configuração para garantir que a navegação funcione
    this._lightboxConfig.wrapAround = true;  // Permite voltar do último para o primeiro
    this._lightboxConfig.showImageNumberLabel = true; // Exibir numeração
    this._lightboxConfig.disableScrolling = false; // Evita bloqueio de rolagem
  }

  filterPortfolio(category: string) {
    console.log(`🔹 Filtrando por categoria: ${category}`);
    
    if (category === 'todos') {
      this.filteredPortfolio = [...this.portfolio];
    } else {
      this.filteredPortfolio = this.portfolio.filter(item => item.category === category);
    }
  }

  openLightbox(index: number): void {
    console.log(`🔹 Tentando abrir o Lightbox no índice: ${index}`);
  
    // Criando o álbum completo baseado no portfolio (para garantir navegação correta)
    const album = this.portfolio.map(item => ({
      src: window.location.origin + item.src,
      caption: item.caption,
      thumb: window.location.origin + item.src
    }));
  
    // Encontrando o índice real dentro do portfolio original
    const realIndex = this.portfolio.findIndex(item => item.src === this.filteredPortfolio[index].src);
  
    if (album.length > 0 && realIndex !== -1) {
      setTimeout(() => {
        this.lightbox.open(album, realIndex);
      }, 1);
    } else {
      console.error("❌ Nenhuma imagem disponível para abrir no Lightbox.");
    }
  }
  

  closeLightbox(): void {
    console.log('🔹 Fechando o Lightbox');
    this.lightbox.close();
  }
}
