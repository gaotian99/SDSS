import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//services
import { TeamService } from './services/entities/team.service';
import { UserService } from './services/entities/user.service';
import { LeagueService } from './services/entities/league.service';
import { MatchService } from './services/match/match.service';
import { MatchResultService } from './services/match/match-result.service';


//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComplevelComponent } from './components/pages/complevel/complevel.component';
import { AppRoutingModule } from './app-routing.module';
import { AddteamComponent } from './components/pages/addteam/addteam.component';
import { AddplayerComponent } from './components/pages/addplayer/addplayer.component';
import { TeamComponent } from './components/pages/team/team.component';
import { DisplayplayersComponent } from './components/pages/displayplayers/displayplayers.component';
import { DisplayMyTeamComponent } from './components/pages/display-my-team/display-my-team.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { StandingsComponent } from './components/pages/standings/standings.component';
import { SportComponent } from './components/pages/sport/sport.component';
import { LeagueComponent } from './components/pages/league/league.component';
import { PlayerComponent } from './components/pages/player/player.component';
import { AdminComponent } from './components/pages/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComplevelComponent,
    AddteamComponent,
    AddplayerComponent,
    TeamComponent,
    DisplayplayersComponent,
    DisplayMyTeamComponent,
    SignInComponent,
    LandingComponent,
    StandingsComponent,
    SportComponent,
    LeagueComponent,
    TeamComponent,
    PlayerComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TeamService, UserService, LeagueService, MatchService, MatchResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
