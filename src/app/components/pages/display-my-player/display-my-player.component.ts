import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { Team } from '../../../models/team';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from '../../../models/player';

@Component({
  selector: 'app-display-my-player',
  templateUrl: './display-my-player.component.html',
  styleUrls: ['./display-my-player.component.css']
})
export class DisplayMyPlayerComponent implements OnInit {

  public player: any;
  playerID: string;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private playerService: PlayerService) { }



  deletePlayer(){
    this.playerService.deletePlayer(this.playerID).subscribe(result => {
      console.log(result);
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.playerID = params.id;
        this.playerService.getPlayer(this.playerID).subscribe(result => {
          this.player = result;
          console.log(result);
        })
      }
    })
  }

}
