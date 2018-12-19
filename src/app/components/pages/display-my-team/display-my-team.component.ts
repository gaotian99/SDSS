import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { Team } from '../../../models/team';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from '../../../models/player';




@Component({
  selector: 'app-display-my-team',
  templateUrl: './display-my-team.component.html',
  styleUrls: ['./display-my-team.component.css']
})
export class DisplayMyTeamComponent implements OnInit {

  public team: any;
  teamID: string;
  playerID: Player;
  users: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private teamService: TeamService, private playerService: PlayerService) { }



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
