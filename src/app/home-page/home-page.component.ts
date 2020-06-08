import { Component, OnInit } from '@angular/core';
import { IRace, RacesService } from '../races.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public races: IRace[];
  constructor(private racesService: RacesService){}
  public ngOnInit(): void {
    this.races = this.racesService.getRaces();
  }

}
