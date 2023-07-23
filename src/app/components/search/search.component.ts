import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppModule } from '../../app.module';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { OmdbService } from '../../services/omdb.service';
import { MovieModel } from '../../model/movie.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    AppModule
  ]
})
export class SearchComponent  implements OnInit {

  @Input() type!: string;

  formGroup!: FormGroup;
  params: string[] = [];
  //movieList!: MovieModel[];

  constructor(
    private formBuilder: FormBuilder,
    private omdbService: OmdbService
  ) 
  { 
    this.formGroup = this.formBuilder.group(
      {
        title: new FormControl('')
      }
    );
  }

  ngOnInit() 
  {
    this.formGroup.get('title')?.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((value: string) => value.length >= 3),
      switchMap((value: string) => 
          {
            this.setParams(value);
            return this.omdbService.searchMovies(this.params.join('&'));
          }
        )
    )
    .subscribe(
      (value: MovieModel[]) => this.omdbService.setMovies(value)
    );
  }

  setParams(value: string) {
    this.params = [];
    this.params.push('type=' + this.type);
    this.params.push('s=' + value);
  }
}
