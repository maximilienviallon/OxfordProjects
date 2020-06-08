import { Component, OnInit, Input, Injectable } from '@angular/core';
import { IParticipant, ParticipantsService } from '../participants.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-onging-race',
  templateUrl: './onging-race.component.html',
  styleUrls: ['./onging-race.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class OngingRaceComponent implements OnInit {
  public participants: IParticipant[];
  
  constructor(private participantsService: ParticipantsService) { }

  ngOnInit(): void {
    this.participants = this.participantsService.getParticipants();
  }

}
