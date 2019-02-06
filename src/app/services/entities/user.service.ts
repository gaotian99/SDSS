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


//CREATE







//GET

  //Gets all league managers

     public getLeagueManagers(): Observable<any>{
      return this.auth.request('get', "/user/leagueManager")
    }
    
    //Get players per team

  //Gets one user
  public getUser(userID: string): Observable<any> {
    return this.auth.request('get', "/user/" + userID)
  }
  //Gets all users
  public getUsers(): Observable<any> {
    return this.auth.request('get', "/user");
  }



//DELETE


  //Deletes a user. Should probably move to authentication
  public deleteUser(userID: string) {
    return this.auth.request('delete', "/user/" + userID)
  }





//MODIFY






  //modify a user. Should move to authentication
  // public modifyUser(userID: string) {
  //   return this.auth.request('put', "/user/" + userID)
  // }

  public modifyUser(user: User) {4
  return this.auth.request('put', "/user" + user.email)}

}
