import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/entities/navbar.service';
import { AuthService, UserDetails } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/entities/user.service';
import { FetchProfileService } from 'src/app/services/entities/fetch-profile.service';
import { TeamService } from 'src/app/services/entities/team.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //user: UserDetails;

  public userID: string;
  user = new User("", "", "", "", "", "", "");
  public teams: any = [];



  constructor(
    private navbar: NavbarService,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private fetchProfileService: FetchProfileService,
    private teamService: TeamService) { }

  ngOnInit() {

    this.navbar.show();



    this.fetchProfileService.fetchMyself().subscribe(result => {
      console.log(result);
      this.user = result;

      this.teamService.getTeamsByUserId().subscribe(result => {
        console.log(result);
        this.teams = result;
      })


    });





  }

}