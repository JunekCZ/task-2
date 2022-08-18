import { ShotsService, iShot } from './shots.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hockey',
  templateUrl: './hockey.component.html',
  styleUrls: ['./hockey.component.scss']
})
export class HockeyComponent implements OnInit {
  token: string = "";
  competition: string = "";
  teamUuid: string = "";
  shotsArray: iShot[] = [];

  constructor(private shotsService: ShotsService) {
    this.token = "8bda9a4f6490c8602322ad3d36305ce2103cb34b";
    // Tipsport extraliga - o udržení, resp. o postup do Tipsport extraligy 2021/22
    this.competition = "173d42cf-0ee0-444b-b9c9-7e8348dfe3ef";
    // Rytíři Kladno
    this.teamUuid = "42bafa4d-5e60-4f00-81c5-4f44ffa55927";
    shotsService.getShotsData(this.token, this.competition, this.teamUuid).subscribe(data => {
      this.shotsArray = data;
      this.shotsArray = this.shotsArray.filter(shot => shot.x > 22 && shot.x < 101 && shot.y > -101 && shot.y < 101);
      this.computeDots();
      console.log(this.shotsArray);
    });
  }

  ngOnInit(): void {
  }

  computeDots(): void {
    this.shotsArray.forEach(element => {
      element.computedX = (element.y * -1 + 100) / 200 * 100,
      element.computedY = 100 - (element.x - 23) / 77 * 100;
    });
  }

}
