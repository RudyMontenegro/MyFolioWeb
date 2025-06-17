import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface AcademicInstitution {
  logo: string;
  url: string;
}
interface JobsInstitution {
  logo: string;
  url: string;
}

@Component({
  selector: 'app-clients-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './clients-skills.component.html',
  styleUrls: ['./clients-skills.component.scss']
})
export class ClientsSkillsComponent {
  academicInstitutions: AcademicInstitution[] = [
    {
      logo: 'assets/images/education/umss.jpg',
      url: 'https://www.umss.edu.bo/'
    },
    {
      logo: 'assets/images/education/pdg.jpg',
      url: 'https://posgrado.fcyt.umss.edu.bo/'
    },
    {
      logo: 'assets/images/education/image.webp',
      url: 'https://www.linkedin.com/in/rudy-montenegro-montero-b15171153/'
    }
  ];
  jobsInstitution: JobsInstitution[] = [
    {
      logo: 'assets/images/company/vtd.jpg',
      url: 'https://vtdfix.com/'
    },
    {
      logo: 'assets/images/company/over.png',
      url: 'https://www.facebook.com/overscopetech/'
    },
    {
      logo: 'assets/images/education/image.webp',
      url: 'https://www.linkedin.com/in/rudy-montenegro-montero-b15171153/'
    }
  ];
} 