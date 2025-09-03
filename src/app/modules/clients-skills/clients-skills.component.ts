import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface AcademicInstitution {
  logo: string;
  url: string;
  name: string;
  description: string;
}
interface JobsInstitution {
  logo: string;
  url: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-clients-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './clients-skills.component.html',
  styleUrls: ['./clients-skills.component.scss']
})
export class ClientsSkillsComponent {
  private modalCloseTimeout: any;
  private isModalHovered = false;
  academicInstitutions: AcademicInstitution[] = [
    {
      logo: 'assets/images/education/umss.jpg',
      url: 'https://www.umss.edu.bo/',
      name: 'Universidad Mayor de San Simón',
      description: 'Formación académica en Ingeniería de Sistemas'
    },
    {
      logo: 'assets/images/education/pdg.jpg',
      url: 'https://posgrado.fcyt.umss.edu.bo/',
      name: 'Posgrado en Ciencias y Tecnología',
      description: 'Especialización en tecnologías avanzadas'
    },
    {
      logo: 'assets/images/education/image.webp',
      url: 'https://www.linkedin.com/in/rudy-montenegro-montero-b15171153/',
      name: 'LinkedIn Professional',
      description: 'Red profesional y certificaciones'
    }
  ];
  jobsInstitution: JobsInstitution[] = [
    {
      logo: 'assets/images/company/vtd.jpg',
      url: 'https://vtdfix.com/',
      name: 'VTD Fix',
      description: 'Empresa de tecnología y soluciones digitales'
    },
    {
      logo: 'assets/images/company/over.png',
      url: 'https://www.facebook.com/overscopetech/',
      name: 'Overscope Tech',
      description: 'Desarrollo de software y consultoría tecnológica'
    },
    {
      logo: 'assets/images/education/image.webp',
      url: 'https://www.linkedin.com/in/rudy-montenegro-montero-b15171153/',
      name: 'LinkedIn Professional',
      description: 'Red profesional y experiencia laboral'
    }
  ];

  openModal(modalId: string): void {
    // Cancelar cualquier timeout pendiente
    if (this.modalCloseTimeout) {
      clearTimeout(this.modalCloseTimeout);
      this.modalCloseTimeout = null;
    }

    // Abrir el modal usando Bootstrap JavaScript
    debugger
    if (modalId.slice(-1) !== '2') {
      const modalElement = document.getElementById(modalId);
      if (modalElement) {
        // Usar Bootstrap directamente desde el DOM
        const modal = (window as any).bootstrap?.Modal?.getOrCreateInstance(modalElement);
        if (modal) {
          modal.show();
        } else {
          // Fallback: usar data attributes
          modalElement.setAttribute('data-bs-toggle', 'modal');
          modalElement.setAttribute('data-bs-target', '#' + modalId);
          const event = new Event('click');
          modalElement.dispatchEvent(event);
        }
      }
    }
  }

  onImageMouseLeave(): void {
    // Solo cerrar el modal si no está siendo hovered
    if (!this.isModalHovered) {
      this.modalCloseTimeout = setTimeout(() => {
        this.closeAllModals();
      }, 300); // Pequeño delay para evitar cierres accidentales
    }
  }

  onModalMouseEnter(): void {
    this.isModalHovered = true;
    // Cancelar cualquier timeout de cierre
    if (this.modalCloseTimeout) {
      clearTimeout(this.modalCloseTimeout);
      this.modalCloseTimeout = null;
    }
  }

  onModalMouseLeave(modalId: string): void {
    this.isModalHovered = false;
    // Cerrar el modal después de un pequeño delay
    this.modalCloseTimeout = setTimeout(() => {
      this.closeModal(modalId);
    }, 300);
  }

  private closeModal(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = (window as any).bootstrap?.Modal?.getInstance(modalElement);
      if (modal) {
        modal.hide();
      } else {
        // Fallback: usar data attributes
        const closeButton = modalElement.querySelector('[data-bs-dismiss="modal"]') as HTMLElement;
        if (closeButton) {
          closeButton.click();
        }
      }
    }
  }

  private closeAllModals(): void {
    // Cerrar todos los modales abiertos
    const openModals = document.querySelectorAll('.modal.show');
    openModals.forEach(modalElement => {
      const modal = (window as any).bootstrap?.Modal?.getInstance(modalElement);
      if (modal) {
        modal.hide();
      } else {
        // Fallback: usar data attributes
        const closeButton = modalElement.querySelector('[data-bs-dismiss="modal"]') as HTMLElement;
        if (closeButton) {
          closeButton.click();
        }
      }
    });
  }
} 