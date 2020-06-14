import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IParticipant } from '../participants.service';


@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss']
})
export class ParticipantsListComponent implements OnInit {
  @Input() participants: IParticipant[];
  @Input() searchTerm: string;
  @Output() selectParticipant = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
