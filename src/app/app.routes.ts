import { Routes } from '@angular/router';
import { AboutComponent } from '@src/app/pages/about/about.component';
import { MovieFormComponent } from '@src/app/pages/movie-form/movie-form.component';
import { MovieListComponent } from '@src/app/pages/movie-list/movie-list.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies', // Rota padrão temporária enquanto o formulário é construído
    pathMatch: 'full',
  }, {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'movies/:id/edit',
    component: MovieFormComponent
  }
];
