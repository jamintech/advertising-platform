import { Routes } from '@angular/router';
import { SurfComponent } from './surf.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing.component';
import { FaqComponent } from './legal/faq.component';
import { TermsOfServiceComponent } from './legal/terms-of-service.component';
import { PrivacyNoticeComponent } from './legal/privacy-notice.component';
import { CookiePolicyComponent } from './legal/cookie-policy.component';
import { AboutComponent } from './about.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'surf', component: SurfComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'terms-of-service', component: TermsOfServiceComponent },
    { path: 'privacy-notice', component: PrivacyNoticeComponent },
    { path: 'cookie-policy', component: CookiePolicyComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
  ];