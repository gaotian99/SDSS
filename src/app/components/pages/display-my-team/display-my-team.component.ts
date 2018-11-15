import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-display-my-team',
  templateUrl: './display-my-team.component.html',
  styleUrls: ['./display-my-team.component.css']
})
export class DisplayMyTeamComponent implements OnInit {

  public registeredTeam: any=[];
  
  constructor(private http: HttpClient) { }

  ngOnInit() 
  {
    this.http.get("http://localhost:3000/teams/:id").subscribe(data => {
      console.log(data);
      this.registeredTeam=data;
    });

}}
