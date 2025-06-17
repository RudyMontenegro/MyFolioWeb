import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  
  constructor(private translate: TranslateService) {
    // Asegurarnos de que el idioma español esté disponible
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
  }

  ngOnInit() {
    document.body.classList.add('dark-theme');
    // Forzar el uso del español al iniciar
    this.translate.use('es');

    const options = {
      strings: ['Bienvenido a la terminal', 'Iniciando sistema...'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '_', // Aquí defines la barra baja
    };

    new Typed(this.typedElement.nativeElement, options);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}