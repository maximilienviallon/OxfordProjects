import { Component, OnInit, Input } from '@angular/core';
import { IParticipant } from '../participants.service';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss']
})
export class ParticipantsListComponent implements OnInit {
  @Input() participants: IParticipant[];
  @Input() searchTerm: string;
  constructor() { }

  ngOnInit(): void {
  }

}
