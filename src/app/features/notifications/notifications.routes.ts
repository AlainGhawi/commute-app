import { type Routes } from '@angular/router';

export const notificationsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/notifications-page/notifications-page').then(
        (m) => m.NotificationsPageComponent
      ),
  },
];
