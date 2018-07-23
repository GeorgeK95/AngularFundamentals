import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MoviesService} from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  readonly movieDbUrl = 'https://api.themoviedb.org/3/';
  readonly apiKey = '&api_key=f33fcc35393dcb41a6448a9dbc32f6dd';
  readonly popularMoviesUrl = 'discover/movie?sort_by=popularity.desc';
  readonly theatreMoviesUrl = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  readonly popularUrl = `${this.movieDbUrl}${this.popularMoviesUrl}${this.apiKey}`;
  readonly theatresUrl = `${this.movieDbUrl}${this.theatreMoviesUrl}${this.apiKey}`;

  popular: Object;
  theatres: Object;

  constructor(private service: MoviesService) {
  }

  ngOnInit() {
    this.service
      .getPopular(this.popularUrl)
      .subscribe(res => {
        this.popular = res.results;
      });

    this.service
      .getPopular(this.theatresUrl)
      .subscribe(res => {
        this.theatres = res.results;
      });
  }

}
