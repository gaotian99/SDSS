import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/entities/user.service';
import { User } from '../../../models/user';
import { TeamService } from 'src/app/services/entities/team.service';
import { Team } from 'src/app/models/team';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent {


  model = new User("","","","","","","", "");
  public teamID: string;

  public registeredTeam: any = [];

  constructor(private auth: AuthService, private userService: UserService, private teamService: TeamService) { }

  ngOnInit() {

    this.teamService.getTeams().subscribe(result => {
      console.log(result);
      this.registeredTeam=result;
    })
  }

  create() {
    this.auth.register(this.model).subscribe(result => {
      console.log(result);
    })
  };
}
