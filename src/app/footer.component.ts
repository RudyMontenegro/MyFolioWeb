import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer mt-5">
      <div class="container py-4">
        <div class="row g-4">
          <div class="col-md-4">
            <h5 class="text-white mb-3">About Me</h5>
            <p class="text-white-50 mb-0">
              Passionate web developer creating beautiful and functional websites. Let's build something amazing together!
            </p>
          </div>
          <div class="col-md-4">
            <h5 class="text-white mb-3">Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white-50 text-decoration-none">Portfolio</a></li>
              <li><a href="#" class="text-white-50 text-decoration-none">Services</a></li>
              <li><a href="#" class="text-white-50 text-decoration-none">About</a></li>
              <li><a href="#" class="text-white-50 text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5 class="text-white mb-3">Connect</h5>
            <div class="d-flex gap-3">
              <a href="#" class="btn btn-dark">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="btn btn-dark">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="btn btn-dark">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="btn btn-dark">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="border-top border-secondary mt-4 pt-4">
          <p class="text-white-50 text-center mb-0">
            © 2024 My Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: rgba(33, 37, 41, 0.7);
      backdrop-filter: blur(5px);
    }
    
    .btn-dark {
      width: 40px;
      height: 40px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: transform 0.2s;
    }
    
    .btn-dark:hover {
      transform: translateY(-3px);
    }
  `]
})
export class FooterComponent {}