import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class FetchProfileService {

  constructor(private auth:AuthService) { }


  public fetchMyself():Observable<User>{
    return this.auth.request('get',"/user/profile/view");
  }

  // public fetchUser(userID:string):Observable<User>{
  //   return this.auth.request('get',"/user/profile/view",{_id:userID});
  // }
}