import { routes } from './../tabs/tabs.routes';
import { Component, Input, OnInit } from '@angular/core';
import { AppModule } from '../../app.module';
import { MovieModel } from '../../model/movie.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OmdbService } from '../../services/omdb.service';
import { Router } from '@angular/router';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  standalone: true,
  imports: [
    AppModule
  ]
})
export class MovieListComponent  implements OnInit {

  @Input() movieList!: MovieModel[];
    
  constructor(
    private router: Router
  ) 
  { }

  ngOnInit() 
  { }

  viewDetail(imdbID: string) {
    this.router.navigate(['tabs', 'tab-movies', 'movie-detail', imdbID]);
  }
}
