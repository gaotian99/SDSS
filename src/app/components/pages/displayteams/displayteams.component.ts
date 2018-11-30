import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-displayteams',
  templateUrl: './displayteams.component.html',
  styleUrls: ['./displayteams.component.css']
})
export class DisplayteamsComponent implements OnInit {

  public registeredTeam: any = [];

  constructor(
    private http: HttpClient,
    private teamService: TeamService) { }

  ngOnInit() {

    this.teamService.getTeams().subscribe(result => {
      console.log(result);
      this.registeredTeam=result;
    })



    // this.http.get("http://localhost:3000/teams").subscribe(data => {
    //   console.log(data);
    //   this.registeredTeam=data;
    // });

}
}
