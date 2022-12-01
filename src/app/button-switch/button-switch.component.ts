import { Component, Input } from '@angular/core';
import { Movie } from '../movie-list/Movie';

@Component({
  selector: 'app-button-switch',
  templateUrl: './button-switch.component.html',
  styleUrls: ['./button-switch.component.scss']
})
export class ButtonSwitchComponent {

  constructor() {}
  
  @Input()
  movie!: Movie;
}
