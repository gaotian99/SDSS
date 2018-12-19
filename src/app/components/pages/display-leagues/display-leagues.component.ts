import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeagueService } from 'src/app/services/league.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-leagues',
  templateUrl: './display-leagues.component.html',
  styleUrls: ['./display-leagues.component.css']
})
export class DisplayLeaguesComponent implements OnInit {

  public league: any = [];
  sport: any;

  constructor(
    private http: HttpClient,
    private leagueService: LeagueService,
    private activatedRoute: ActivatedRoute) { }

  //loads unique league information when the page loads
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      if (params && params.sport) {
        this.sport = params.sport;
        this.leagueService.getLeague(this.sport).subscribe(result => {
          this.sport = result.sport;
          console.log(result);
          console.log("hello");
        })
      }
    })
  }

}
