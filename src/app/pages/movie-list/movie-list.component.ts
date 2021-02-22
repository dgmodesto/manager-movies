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

  movies: Movie[] = [];
  newMovieTitle = '';

  constructor(private movieService: MovieService) { }


  ngOnInit() {
    this.loadMovies();
  }

  createMovie() {
    if (!this.newMovieTitle) { return; }

    const movie = Movie.fromJson({ title: this.newMovieTitle });

    this.movieService.create(movie).subscribe(
      movie => {
        this.movies.unshift(movie);
        this.newMovieTitle = '';
      }
    );
  }

  private loadMovies() {
    this.movieService.getAll().subscribe(movies =>
      this.movies = movies
    );
  }

}
