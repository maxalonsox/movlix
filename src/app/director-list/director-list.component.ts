import { Component } from '@angular/core';
import { Director } from './Director';

@Component({
  selector: 'app-director-list',
  templateUrl: './director-list.component.html',
  styleUrls: ['./director-list.component.scss']
})
export class DirectorListComponent {

  directors: Director[] = [
    {
      name : "Christopher Nolan",
      movies : "Inception, Batman Dark Knight, Interestellar...",
      image : "https://i.ibb.co/NKmrPzS/christopher-nolan.jpg",
      link : "https://es.wikipedia.org/wiki/Christopher_Nolan"
    },
    {
      name : "James Cameron",
      movies : "Avatar, Titanic, Terminator...",
      image : "https://i.ibb.co/18SH4SS/james-cameron.jpg",
      link: "https://es.wikipedia.org/wiki/James_Cameron"
    },
    {
      name : "Quentin Tarantino",
      movies : "Kill Bill, Django sin cadenas, Los 8 más odiados...",
      image : "https://i.ibb.co/X5MsWT0/quentin-tarantino.jpg",
      link : "https://es.wikipedia.org/wiki/Quentin_Tarantino"
    },
  ]
}
