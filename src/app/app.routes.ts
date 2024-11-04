import {
  ForbiddenComponent,
  NotFoundComponent,
  SidebarRoute,
} from '@emilgramdk/ngx-layout';
import { HomeComponent } from './pages/home/home.component';

export const routes: SidebarRoute[] = [
  {
    title: 'Home',
    icon: 'pi pi-home',
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  /* 401 route */
  {
    title: 'Forbidden',
    path: 'auth_unauthorized',
    component: ForbiddenComponent,
    hideFromMenu: true,
  },
  /* 404 route */
  {
    title: 'Not Found',
    path: '**',
    component: NotFoundComponent,
    hideFromMenu: true,
  },
];
