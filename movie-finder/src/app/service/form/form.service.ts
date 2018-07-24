import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  readonly movieDbUrl = 'https://api.themoviedb.org/3/search/movie?query=';
  readonly apiKey = '&api_key=f33fcc35393dcb41a6448a9dbc32f6dd';

  constructor(private httpClient: HttpClient) {
  }

  findMovie(movieName) {
    const finalMovieUrl = `${this.movieDbUrl}${movieName}${this.apiKey}`;
    return this.httpClient.get(finalMovieUrl);
  }
}
