import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FavListService } from '../fav-list.service';
import { Movie } from '../movie-list/Movie';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent {

  myFavList$!: Observable<Movie[]>;

  constructor(private favlist: FavListService) {
    this.myFavList$ = favlist.favList.asObservable();
  }

  deleteFromFavList(movie: Movie) {
    this.favlist.deleteFromFavList(movie);
  }
}
