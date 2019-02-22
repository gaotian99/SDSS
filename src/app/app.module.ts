import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule } from "@angular/material";

//services
import { TeamService } from './services/entities/team.service';
import { UserService } from './services/entities/user.service';
import { LeagueService } from './services/entities/league.service';
import { MatchService } from './services/match/match.service';


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
import { LandingComponent } from './components/pages/landing/landing.component';
import { StandingsComponent } from './components/pages/standings/standings.component';
import { SportComponent } from './components/pages/sport/sport.component';
import { LeagueComponent } from './components/pages/league/league.component';
import { PlayerComponent } from './components/pages/player/player.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { NavbarService } from './services/entities/navbar.service';
import { FooterComponent } from './components/footer/footer.component';
import { FooterService } from './services/entities/footer.service';
import { ListMatchesComponent } from './components/list-matches/list-matches.component';
import { FetchProfileService } from './services/entities/fetch-profile.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { PlayerProfileComponent } from './components/pages/player-profile/player-profile.component';



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
    LandingComponent,
    StandingsComponent,
    SportComponent,
    LeagueComponent,
    TeamComponent,
    PlayerComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    FooterComponent,
    ListMatchesComponent,
    PlayerProfileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
  ],
  providers: [TeamService, UserService, LeagueService, MatchService, NavbarService, FooterService, ListMatchesComponent, FetchProfileService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
