import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sport: string;
  league: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private sportService: SportService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.sport = params.sport;
        this.sportService.getSport(this.sport).subscribe(result => {
          this.sport = result.sport;
          console.log(result);
        })
      }
    })
  }

}
