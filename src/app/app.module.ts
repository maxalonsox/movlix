import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { DurationPipe } from './duration.pipe';
import { FormsModule } from '@angular/forms';
import { DirectorListComponent } from './director-list/director-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { MoviesComponent } from './movies/movies.component';
import { ButtonSwitchComponent } from './button-switch/button-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    DurationPipe,
    DirectorListComponent,
    FavoritesListComponent,
    MoviesComponent,
    ButtonSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
