import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './auth/auth.service';
import { Team } from '../models/team';
import { ActivatedRoute } from '@angular/router';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class TeamService {

  teamID: String;
  public registeredTeam: any;



  constructor(private auth: AuthService, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  //Creates one team
  public create(team: Team): Observable<any> {
    return this.auth.request('post', "/teams", team)
  }


  //Gets one team
  public getTeam(teamID: string): Observable<any> {
    return this.auth.request('get', "/teams/" + teamID)
  }
    //Gets all teams
  public getTeams(): Observable<any>{
    return this.auth.request('get', "/teams");
  }
  //Deletes a team
  public deleteTeam(teamID: string){
    return this.auth.request('delete', "/teams/" + teamID)
  }
  //modify a team
  public modifyTeam(teamID: string){
    return this.auth.request('put', "/teams/" + teamID)
  }


}
