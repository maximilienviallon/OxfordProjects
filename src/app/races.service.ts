import { Injectable } from '@angular/core';

export interface IRace {
  name: string;
  _id: string;
}


export class RacesService {

  private races: IRace[] = [
    {
      name: "race1",
      _id: "1"
    },
    {
      name: "hellorace",
      _id: "2"
    },
    {
      name: "beginner track",
      _id: "3"
    }
  ]
  constructor() { }
  public getRaces(): IRace[] {
    return this.races;
  }
}
