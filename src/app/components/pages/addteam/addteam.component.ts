import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TeamService } from '../../../services/entities/team.service';
import { Team } from '../../../models/team';
import { NavbarService } from 'src/app/services/entities/navbar.service';
import { LeagueService } from 'src/app/services/entities/league.service';
import { League } from 'src/app/models/league';
import { FooterService } from 'src/app/services/entities/footer.service';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css'],
})



export class AddteamComponent {

 
  teamModel = new Team("", "","");
  public league: any = [];


  


  constructor(private teamService: TeamService,
    private navbar: NavbarService,
    private leagueService: LeagueService,
    private footer: FooterService ) {

  }

  ngOnInit(){
    this.navbar.show();
    this.footer.show();

    this.leagueService.getLeagues().subscribe(result=> {
      console.log(result);
      this.league = result;

    })

  }

  create() {
    this.teamService.create(this.teamModel).subscribe(result => {
      console.log(result);
    })
  };

};
