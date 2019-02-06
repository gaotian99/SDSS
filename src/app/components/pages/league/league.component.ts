import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeagueService } from 'src/app/services/entities/league.service';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/entities/team.service';
import { NavbarService } from 'src/app/services/entities/navbar.service';
import { FooterService } from 'src/app/services/entities/footer.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  public league: any = [];
  public leagueID: string;
  public team: any = [];

  constructor(
    private http: HttpClient,
    private leagueService: LeagueService,
    private activatedRoute: ActivatedRoute,
    private teamService: TeamService,
    private navbar: NavbarService,
    private footer: FooterService, ) { }



  ngOnInit() {

    this.navbar.show();


    // //loads unique league information when the page loads
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.leagueID = params.id;
        this.leagueService.getLeague(this.leagueID).subscribe(result => {
          console.log(result);
          this.league = result;
        })
      }
    })

    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.leagueID = params.id;
        this.teamService.getTeamsByLeagueID(this.leagueID).subscribe(result => {
          console.log(result);
          this.team = result;
        })
      }
    })
    this.footer.show();



  }

}
