import { Component, OnInit } from '@angular/core';
import { AppModule } from '../../app.module';
import { OmdbService } from 'src/app/services/omdb.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  standalone: true,
  imports: [
    AppModule
  ]
})
export class MovieDetailComponent  implements OnInit {
  
  movieDetail: any = {};
  params: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private omdbService: OmdbService
  ) 
  { 
    this.params.push('type=movie');
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.params.push('i=' + params['id']);
      });

    const params = this.params.join('&');
    this.omdbService.getMovieDetails(params)
      .subscribe(
        movieDetail => this.movieDetail = movieDetail
      );
  }
}
