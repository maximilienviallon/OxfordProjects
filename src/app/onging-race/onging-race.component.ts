import { Component, OnInit, Input, Injectable } from '@angular/core';
import { IParticipant, ParticipantsService } from '../participants.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RacesService, IRace } from '../races.service';




@Component({
  selector: 'app-onging-race',
  templateUrl: './onging-race.component.html',
  styleUrls: ['./onging-race.component.scss']
})
@Injectable({
  providedIn: 'root'
})

export class OngingRaceComponent implements OnInit {
  private subscription: Subscription;

  public race: IRace;

  constructor(private route: ActivatedRoute, private racesService: RacesService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => this.race = this.racesService.getRaceById(params['id']))
  }
  public selectParticipant(id): void {
    console.log(id);
  }


}
