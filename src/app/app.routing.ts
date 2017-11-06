import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutComponent }   from './about/about.component';
import { ProfessionComponent }   from './profession/profession.component';
import { ProjectsComponent }   from './projects/projects.component';

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
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
