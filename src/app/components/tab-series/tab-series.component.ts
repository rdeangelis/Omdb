import { Component, Input } from '@angular/core';
import { AppModule } from '../../app.module';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieModel } from '../../model/movie.model';
import { OmdbService } from '../../services/omdb.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-tab-series',
  templateUrl: 'tab-series.component.html',
  styleUrls: ['tab-series.component.scss'],
  standalone: true,
  imports: [
    AppModule,
    MovieListComponent,
    SearchComponent
  ]
})
export class TabSeriesComponent {

  @Input() movieList!: MovieModel[];
  params: string[] = [];
  
  constructor(
    private omdbService: OmdbService
  ) 
  {
    this.params.push('type=series');
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
