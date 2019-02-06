import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamService } from 'src/app/services/entities/team.service';
import { LeagueService } from 'src/app/services/entities/league.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from 'src/app/services/entities/navbar.service';
import { FooterService } from 'src/app/services/entities/footer.service';
import { ListMatchesComponent } from '../../list-matches/list-matches.component';
import { MatchService } from 'src/app/services/match/match.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  public team: any = [];
  public teamID: string;
  public match: any = [];

  constructor(
    private http: HttpClient,
    private teamService: TeamService,
    private leagueService: LeagueService,
    private activatedRoute: ActivatedRoute,
    private nav: NavbarService,
    private footer: FooterService,
    private matchService: MatchService) { }

  ngOnInit() {


    this.nav.show();
    this.footer.show();

    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.teamID = params.id;
        this.teamService.getTeam(this.teamID).subscribe(result => {
          this.team = result.team;
          console.log(result);
        })
      }
    })

    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.teamID = params.id;
        this.matchService.getMatchesByTeam(this.teamID).subscribe(result => {
          this.match = result;
          console.log(result);
        })
      }
    })

  
  
  
  }
}