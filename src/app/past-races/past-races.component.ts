import { Component, OnInit } from '@angular/core';
import { IParticipant, ParticipantsService } from '../participants.service';
import { Subscription } from 'rxjs';
import { IRace, RacesService, IPastRace } from '../races.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-past-races',
  templateUrl: './past-races.component.html',
  styleUrls: ['./past-races.component.scss']
})
export class PastRacesComponent implements OnInit {
  private subscription: Subscription;

  public pastRace: IPastRace;

  constructor(private route: ActivatedRoute, private racesService: RacesService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => this.pastRace = this.racesService.getPastRaceById(params['id']))
  }
  public selectParticipant(id): void {
    console.log(id);
  }
}
