import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TeamService } from '../../../services/team.service';
import { Team } from '../../../models/team';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css'],
})



export class AddteamComponent {

 
  model = new Team("", "");
  sports = ['Basketball', 'Volleyball', 'Soccer', 'Softball', 'Hockey', 'Flag Football']


  constructor(private teamService: TeamService) {

  }

  // ngOnInit(){
  //   this.create("");
  // }

  create() {
    this.teamService.create(this.model).subscribe(result => {
      console.log(result);
    })
  };

};
