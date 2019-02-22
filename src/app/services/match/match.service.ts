import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../auth/auth.service';
import { Team } from '../../models/team';
import { ActivatedRoute } from '@angular/router';
import { League } from '../../models/league';
import { Match } from '../../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private auth: AuthService, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  //Creates one match
  public create(match: Match): Observable<any> {
    return this.auth.request('post', "/match", match)
  }


  //Gets one match
  public getMatch(matchID: string): Observable<any> {
    return this.auth.request('get', "/match/" + matchID)
  }
    //Gets all matches
  public getMatches(): Observable<any>{
    return this.auth.request('get', "/match");
  }

    //Gets all matches by team
  public getMatchesByTeam(teamID: string): Observable<any>{
    return this.auth.request('get', "/match/" + teamID)
  }

  public getWinsLossesByLeagueID(leagueID: string): Observable<any>{
    return this.auth.request('get', "/league/totalGames/" + leagueID)
  }
  public getUpcomingMatchesByLeagueID(leagueID: string): Observable<any>{
    return this.auth.request('get', "/match/upcomingGames/" + leagueID )
  }

  //Get upcoming matches by team

  public getUpcomingMatchesByTeam(teamID: string): Observable<any>{
    return this.auth.request('get', "/match/" + teamID + "/upcomingGames")
  }
  //Deletes a match
  public deleteMatch(matchID: string){
    return this.auth.request('delete', "/match/" + matchID)
  }
  //modify a league
  public modifyMatch(matchID: string){
    return this.auth.request('put', "/match/" + matchID)
  }

 


}
