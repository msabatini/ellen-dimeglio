import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Services } from './services/services';
import { ChildAdolescentTherapy } from './services/child-adolescent-therapy/child-adolescent-therapy';
import { AdultTherapy } from './services/adult-therapy/adult-therapy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'services/child-adolescent-therapy', component: ChildAdolescentTherapy },
  { path: 'services/adult-therapy', component: AdultTherapy }
];
