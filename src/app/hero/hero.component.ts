import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  profileImage = `https://picsum.photos/800/1000?random=${Math.random()}`;
  @ViewChild('typedElement') typedElement!: ElementRef;
  private typed: Typed | null = null;

  constructor(private translate: TranslateService) {}

  ngAfterViewInit() {
    this.initializeTyped();
    
    // Suscribirse a los cambios de idioma
    this.translate.onLangChange.subscribe(() => {
      if (this.typed) {
        this.typed.destroy();
      }
      this.initializeTyped();
    });
  }

  ngOnDestroy() {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  private initializeTyped() {
    const options = {
      strings: [
        this.translate.instant('HERO_STRING_1'),
        this.translate.instant('HERO_STRING_2'),
        this.translate.instant('HERO_STRING_3'),
        this.translate.instant('HERO_STRING_4'),
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: '_', // Aquí defines la barra baja
    };

    this.typed = new Typed(this.typedElement.nativeElement, options);
  }
}