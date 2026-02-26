import { type Routes } from '@angular/router';

export const requestRideRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/request-ride-page/request-ride-page').then(
        (m) => m.RequestRidePageComponent
      ),
  },
];
