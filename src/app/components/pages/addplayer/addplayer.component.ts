import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlayerService } from '../../../services/player.service';
import { Player } from '../../../models/player';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent {


  model = new Player("", "");
  teams = ['Kings', 'Celtics', 'Twolves'];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  

  create() {
    this.playerService.create(this.model).subscribe(result => {
      console.log(result);
    })
  };




}
