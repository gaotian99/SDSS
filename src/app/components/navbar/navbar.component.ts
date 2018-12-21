import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public sport: string;
  public league: any[];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private leagueService: LeagueService) { }

  //loads unique league information when the page loads
  ngOnInit() {

  }
}




