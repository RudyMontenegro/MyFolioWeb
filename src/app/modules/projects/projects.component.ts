import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  longDescription: string;
  technologies: string[];
  url?: string
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  private techColors: { [key: string]: string } = {
    'Angular': '#DD0031',
    'Ionic': '#3880FF',
    'TypeScript': '#3178C6',
    'OneSignal': '#1F1F1F',
    'Firebase': '#FFCA28',
    'Flask': '#000000',
    'Laravel': '#FF2D20',
    'MySql': '#4479A1',
    'Python': '#3776AB',
    'PHP': '#777BB4',
    'Material': '#757575',
    'Bootstrap': '#7952B3',
    'SwiperJs': '#6332F6',
    'Nginx': '#009639',
    'Docker': '#2496ED'
  };

  projects: Project[] = [
    {
      title: 'Mencargo Landing',
      description: 'projects.mencargo.description',
      imageUrl: 'assets/images/projects/mencargo-la.webp',
      longDescription: 'projects.mencargo.longDescription',
      technologies: ['Angular', 'Bootstrap', 'SwiperJs', 'Nginx' , 'Docker'],
       url: 'https://www.mencargo.net'
    },
    {
      title: 'Mencargo App',
      description: 'projects.mencargo_movil.description',
      imageUrl: 'assets/images/projects/mencargo-movil.webp',
      longDescription: 'projects.mencargo_movil.longDescription',
      technologies: ['Ionic', 'Angular', 'OneSignal', 'Firebase', 'TypeScript'],
      url: 'https://apps.apple.com/bo/app/mencargo/id1481410872?l=en-GB'
    },
    {
      title: 'Ventu App',
      description: 'projects.ventu.description',
      imageUrl: 'assets/images/projects/ventu.webp',
      longDescription: 'projects.ventu.longDescription',
      technologies: ['Ionic', 'Angular', 'TypeScript'],
       url: 'https://ventu.vip'
    },
    {
      title: 'Backend Mencargo/Ventu',
      description: 'projects.ventu.description',
      imageUrl: 'assets/images/projects/api.webp',
      longDescription: 'projects.ventu.longDescription',
      technologies: ['Flask','Laravel','MySql', 'Python', 'PHP','Google Cloud']

    },
    {
      title: 'My_Folio Web',
      description: 'projects.MyFolio.description',
      imageUrl: 'assets/images/projects/my_folio.webp',
      longDescription: 'projects.MyFolio.longDescription',
      technologies: ['Angular','Material','TypeScript']
    }
  ];

  constructor(private translate: TranslateService) {}

  getTechColor(tech: string): string {
    return this.techColors[tech] || '#6c757d'; // Color gris por defecto si no se encuentra
  }
} 