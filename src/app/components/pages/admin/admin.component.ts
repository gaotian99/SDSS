import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/entities/league.service';
import { MatchService } from 'src/app/services/match/match.service';
import { MatchResultService } from 'src/app/services/match/match-result.service';
import { TeamService } from 'src/app/services/entities/team.service';
import { UserService } from 'src/app/services/entities/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private leagueService: LeagueService, 
    private matchService: MatchService, 
    private matchResultService: MatchResultService,
    private teamService: TeamService,
    private userService: UserService) { }

  ngOnInit() {
  }

}
