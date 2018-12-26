import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamService } from 'src/app/services/entities/team.service';
import { LeagueService } from 'src/app/services/entities/league.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  public team: any = [];
  public teamID: string;

  constructor(
    private http: HttpClient,
    private teamService: TeamService,
    private leagueService: LeagueService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.teamID = params.id;
        this.teamService.getTeam(this.teamID).subscribe(result => {
          this.team = result.team;
          console.log(result);
        })
      }
    })
  
  
  
  }
}