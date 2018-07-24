import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  makeRequest(requestUrl) {
    return this.httpClient.get(requestUrl);
  }
}
