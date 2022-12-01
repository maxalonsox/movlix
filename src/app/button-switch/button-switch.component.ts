import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-switch',
  templateUrl: './button-switch.component.html',
  styleUrls: ['./button-switch.component.scss']
})
export class ButtonSwitchComponent {

  constructor() {}
  
  @Input()
  seen!: boolean;

  @Output()
  seenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeSeen(): void {
    if (this.seen) this.seen = false;
    else this.seen = true;
    this.seenChange.emit(this.seen);
  }
}
