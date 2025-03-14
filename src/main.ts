import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { LightboxModule, Lightbox } from 'ngx-lightbox';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(LightboxModule), // Registra o módulo do Lightbox
    Lightbox // Registra o serviço Lightbox corretamente
  ]
}).catch((err) => console.error(err));
