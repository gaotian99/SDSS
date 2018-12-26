import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../auth/auth.service';
import { Team } from '../../models/team';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../../models/match';
import { MatchResult } from '../../models/matchResult';

@Injectable({
  providedIn: 'root'
})
export class MatchResultService {

  constructor(private auth: AuthService, private activatedRoute: ActivatedRoute, private http: HttpClient) { }


  //Creates one matchResult
  public create(matchResult: MatchResult): Observable<any> {
    return this.auth.request('post', "/matchresult", matchResult)
  }

    //Gets one matchResult
    public getMatchResult(matchResultID: string, teamID: string): Observable<any> {
      return this.auth.request('get', "/matchResult/" + teamID)
    }











}
