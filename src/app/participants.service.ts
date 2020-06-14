import { Injectable } from '@angular/core';

//same as races service but for participant

export interface IParticipant {
  name: string;
  teamName: string;
  position: number;
  _id: string;
}

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private participants: IParticipant[] =[
    {
      name: "John",
      teamName: "can't",
      position: 1,
      _id: "1"
    },
    {
      name: "Carl The Man",
      teamName: "Think of",
      position: 2,
      _id: "2"
    },
    {
      name: "Sonic",
      teamName: "a team name",
      position: 3,
      _id: "3"
    }
  ]
  constructor() { }
  public getParticipants(): IParticipant[] {
    return this.participants;
  }
}