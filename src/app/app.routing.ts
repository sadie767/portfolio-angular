import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutComponent }   from './about/about.component';
import { ProfessionComponent }   from './profession/profession.component';

const appRoutes: Routes = [
  {
     path: '',
     component: IntroductionComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'profession',
    component: ProfessionComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
