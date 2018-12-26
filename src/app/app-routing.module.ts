import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComplevelComponent } from './components/pages/complevel/complevel.component';
import { AddplayerComponent } from './components/pages/addplayer/addplayer.component';
import { AddteamComponent } from './components/pages/addteam/addteam.component';
import { TeamComponent } from './components/pages/team/team.component';
import { DisplayplayersComponent } from './components/pages/displayplayers/displayplayers.component';
import { DisplayMyTeamComponent } from './components/pages/display-my-team/display-my-team.component';
import { PlayerComponent } from './components/pages/player/player.component';
import { StandingsComponent } from './components/pages/standings/standings.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { LeagueComponent } from './components/pages/league/league.component';
import { SportComponent } from './components/pages/sport/sport.component';


const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'complevelpage', component: ComplevelComponent},
  { path: 'addplayer', component: AddplayerComponent},
  { path: 'addteam', component: AddteamComponent},
  { path: 'team', component: TeamComponent},
  { path: 'player', component: DisplayplayersComponent},  
  { path: 'team/:id', component: TeamComponent},
  { path: 'player/:id', component: PlayerComponent},
  { path: 'standings', component: StandingsComponent},
  { path: 'landing', component: LandingComponent},
  { path: 'sport/:sport', component: SportComponent},
  { path: 'league/:id', component: LeagueComponent},

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  
})
export class AppRoutingModule { }
