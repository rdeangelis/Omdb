import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  standalone: true,
  imports: [
    AppModule
  ]
})
export class TabComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
