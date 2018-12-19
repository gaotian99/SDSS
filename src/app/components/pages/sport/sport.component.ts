import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  sport: string;

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
