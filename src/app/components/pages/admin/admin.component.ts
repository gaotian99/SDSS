import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/entities/league.service';
import { MatchService } from 'src/app/services/match/match.service';
import { MatchResultService } from 'src/app/services/match/match-result.service';
import { TeamService } from 'src/app/services/entities/team.service';
import { UserService } from 'src/app/services/entities/user.service';
import { League } from 'src/app/models/league';
import { User } from 'src/app/models/user';
import { Team } from 'src/app/models/team';
import { Match } from 'src/app/models/match';
import { MatchResult } from 'src/app/models/matchResult';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  leagueModel = new League("","", "", new Date, "", "", "", "", "", "");
  userModel = new User("", "", "", "", "", "", "","");
  teamModel = new Team("", "", "");
  matchModel = new Match("", new Date);
  matchResultModel = new MatchResult(true, "", "");

  public leagueManager: User;
  public teamCaptain: User;
  public leagues: League;
  public matches: Match;





  constructor(
    private leagueService: LeagueService,
    private matchService: MatchService,
    private matchResultService: MatchResultService,
    private teamService: TeamService,
    private userService: UserService) { }


  createLeague() {
    this.leagueService.create(this.leagueModel).subscribe(result => {
      console.log(result);
    })
  };
  createUser() {
    this.userService.create(this.userModel).subscribe(result => {
      console.log(result);
    })
  }
  createTeam() {
    this.teamService.create(this.teamModel).subscribe(result => {
      console.log(result);
    })
  };
  createMatch() {
    this.matchService.create(this.matchModel).subscribe(result => {
      console.log(result);
    })
  };
  createMatchResult() {
    this.matchResultService.create(this.matchResultModel).subscribe(result => {
      console.log(result);
    })
  }

  ngOnInit() {

    this.userService.getLeagueManagers().subscribe(result => {
      console.log(result);
      this.leagueManager = result;

    })

    this.leagueService.getLeagues().subscribe(result => {
      console.log(result);
      this.leagues= result;
    })

    this.matchService.getMatches().subscribe(result => {
      console.log(result);
      this.matches=result;
    })



  }

}
