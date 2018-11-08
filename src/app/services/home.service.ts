import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  // ngOnInit()
  // {
  //   this.http.get("http://127.0.0.1:3000/users").subscribe(data => {
  //     console.log(data);
  //   });
  // }



}

