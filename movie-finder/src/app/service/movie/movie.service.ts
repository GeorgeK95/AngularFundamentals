import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getMovie(movieByIdUrl) {
    return this.httpClient.get(movieByIdUrl);
  }
}
