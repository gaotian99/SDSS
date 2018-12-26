import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../auth/auth.service';
import { Player } from '../../models/player';
import { Team } from 'src/app/models/team';



@Injectable()
export class PlayerService {
  
  constructor(private auth: AuthService) { }

  playerID: String;


  public getPlayers(): Observable<any>{
    return this.auth.request('get', "/players");
  }
  public getPlayer(playerID: string): Observable<any> {
    return this.auth.request('get', "/players/" + playerID)
  }


  public createPlayer(player: Player, teamID: string): Observable<any>
  {
    return this.auth.request('post', "/players", {
      player_name: player.player_name,
      teamID: teamID, 
    })           
  }

  public deletePlayer(playerID: string): Observable<any>
  {
    return this.auth.request('delete', "/players/", + playerID);
  }

}
