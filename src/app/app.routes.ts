import { type Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
import { AppShellComponent } from './shared/components/app-shell/app-shell';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.routes').then((m) => m.loginRoutes),
  },
  {
    path: '',
    component: AppShellComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.routes').then((m) => m.homeRoutes),
      },
      {
        path: 'request-ride',
        loadChildren: () =>
          import('./features/request-ride/request-ride.routes').then(
            (m) => m.requestRideRoutes
          ),
      },
      {
        path: 'offer-ride',
        loadChildren: () =>
          import('./features/offer-ride/offer-ride.routes').then((m) => m.offerRideRoutes),
      },
      {
        path: 'rides',
        loadChildren: () =>
          import('./features/rides/rides.routes').then((m) => m.ridesRoutes),
      },
      {
        path: 'matches',
        loadChildren: () =>
          import('./features/matches/matches.routes').then((m) => m.matchesRoutes),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./features/profile/profile.routes').then((m) => m.profileRoutes),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./features/notifications/notifications.routes').then(
            (m) => m.notificationsRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
