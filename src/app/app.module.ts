import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'angular4-carousel';

import { AppComponent } from './app.component';
import { FloorplansComponent } from './components/floorplans/floorplans.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorplansComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
