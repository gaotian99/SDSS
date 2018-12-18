import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-display-leagues',
  templateUrl: './display-leagues.component.html',
  styleUrls: ['./display-leagues.component.css']
})
export class DisplayLeaguesComponent implements OnInit {

  public league: any = [];

  constructor(
    private http: HttpClient,
    private leagueService: LeagueService) { }

  ngOnInit() {
    
    this.leagueService.getLeagues().subscribe(result => {
      console.log(result);
      this.league=result;
    })
  }

}
