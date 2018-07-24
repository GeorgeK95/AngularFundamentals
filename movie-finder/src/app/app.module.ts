import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRouter} from './app.routing';
import {MoviesComponent} from './movies/movies.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MoviesService} from './service/movies/movies.service';
import {HttpClientModule} from '@angular/common/http';
import {MovieComponent} from './movie/movie.component';
import {SelectedMovieComponent} from './selected-movie/selected-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent,
    SelectedMovieComponent,
    SelectedMovieComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRouter
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
