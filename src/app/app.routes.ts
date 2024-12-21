import { Routes } from '@angular/router';
import { SurfComponent } from './surf.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'surf', component: SurfComponent }
  ];