import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { TabMoviesComponent } from '../tab-movies/tab-movies.component';
import { TabSeriesComponent } from '../tab-series/tab-series.component';
import { TabComponent } from '../tab/tab.component';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-movies',
        component: TabComponent,
        children: [
          {
            path: '',
            component: TabMoviesComponent,
            pathMatch: 'full',
          },
          {
            path: 'movie-detail/:id',
            component: MovieDetailComponent
          }
        ]
      },
      {
        path: 'tab-series',
        component: TabComponent,
        children: [
          {
            path: '',
            component: TabSeriesComponent,
            pathMatch: 'full',
          },
          {
            path: 'movie-detail/:id',
            component: MovieDetailComponent
          }
        ]
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
