import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/entities/team.service';
import { Team } from '../../../models/team';
import { User } from '../../../models/user';




@Component({
  selector: 'app-display-my-team',
  templateUrl: './display-my-team.component.html',
  styleUrls: ['./display-my-team.component.css']
})
export class DisplayMyTeamComponent implements OnInit {

  public team: any;
  teamID: string;
  //playerID: User;
  users: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private teamService: TeamService) { }



  deleteTeam() {
    this.teamService.deleteTeam(this.teamID).subscribe(result => {
      console.log(result);
    })
  }
  modifyTeam(){
    this.teamService.modifyTeam(this.teamID).subscribe(result=> {
      console.log(result);
    })
  }



  //loads unique team information when the page loads
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.teamID = params.id;
        this.teamService.getTeam(this.teamID).subscribe(result => {
          this.team = result.team;
          console.log(result);
        })
      }
    })
  }
}
