import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { Team } from '../../../models/team';




@Component({
  selector: 'app-display-my-team',
  templateUrl: './display-my-team.component.html',
  styleUrls: ['./display-my-team.component.css']
})
export class DisplayMyTeamComponent implements OnInit {

  public registeredTeam: any;
  teamID: string;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private teamService: TeamService) { }



  deleteTeam() {
    this.teamService.deleteTeam(this.teamID).subscribe(result => {
      console.log(result);
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.teamID = params.id;
        this.teamService.getTeam(this.teamID).subscribe(result => {
          this.registeredTeam = result.team;
          console.log(result);
        })
      }
    })
  }
}
