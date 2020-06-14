import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { CreateRaceComponent } from './create-race/create-race.component';
import { OngingRaceComponent } from './onging-race/onging-race.component';
import { PastRacesComponent } from './past-races/past-races.component';
import { FutureRacesComponent } from './future-races/future-races.component';
import { LogInComponent } from './log-in/log-in.component';
import { LoggedUserDetailComponent } from './logged-user-detail/logged-user-detail.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'race/:id', component: RaceDetailsComponent },
  { path: 'create-race', component: CreateRaceComponent },
  { path: 'past-race/:id', component: PastRacesComponent },
  { path: 'ongoing-race/:id', component: OngingRaceComponent},
  { path: 'future-race/:id', component: FutureRacesComponent},
  { path: 'log-in', component: LogInComponent},
  { path: "logged-user", component: LoggedUserDetailComponent},
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
