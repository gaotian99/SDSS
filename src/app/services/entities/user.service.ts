import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../auth/auth.service';
import { Team } from '../../models/team';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: AuthService, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  //Creates one user
  public create(user: User): Observable<any> {
    return this.auth.request('post', "/user", user)
  }


  //Gets one user
  public getUser(userID: string): Observable<any> {
    return this.auth.request('get', "/user/" + userID)
  }
  //Gets all users
  public getUsers(): Observable<any> {
    return this.auth.request('get', "/user");
  }
  //Deletes a user
  public deleteUser(userID: string) {
    return this.auth.request('delete', "/user/" + userID)
  }
  //modify a user
  public modifyUser(userID: string) {
    return this.auth.request('put', "/user/" + userID)
  }

}
