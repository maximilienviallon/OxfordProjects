import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { CreateRaceComponent } from './create-race/create-race.component';
import { OngingRaceComponent } from './onging-race/onging-race.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'race/:id', component: RaceDetailsComponent },
  { path: 'create-race', component: CreateRaceComponent },
  { path: 'ongoing-race', component: OngingRaceComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
