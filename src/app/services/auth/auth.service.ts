import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public request(method: 'post' | 'get', url, params?: any): Observable<any> {
    let base;
    if (method === 'post') {

      base = this.http.post(environment.apiUrl + url, params);

    } else {
      base = this.http.get(environment.apiUrl + url);
    }

    return base;
  }

}
