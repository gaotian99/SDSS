import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-display-my-team',
  templateUrl: './display-my-team.component.html',
  styleUrls: ['./display-my-team.component.css']
})
export class DisplayMyTeamComponent implements OnInit {

  public registeredTeam: any=[];
  teamID:String;
  
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() 
  {
    this.activatedRoute.params.subscribe(params=>
      {

      if(params && params.id)
      {
        this.teamID = params.id;
        console.log("hello");
        this.http.get("http://localhost:3000/teams/" + this.teamID).subscribe(data => 
        {
          console.log(data);
          this.registeredTeam=data;
        })
      }})
  }}
