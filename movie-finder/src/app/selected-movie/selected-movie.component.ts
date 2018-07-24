import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../service/movie/movie.service';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {

  selectedMovie: Object;

  constructor(private route: ActivatedRoute, private service: MovieService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const movieId = params['id'];
      this.service
        .getMovie(movieId)
        .subscribe(movie => {
          this.selectedMovie = movie;
        });
    });
  }

}
