import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DirectorListComponent } from './director-list/director-list.component';

const routes: Routes = [
  {
    path : "",
    redirectTo : "movies",
    pathMatch : "full"
  },
  {
    path : "movies",
    component : MoviesComponent
  },
  {
    path : "directors",
    component : DirectorListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
