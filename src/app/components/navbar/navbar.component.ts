import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from 'src/app/services/entities/league.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import {NavbarService} from '../../services/entities/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public sport: string;
  public league: any[];

  

  constructor(public nav: NavbarService, private http: HttpClient, private activatedRoute: ActivatedRoute, private leagueService: LeagueService, private auth: AuthService) { }






  ngOnInit() {

  }
}




