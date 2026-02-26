import { type Routes } from '@angular/router';

export const profileRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/profile-page/profile-page').then((m) => m.ProfilePageComponent),
  },
];
