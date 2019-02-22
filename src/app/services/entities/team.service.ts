import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../auth/auth.service';
import { Team } from '../../models/team';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class TeamService {

  teamID: String;
  public team: any;
  userID: String;



  constructor(private auth: AuthService, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  //Creates one team
  public create(team: Team): Observable<any> {
    return this.auth.request('post', "/team/create", team)
  }

  //Adds a player to a team
  public addPlayer(userID: string, teamID: string): Observable<any> {
    return this.auth.request('post', "/player/add", {userID, teamID})
  }


  //Gets one team
  public getTeam(teamID: string): Observable<any> {
    return this.auth.request('get', "/team/" + teamID)
  }
    //Gets all teams
  public getTeams(): Observable<any>{
    return this.auth.request('get', "/team");
  }
  // Get teams by MatchID

  public getTeamsByMatchId(matchID: string){
    return this.auth.request('get', "/team/", + matchID)
  }

  //Gets teams by UserID

  public getTeamsByUserId(userID: string): Observable<any>{
    return this.auth.request('get', "/team/view/myteams/" + userID)
  }
  public getTeamsByUserId1(): Observable<any>{
    return this.auth.request('get', "/team/team/team/profile")
  }

  //Deletes a team
  public deleteTeam(teamID: string){
    return this.auth.request('delete', "/team/" + teamID)
  }
  //modify a team
  public modifyTeam(teamID: string){
    return this.auth.request('put', "/team/" + teamID)
  }

      //Gets all for one league
      public getTeamsByLeagueID(leagueID: string): Observable<any>{
        return this.auth.request('get', "/league/team/" + leagueID);
      }


}
