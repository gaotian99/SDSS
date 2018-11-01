import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportspageComponent } from './components/pages/sportspage/sportspage.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ComplevelComponent } from './components/pages/complevel/complevel.component';
import { AddplayerComponent } from './components/pages/addplayer/addplayer.component';
import { AddteamComponent } from './components/pages/addteam/addteam.component';
import { DisplayteamsComponent } from './components/pages/displayteams/displayteams.component';
import { DisplayplayersComponent } from './components/pages/displayplayers/displayplayers.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'sportspageadd', component: SportspageComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'complevelpage', component: ComplevelComponent},
  { path: 'addplayer', component: AddplayerComponent},
  { path: 'addteam', component: AddteamComponent},
  { path: 'displayteams', component: DisplayteamsComponent},
  { path: 'displayplayers', component: DisplayplayersComponent},
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  
})
export class AppRoutingModule { }
