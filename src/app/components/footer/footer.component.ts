import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/entities/footer.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from 'src/app/services/entities/league.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(public footer: FooterService, private http: HttpClient, private activatedRoute: ActivatedRoute, private leagueService: LeagueService, private auth: AuthService) { }

  ngOnInit() {
  }

}
