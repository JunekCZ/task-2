import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface iShot {
  shown: boolean,
  computedX: number,
  computedY: number,
  player: String,
  match: String,
  homeTeam: String,
  awayTeam: String,
  time: number,
  gameState: String,
  gameType: String,
  hasGoalie: boolean,
  x: number,
  y: number,
  type: String,
  forecheck: boolean,
  rush: boolean,
  oddManRush: boolean,
  rebounds: boolean,
  afterFO: boolean,
  long: boolean,
  reboundsCreated: boolean,
  oneTimer: boolean,
  assisted: boolean,
  inSlot: boolean,
  inBoxC: boolean,
  netZone: String,
  blocker: String,
  "outbox-BLK": boolean,
  xG: String,
  shotDanger: String,
  emptyNet: boolean,
  videoTime: number,
  shotAssist: {
    player: String,
    x: number,
    y: number,
    time: number
  },
  videoId: String,
  matchDate: String,
  realTime: String,
  score: {
    home: number,
    away: number,
    state: String
  }
}

@Injectable({
  providedIn: 'root'
})
export class ShotsService {

  constructor(private http: HttpClient) {
  }

  getShotsData(_token: string, _competition: string, _teamUuid: string): Observable<iShot[]> {
    let url: string = "http://logiq.statistics.datasport.cz/api/v1/shot/" + _competition + "/" + _teamUuid;
    console.log(url);

    var body = {
      "matches": [
        "929236e2-049a-49a4-818d-b28f04af7bdd"
      ]
    };
    
    console.log(JSON.stringify(body));
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + _token
    });
    let options = { headers };
    return this.http.post<iShot[]>(url, JSON.stringify(body), options);
  }
}
