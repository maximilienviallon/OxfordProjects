import { Component, OnInit, Input } from '@angular/core';
import { IRace } from '../races.service';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  @Input() title: string;
  @Input() races: IRace[];
  @Input() searchTerm: string;
  
  constructor() {}

  ngOnInit(): void {}
}
