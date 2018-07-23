import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../service/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  readonly movieDbUrl = 'https://api.themoviedb.org/3/';
  readonly apiKey = '?api_key=f33fcc35393dcb41a6448a9dbc32f6dd';

  movie: Object;

  constructor(private route: ActivatedRoute, private service: MovieService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const movieId = params['id'];
      const movieByIdUrl = `movie/${movieId}`;
      const finalMovieUrl = `${this.movieDbUrl}${movieByIdUrl}${this.apiKey}`;
      this.service
        .getMovie(finalMovieUrl)
        .subscribe(movie => {
          this.movie = movie;
        });
    });

  }

}
