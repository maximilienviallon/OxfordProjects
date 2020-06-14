import { Component, OnInit, Input } from '@angular/core';
import { IRace, IFutureRace, IPastRace } from '../races.service';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  @Input() title: string;
  @Input() races: IRace[];
  @Input() futureraces: IFutureRace[];
  @Input() pastraces: IPastRace[];
  @Input() searchTerm: string;
  
  constructor() {}

  ngOnInit(): void {}
}
