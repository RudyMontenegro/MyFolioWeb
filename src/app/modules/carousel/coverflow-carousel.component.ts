import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

register();

interface Slide {
  title: string;
  description: string;
  image: string;
  url?: string
}

@Component({
  selector: 'app-coverflow-carousel',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './coverflow-carousel.component.html',
  styleUrls: ['./coverflow-carousel.component.scss']
})
export class CoverflowCarouselComponent implements OnInit {
  slides: Slide[] = [
    {
      title: '',
      description: '',
      image:  'assets/images/certificates/diploma-angular-apis.webp',
      url : ''
    },
    {
      title: '',
      description: '',
      image:  'assets/images/certificates/diploma-angular-componentes.webp',
      url : ''
    },
    {
      title: '',
      description: '',
      image:  'assets/images/certificates/diploma-angular16.webp',
      url : ''
    },
    {
      title: '',
      description: '',
      image:  'assets/images/certificates/diploma-basico-javascript.webp',
      url : ''
    },
    {
      title: '',
      description: '',
      image:  'assets/images/certificates/diploma-fundamentos-node.webp',
      url : ''
    },
    {
      title: '',
      description: '',
      image:  'assets/images/certificates/diploma-javascript-practico.webp',
      url : ''
    },
    {
      title: '',
      description: '',
      image:  'assets/images/certificates/diploma-nestjs.webp',
      url : ''
    }
  ];

  ngOnInit() {
    // Initialize navigation buttons after view init
    setTimeout(() => {
      const prevButton = document.querySelector('.navigation-prev');
      const nextButton = document.querySelector('.navigation-next');
      const swiperContainer = document.querySelector('swiper-container');

      if (prevButton && nextButton && swiperContainer) {
        prevButton.addEventListener('click', () => {
          // @ts-ignore
          swiperContainer.swiper.slidePrev();
        });

        nextButton.addEventListener('click', () => {
          // @ts-ignore
          swiperContainer.swiper.slideNext();
        });
      }
    }, 1000);
  }
} 