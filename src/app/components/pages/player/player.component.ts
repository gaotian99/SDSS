import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/entities/team.service';
import { Team } from '../../../models/team';
import { User } from '../../../models/user';
import { UserService } from 'src/app/services/entities/user.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public user: any;
  userID: string;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private userService: UserService) { }



  deletePlayer(){
    this.userService.deleteUser(this.userID).subscribe(result => {
      console.log(result);
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.userID = params.id;
        this.userService.getUser(this.userID).subscribe(result => {
          this.user = result;
          console.log(result);
        })
      }
    })
  }

}