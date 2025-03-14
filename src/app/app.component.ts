import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './modules/hero/hero.component';
import { SobreComponent } from './modules/sobre/sobre.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { ContatoComponent } from './modules/contato/contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent,
    SobreComponent, 
    PortfolioComponent,
    ContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site-dentista';
}
