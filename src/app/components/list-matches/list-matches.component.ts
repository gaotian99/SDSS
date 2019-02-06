import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/models/team';
import { Match } from 'src/app/models/match';
import { UserService } from 'src/app/services/entities/user.service';
import { TeamService } from 'src/app/services/entities/team.service';
import { MatchService } from 'src/app/services/match/match.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.css']
})
export class ListMatchesComponent implements OnInit {

  @Input() initiator = 'guest';
  @Input() level = 0; //0=guest, 1=player, 2=team, 3=league, 4=globle
  @Input() token = null;
  @Input() twoTeam = true;
  @Input() title = 'Games';

  displayedColumns: string[] = []; //['gameDate', 'teams[0].name', 'teams[1].name', 'location'];
  teams: Team[] = [];
  teamsId: string[] = [];
  dataSource: Match[] = [];
  teamID: string;
  matchID: string;
  match: any[];

  // [{
  //   id: null,
  //   location: '',
  //   leagueID: null,
  //   teams: [{
  //     name: '',
  //     id: null,
  //     leagueID: null,
  //   }, {
  //     name: '',
  //     id: null,
  //     leagueID: null,
  //   }],
  // }];

  constructor(private userService: UserService,
    private teamService: TeamService,
    private matchService: MatchService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.teamID = params.id;
        this.matchService.getMatchesByTeam(this.teamID).subscribe(result => {
          this.match = result;
          console.log(result);
        })
      }
    })

  }


}


