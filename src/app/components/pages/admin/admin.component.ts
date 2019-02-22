import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/entities/league.service';
import { MatchService } from 'src/app/services/match/match.service';
import { TeamService } from 'src/app/services/entities/team.service';
import { UserService } from 'src/app/services/entities/user.service';
import { League } from 'src/app/models/league';
import { User } from 'src/app/models/user';
import { Team } from 'src/app/models/team';
import { Match } from 'src/app/models/match';
import { MatchResult } from 'src/app/models/matchResult';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavbarService } from 'src/app/services/entities/navbar.service';
import { FooterService } from 'src/app/services/entities/footer.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  leagueModel = new League("","", "", new Date, "", "", "", "", "", "");
  userModel = new User("", "", "", "", "", "","");
  teamModel = new Team("", "", "");
  matchModel = new Match("", new Date);
  matchResultModel = new MatchResult(true, "", "");
  role = ["player", "captain", "league manager", "admin"];
  
  public users: any = [];
  public leagueManager: User;
  public teamCaptain: User;
  public leagues: League;
  public matches: Match;





  constructor(
    private leagueService: LeagueService,
    private matchService: MatchService,
    private teamService: TeamService,
    private userService: UserService,
    private auth: AuthService,
    private navbar: NavbarService,
    private footer: FooterService) { }


  createLeague() {
    this.leagueService.create(this.leagueModel).subscribe(result => {
      console.log(result);
    })
  };
  createUser() {
    this.auth.register(this.userModel).subscribe(result => {
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
  updateUser(){
    this.userService.update(this.userModel).subscribe(result => {
      console.log(result);
    })
  }

  ngOnInit() {

    this.navbar.show();
    this.footer.show();

    this.userService.getLeagueManagers().subscribe(result => {
      console.log(result);
      this.leagueManager = result;
    })

    this.userService.getUsers().subscribe(result => {
      console.log(result);
      this.users = result;
    });

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
