import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {

  public registeredTeam: any=[];
  constructor(private http: HttpClient) 
  { 

  }

  ngOnInit() 
  {
    this.http.get("http://localhost:3000/displayteams").subscribe(data => {
      console.log(data);
      this.registeredTeam=data;
    });

}}
