import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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

  

}
