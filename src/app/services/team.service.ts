import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './auth/auth.service';
import { Team } from '../models/team';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class TeamService {
  
  
  constructor(private auth: AuthService) { }


  public create(team: Team): Observable<any>
  {
    return this.auth.request('post', "/teams", team)           
  }
}
