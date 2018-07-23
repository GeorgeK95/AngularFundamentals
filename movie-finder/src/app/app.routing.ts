import {MoviesComponent} from './movies/movies.component';
import {MovieComponent} from './movie/movie.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

const appRoutes = [
  {path: '', component: MoviesComponent},
  {path: 'movie/:id', component: MovieComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRouter {
}
