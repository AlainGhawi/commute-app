import { type Routes } from '@angular/router';

export const offerRideRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/offer-ride-page/offer-ride-page').then(
        (m) => m.OfferRidePageComponent
      ),
  },
];
