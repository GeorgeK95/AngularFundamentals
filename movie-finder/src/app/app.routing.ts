import {MoviesComponent} from './movies/movies.component';
import {MovieComponent} from './movie/movie.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SelectedMovieComponent} from './selected-movie/selected-movie.component';

const appRoutes = [
  {path: '', component: MoviesComponent},
  {path: 'movie/:id', component: SelectedMovieComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRouter {
}
