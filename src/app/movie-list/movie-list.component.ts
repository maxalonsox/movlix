import { Component } from '@angular/core';
import { FavListService } from '../fav-list.service';
import { MovieDataService } from '../movie-data.service';
import { Movie } from './Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  
  movies: Movie[] = [];

  constructor(
    private favlist: FavListService,
    private moviesDataService: MovieDataService) { }

  ngOnInit(): void {
    this.moviesDataService.getAll()
    .subscribe(movies => this.movies = movies);
  }

  addToFavList(movie: Movie): void {
    this.favlist.addToFavList(movie);
  }
}
