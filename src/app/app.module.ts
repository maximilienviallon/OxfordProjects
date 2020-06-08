import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RaceListComponent } from './race-list/race-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { CreateRaceComponent } from './create-race/create-race.component';
import { RaceFilterPipe } from './home-page/race-filter.pipe';
import { PastRacesComponent } from './past-races/past-races.component';
import { OngingRaceComponent } from './onging-race/onging-race.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RaceListComponent,
    HomePageComponent,
    RaceDetailsComponent,
    CreateRaceComponent,
    RaceFilterPipe,
    PastRacesComponent,
    OngingRaceComponent,
    ParticipantsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
