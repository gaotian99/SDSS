import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamService } from 'src/app/services/team.service';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  public team: any = [];

  constructor(
    private http: HttpClient,
    private teamService: TeamService,
    private leagueService: LeagueService) { }

  ngOnInit() {

    this.teamService.getTeams().subscribe(result => {
      console.log(result);
      this.team = result;
    }
    )}
}