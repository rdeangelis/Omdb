import { Component, OnInit } from '@angular/core';
import { AppModule } from '../../app.module';

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

  constructor() { }

  ngOnInit() {}

}
