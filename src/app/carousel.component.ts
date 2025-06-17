import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="container py-4">
      <swiper-container
        effect="cards"
        grab-cursor="true"
        class="mySwiper"
        style="width: 240px; height: 320px;">
        <swiper-slide *ngFor="let image of images">
          <img [src]="image" 
               style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"
               [alt]="'Card image'">
        </swiper-slide>
      </swiper-container>
    </div>
  `,
})
export class CarouselComponent implements OnInit {
  images: string[] = [];

  ngOnInit() {
    // Set random background image
    const randomBgNumber = Math.floor(Math.random() * 10) + 1;
    //document.body.style.backgroundImage = `url(https://picsum.photos/1920/1080?landscape&random=${randomBgNumber})`;
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#fdf6e3';
    // Generate card images
    this.images = Array(5)
      .fill(0)
      .map((_, i) => `https://picsum.photos/240/320?random=${i + 1}`);
  }
}
