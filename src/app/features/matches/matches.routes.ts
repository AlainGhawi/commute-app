import { type Routes } from '@angular/router';

export const matchesRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/match-list/match-list').then((m) => m.MatchListComponent),
  },
];
