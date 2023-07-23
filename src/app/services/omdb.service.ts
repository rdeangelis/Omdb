import { MovieConverter } from './../converter/movie.converter';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { MovieModel } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  movieL: MovieModel[] = [];
  private movieList = new BehaviorSubject(this.movieL);

  constructor(
    private httpClient: HttpClient,
    private movieConverter: MovieConverter
    ) { }

  searchMovies(params: any): Observable<MovieModel[]> {
    const url = `${environment.apiUrl}&${params}`;

    return this.httpClient.post<any>(url, params)
    .pipe(
      map((risp: any) => this.movieConverter.convertToModelList(risp.Search ? risp.Search : []))
    )
  }

  getMovieDetails(id: string): Observable<MovieModel[]> {
    const url = `${environment.apiUrl}&${id}`;

    return this.httpClient.post<any>(url, id)
    .pipe(
      map((risp: any) => { console.log(risp); return risp })
    )
  }

  getMovieList = this.movieList.asObservable();

  setMovies(movieList: MovieModel[]) {
    this.movieList.next(movieList);
  }
}
