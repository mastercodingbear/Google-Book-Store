import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'store',
    loadChildren: () =>
      import('@google-book-store/store').then((m) => m.StoreModule),
  },
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full',
  },
];
