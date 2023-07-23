import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-movies',
        loadComponent: () => 
          import('../tab-movies/tab-movies.component').then((m) => m.TabMoviesComponent),
        children: [
          {
            path: ':id',
            loadComponent: () => 
              import('../movie-detail/movie-detail.component').then((m) => m.MovieDetailComponent),
          }
        ]
      },
      {
        path: 'tab-series',
        loadComponent: () =>
          import('../tab-series/tab-series.component').then((m) => m.TabSeriesComponent),
      },
      {
        path: '',
        redirectTo: '/tabs/tab-movies',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab-movies',
    pathMatch: 'full',
  },
];
