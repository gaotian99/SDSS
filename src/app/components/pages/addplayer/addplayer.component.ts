import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlayerService } from '../../../services/player.service';
import { Player } from '../../../models/player';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent {


  model = new Player("", "");
  public registeredTeam: any = [];

  constructor(private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit() {

    this.teamService.getTeams().subscribe(result => {
      console.log(result);
      this.registeredTeam=result;
    })
  }



  create() {
    this.playerService.create(this.model).subscribe(result => {
      console.log(result);
    })
  };




}
