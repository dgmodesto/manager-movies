import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '@src/app/shared/models/movie.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private basePath = 'api/movies';

  constructor(private http: HttpClient) { }

  getAll(urlParam = ''): Observable<Movie[]> {

    const url = this.basePath + '?' + urlParam;

    return this.http.get(url).pipe(
      map(this.jsonDataToMovies),
      map(movies => movies.sort((a, b) => b.id = a.id)),
      catchError(this.handleError)
    );
  }


  getById(id: number): Observable<Movie> {
    const url = `${this.basePath}/${id}`;
    return this.http.get(url).pipe(
      map(this.jsonDataToMovie),
      catchError(this.handleError)
    );
  }

  getMoviesToWatchNext(): Observable<Movie[]> {
    return this.getAll('toWatchNext=true');
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post(this.basePath, movie).pipe(
      map(this.jsonDataToMovie),
      catchError(this.handleError)
    );
  }

  update(movie: Movie): Observable<Movie> {
    const url = `${this.basePath}/${movie.id}`;
    return this.http.put(url, movie).pipe(
      map(this.jsonDataToMovie),
      catchError(this.handleError)
    );
  }

  delete(movie: Movie): Observable<any> {
    const url = `${this.basePath}/${movie.id}`;
    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError)
    );
  }

  toToggleMovieWatchNext(movie: Movie): Observable<Movie> {
    movie.toggleMovieWatchNext();

    return this.update(movie);
  }

  /**
   * private methods
   */
  private jsonDataToMovie(jsonData: any): Movie {
    return Movie.fromJson(jsonData);
  }

  private jsonDataToMovies(jsonData: any[]): Movie[] {
    const movies: Movie[] = [];
    jsonData.forEach(element => movies.push(Movie.fromJson(element)));

    return movies;
  }

  private handleError(error: any): Observable<any> {
    console.log('ERROR REQUISIÇÃO', error);
    return throwError(error);
  }

}
