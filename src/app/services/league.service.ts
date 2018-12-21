import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './auth/auth.service';
import { Team } from '../models/team';
import { ActivatedRoute } from '@angular/router';
import { League } from '../models/league';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class LeagueService {

  leagueID: String;
  sport: String;
  public league: any;




  constructor(private auth: AuthService, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  //Creates one league
  public create(league: League): Observable<any> {
    return this.auth.request('post', "/league", league)
  }


  //Gets one league
  public getLeague(leagueID: string): Observable<any> {
    return this.auth.request('get', "/league/league/" + leagueID)
  }
    //Gets all leagues
  public getLeagues(): Observable<any>{
    return this.auth.request('get', "/league");
  }

    //Gets all leagues by sport
  public getLeaguesBySport(sport: string): Observable<any>{
    return this.auth.request('get', "/league/" + sport)
  }
  //Deletes a league
  public deleteLeague(leagueID: string){
    return this.auth.request('delete', "/league/" + leagueID)
  }
  //modify a league
  public modifyLeague(leagueID: string){
    return this.auth.request('put', "/league/" + leagueID)
  }


}
