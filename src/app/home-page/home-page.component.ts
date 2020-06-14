import { Component, OnInit } from '@angular/core';
import { IRace, RacesService, IFutureRace, IPastRace } from '../races.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public races: IRace[];
  public futureraces: IFutureRace[];
  public pastraces: IPastRace[];
  constructor(private racesService: RacesService){}
  public ngOnInit(): void {
    this.races = this.racesService.getRaces();
    this.futureraces = this.racesService.getFutureRaces();
    this.pastraces = this.racesService.getPastRaces();
  }

}
