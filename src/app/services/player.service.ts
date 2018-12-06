import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './auth/auth.service';
import { Player } from '../models/player';
import { Team } from 'src/app/models/team';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class PlayerService {
  
  public teamID: string;
  constructor(private auth: AuthService) { }


  public create(player: Player): Observable<any>
  {
    return this.auth.request('post', "/players", player)           
  }
}
