import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    ReactiveFormsModule
  ],
  providers: [ 
    HttpClientModule 
  ],
  exports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
