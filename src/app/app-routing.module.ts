import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ComplevelComponent } from './components/pages/complevel/complevel.component';
import { AddplayerComponent } from './components/pages/addplayer/addplayer.component';
import { AddteamComponent } from './components/pages/addteam/addteam.component';
import { DisplayteamsComponent } from './components/pages/displayteams/displayteams.component';
import { DisplayplayersComponent } from './components/pages/displayplayers/displayplayers.component';
import { DisplayMyTeamComponent } from './components/pages/display-my-team/display-my-team.component';
import { DisplayMyPlayerComponent } from './components/pages/display-my-player/display-my-player.component';
import { StandingsComponent } from './components/pages/standings/standings.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { DisplayLeaguesComponent } from './components/pages/display-leagues/display-leagues.component';
import { SportComponent } from './components/pages/sport/sport.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'complevelpage', component: ComplevelComponent},
  { path: 'addplayer', component: AddplayerComponent},
  { path: 'addteam', component: AddteamComponent},
  { path: 'team', component: DisplayteamsComponent},
  { path: 'player', component: DisplayplayersComponent},  
  { path: 'team/:id', component: DisplayMyTeamComponent},
  { path: 'player/:id', component: DisplayMyPlayerComponent},
  { path: 'standings', component: StandingsComponent},
  { path: 'landing', component: LandingComponent},
  { path: 'league/:sport', component: DisplayLeaguesComponent},
  { path: 'sport/:sport', component: SportComponent},
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  
})
export class AppRoutingModule { }
