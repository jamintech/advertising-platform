import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule first
import * as CryptoJS from 'crypto-js';
//mport * as jwt from 'jwt-simple';
import { HeaderComponent } from './header.component';
import { PrimeNgComponentsModule } from './shared/components/import-modules/prime-ng-components/prime-ng-components.module';
import { CountdownCircleComponent } from './countdown-circle/countdown-circle.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { SiteService } from './services/site.service';
import { Site } from './models/site.model';


@Component({
  selector: 'app-surf',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    HttpClientModule, // Ensure HttpClientModule is imported here
    HeaderComponent,
    PrimeNgComponentsModule,
    CountdownCircleComponent,
    SafeUrlPipe
  ],
  templateUrl: './surf.component.html',
  styleUrls: ['./surf.component.scss']
})
export class SurfComponent {
  title = 'surfer-module';
  siteurl = 'https://gitvault.io';
  countdown: number = 10;
  bonusin = 25;
  sitesVisited = 0;
  pointsToday = 0;
  hitsToday = 0;
  processing = false;
  sites: Site[] = [];
  gravatarUrl = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
  membername = 'John Doe';
  urls: string[] = [
    'https://tesearch.com',
    'https://rewards4surfing.com',
    'https://hit-mart.com',
    'https://Deeverglowy.blogspot.com',
    'https://llclick.com/5m8g6bpc/trafficadbar',
    'https://www.clubshop.store/incomebuilder',
    'https://www.prosperitymarketingsystem.com/go/?s=131393&c=1&c1=1',
    'https://artiseverywhere.site/'
  ];
  bannerLinkUrl = 'https://www.prosperitymarketingsystem.com/go/?s=131393&c=1&c1=1';
  bannerImageUrl = 'https://tesearch.com/getimg.php?id=15';

  @ViewChild(CountdownCircleComponent) countdownCircle!: CountdownCircleComponent;

  constructor(private siteService: SiteService) {}

  ngOnInit() {
    this.getNextSite();
  }

  onShowDashboard() {
    console.log('Dashboard clicked');
    this.siteurl = 'https://gitvault.io';
  }

  onResetCountdown() {
    console.log('Reset clicked');
    this.countdown = 10;
    this.getNextSite();
    this.countdownCircle.resetCountdown();
  }

  onCountdownFinished() {
    //console.log('Countdown finished event received');
    if (!this.processing) {
      //console.log('Countdown finished event processing');
      this.processing = true;
      this.countdown = 0;
      this.bonusin--;
      this.sitesVisited++;
      this.pointsToday += Math.floor(Math.random() * 490) + 10;
      if (Math.random() > 0.8) {
        this.hitsToday++;
      }
      if (this.bonusin === 0) {
        this.bonusin = 25;
        this.pointsToday += 100;
      }
      //console.log('Countdown finished event processed');
      this.processing = false;
    }
  }

  getNextSite() {
    this.siteService.getNextSite().subscribe(
      (data: Site[]) => {
        this.sites = data;
        if (this.sites.length > 0) {
          this.siteurl = this.sites[0].url;
          this.gravatarUrl = `https://www.gravatar.com/avatar/${CryptoJS.MD5(this.sites[0].email).toString()}`;
          this.membername = this.sites[0].name;
        }
      },
      error => {
        console.error('Error fetching site data', error);
      }
    );
  }

  getRandomUrl(): string {
    let randomIndex = Math.floor(Math.random() * this.urls.length);
    let randomUrl = this.urls[randomIndex];
    if (randomUrl === this.siteurl) {
      return this.getRandomUrl();
    }
    return randomUrl;
  }
}