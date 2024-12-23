import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrimeNgComponentsModule } from './shared/components/import-modules/prime-ng-components/prime-ng-components.module';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, PrimeNgComponentsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  constructor(private router: Router) {}

  navigateToSurf() {
    this.router.navigate(['/surf']);
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onSignup() {
    this.router.navigate(['/signup']);
  }

  onClickFaq() {
    this.router.navigate(['/faq']);
  }

  onClickTermsOfService() {
    this.router.navigate(['/terms-of-service']);
  }

  onClickPrivacyNotice() {
    this.router.navigate(['/privacy-notice']);
  }

  onClickCookiePolicy() {
    this.router.navigate(['/cookie-policy']);
  }

  onClickAbout() {
    this.router.navigate(['/about']);
  }
}
