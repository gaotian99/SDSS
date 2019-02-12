import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/entities/team.service';
import { NavbarService } from 'src/app/services/entities/navbar.service';
import { FooterService } from 'src/app/services/entities/footer.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/entities/user.service';
import { User } from 'src/app/models/user';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  userID: string;
  user: User;
  public teams: any = [];

  constructor(
    private http: HttpClient,
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute,
    private navbar: NavbarService,
    private footer: FooterService,
    private auth: AuthService,
    private userService: UserService,
  ) { }



  ngOnInit() {

    this.navbar.show();
    this.footer.show();



    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.userID = params.id;
        this.userService.getUser(this.userID).subscribe(result=>
          {
            this.user=result;
            console.log(this.user);
          })
      }
    });

    this.activatedRoute.params.subscribe(params=>{
      if(params && params.id) {
        this.userID = params.id;
        this.teamService.getTeamsByUserId(this.userID).subscribe(result=> {
          this.teams=result;
          console.log(this.teams);
        })
      }
    });

    


  }

}
