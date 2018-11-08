import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-displayteams',
  templateUrl: './displayteams.component.html',
  styleUrls: ['./displayteams.component.css']
})
export class DisplayteamsComponent implements OnInit 
{

  public registeredTeam: any=[];

  constructor(
    private http: HttpClient) { }

  ngOnInit() 
  {
    this.http.get("http://localhost:3000/teams").subscribe(data => {
      console.log(data);
      this.registeredTeam=data;
    });

}}
