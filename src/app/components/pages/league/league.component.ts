import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeagueService } from 'src/app/services/league.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  public league: any = [];
  public leagueID: string;

  constructor(
    private http: HttpClient,
    private leagueService: LeagueService,
    private activatedRoute: ActivatedRoute) { }

  
  ngOnInit() {


    //loads unique league information when the page loads
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.leagueID = params.id;
        this.leagueService.getLeague(this.leagueID).subscribe(result => {
          console.log(result);
          console.log("hello");
          this.league=result;
        })
      }
    })

    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.leagueID = params.id;
        this.leagueService.getLeague(this.leagueID).subscribe(result => {
          console.log(result);
          console.log("hello");
          this.league=result;
        })
      }
    })







  }

}
