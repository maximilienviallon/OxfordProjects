import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPastRace, RacesService, IFutureRace } from '../races.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-future-races',
  templateUrl: './future-races.component.html',
  styleUrls: ['./future-races.component.scss']
})
export class FutureRacesComponent implements OnInit {
  private subscription: Subscription;

  public futureRace: IFutureRace;

  constructor(private route: ActivatedRoute, private racesService: RacesService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => this.futureRace = this.racesService.getFutureRaceById(params['id']))
  }
  public selectParticipant(id): void {
    console.log(id);
  }
}
