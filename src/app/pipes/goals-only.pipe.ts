import { iShot } from './../hockey/shots.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goalsOnly'
})
export class GoalsOnlyPipe implements PipeTransform {

  transform(list: iShot[], goals: boolean): iShot[] {
    return goals ? list.filter(shot => shot.type === 'G') : list;
  }

}
