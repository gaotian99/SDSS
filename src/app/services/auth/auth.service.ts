import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}

export interface RegisterDetails {
  email: string;
  password: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private token: string;


  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  //if user has been logged on for less than the maximum then return true
  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  };

  public request(method: 'post' | 'get' | 'delete' | 'put', url, params?: any): Observable<any> {
    let base;
    if (method === 'post') {

      base = this.http.post(environment.apiUrl + url, params);

    } else if (method === 'get')  {
      base = this.http.get(environment.apiUrl + url);
    }
    else if (method === 'delete') {
      base = this.http.delete(environment.apiUrl + url);
    }
    else{
      base = this.http.put(environment.apiUrl + url, params);
    }

    return base;
  }

  public login(user: TokenPayload): Observable<any>{
    return this.request('post', '/api/login', user);
  }

  public register(registerDetails:RegisterDetails): Observable<any>{
    return this.request('post', '/api/register',registerDetails);
  }

}
