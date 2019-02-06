import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/entities/team.service';
import { NavbarService } from 'src/app/services/entities/navbar.service';
import { FooterService } from 'src/app/services/entities/footer.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  userID: string;

  constructor(
    private http: HttpClient,
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute,
    private navbar: NavbarService,
    private footer: FooterService,
    private auth: AuthService,
  ) { }



  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.userID = params.id;
        //WHAT DO I WANT TO DISPLAY ON THIS PAGE?
      }
    });

    


  }

}
