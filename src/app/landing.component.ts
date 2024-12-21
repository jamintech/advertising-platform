import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgComponentsModule } from './shared/components/import-modules/prime-ng-components/prime-ng-components.module';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgComponentsModule
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {


  navigateToSurf() {
    window.location.href = '/surf';
}
}