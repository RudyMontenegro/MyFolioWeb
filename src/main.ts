import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavbarComponent } from './app/navbar/navbar.component';
import { CarouselComponent } from './app/carousel.component';
import { HeroComponent } from './app/hero/hero.component';
import { ClientsSkillsComponent } from './app/modules/clients-skills/clients-skills.component';
import { ServicesComponent } from './app/modules/services/services.component';
import { ProjectsComponent } from './app/modules/projects/projects.component';
import { CoverflowCarouselComponent } from './app/modules/carousel/coverflow-carousel.component';
import { FooterComponent } from './app/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    CarouselComponent,
    HeroComponent,
    ClientsSkillsComponent,
    ServicesComponent,
    ProjectsComponent,
    CoverflowCarouselComponent,
    FooterComponent,
    TranslateModule
  ],
  template: `
    <app-navbar></app-navbar>
    <div id="home">
      <app-hero></app-hero>
    </div>
    <div class="container mt-4">
      <app-clients-skills></app-clients-skills>
      <div id="services">
        <app-services></app-services>
      </div>
      <div id="projects">
        <app-projects></app-projects>
      </div>
    </div>
    <div id="featured">
      <app-coverflow-carousel></app-coverflow-carousel>
    </div>
    <div id="contact">
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    :host {
      scroll-behavior: smooth;
      display: block;
    }

    #home, #services, #projects, #featured, #contact {
      scroll-margin-top: 60px;
    }
  `]
})
export class App {
  constructor(
    private translate: TranslateService
  ) {
    // Configuración del idioma
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    
    // Forzar el idioma español
    const browserLang = 'es';
    translate.use(browserLang);
    
    // Establecer el atributo lang en el HTML
    document.documentElement.lang = 'es';
  }
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        },
        defaultLanguage: 'es'
      })
    )
  ]
});