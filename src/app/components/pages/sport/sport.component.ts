import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  public sport: string;
  public league: any = [];


  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private leagueService: LeagueService) { }


  //loads all the leagues from a specific sport
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      if (params && params.sport) {
        this.sport = params.sport;
        this.leagueService.getLeaguesBySport(this.sport).subscribe(result => {
          console.log(result);
          console.log("hello");
          this.league=result;
        })
      }
    })
  }
}
