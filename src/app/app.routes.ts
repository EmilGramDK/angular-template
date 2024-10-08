import { SidebarRoute } from '@emilgramdk/ngx-layout';
import { HomeComponent } from './pages/home/home.component';

export const routes: SidebarRoute[] = [
  {
    title: 'Home',
    icon: 'pi pi-home',
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
];
