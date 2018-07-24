import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly movieDbUrl = 'https://api.themoviedb.org/3/movie/';
  readonly apiKey = '?api_key=f33fcc35393dcb41a6448a9dbc32f6dd';

  constructor(private httpClient: HttpClient) {
  }

  getMovie(movieId) {
    const finalMovieUrl = `${this.movieDbUrl}${movieId}${this.apiKey}`;
    return this.httpClient.get(finalMovieUrl);
  }
}
