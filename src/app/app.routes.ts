import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'device',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'device',
    pathMatch: 'full',
  },
];
