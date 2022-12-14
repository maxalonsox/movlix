import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    let hours = Math.floor(value/60);
    let minutes = value % 60;
    let result = hours+"h "+minutes+"m";
    return result;
  }

}
