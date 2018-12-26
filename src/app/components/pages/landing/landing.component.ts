import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeagueService } from 'src/app/services/entities/league.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public league: any = [];

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    
    this.leagueService.getLeagues().subscribe(result => {
      console.log(result);
      this.league=result;
    })
  }

}
