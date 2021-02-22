// tslint:disable:max-line-length
import { Component, OnInit } from '@angular/core';
import { Movie } from '@src/app/shared/models/movie.model';
import { MovieService } from '@src/app/shared/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies: Movie[] = [];

  ngOnInit() {
    this.loadMovies();
  }

  private loadMovies() {
    this.movieService.getAll().subscribe(movies =>
      this.movies = movies
    );
  }

}
