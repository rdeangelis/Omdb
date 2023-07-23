import { AppModule } from '../../app.module';
import { OmdbService } from '../../services/omdb.service';
import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieModel } from '../../model/movie.model';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-tab-movies',
  templateUrl: 'tab-movies.component.html',
  styleUrls: ['tab-movies.component.scss'],
  standalone: true,
  imports: [
    AppModule,
    MovieListComponent,
    SearchComponent
  ]
})
export class TabMoviesComponent implements OnInit {
  movieList!: MovieModel[];
  params: string[] = [];

  constructor(
    private omdbService: OmdbService
  ) 
  {
    this.params.push('type=movie');
    this.params.push('s=007');
  }

  ngOnInit(): void {
    const params = this.params.join('&');
    this.omdbService.searchMovies(params)
      .subscribe(
        risp => this.movieList = risp
      );

    this.omdbService.getMovieList
      .subscribe((movieList: MovieModel[]) => this.movieList = movieList);
  }
}
