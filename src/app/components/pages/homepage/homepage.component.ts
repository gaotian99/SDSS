import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit {

  public users: any=[];

  constructor(
    private http: HttpClient) { }

  ngOnInit() 
  {
    // this.http.get("http://localhost:3000/users").subscribe(data => {
    //   console.log(data);
    //   this.users=data;
    // });
  }

}
