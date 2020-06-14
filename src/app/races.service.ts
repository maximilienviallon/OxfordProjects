import { Injectable } from '@angular/core';
import { IParticipant } from './participants.service';

//this service is for the mangement of races so we can retrieve data and send data to backend
export interface ICoordinates{
long: number;
lat: number;
}

export interface IPastRace{
  name: string;
  members: IParticipant[];
  //boatname: string[];
  //lapTime: Date;
  //date: Date; 
  
  _id: string;
}

export interface IRace {
  name: string;
  members: IParticipant[];
  //boatname: string[];
  //lapTime: Date;
  //date: Date;
  coordinates: ICoordinates[];
  _id: string;
}

export interface IFutureRace{
  name: string;
  members: IParticipant[];
  //boatname: string[];
  //date: Date;
  _id: string;
}

@Injectable({
  providedIn: 'root'
})

export class RacesService {

  private pastraces: IPastRace[] = [
    {
      name: "past race 1",
      members:[
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
      }],
      _id: "4"
    },

    {
      name: " is done",
      members: [
        {
          name: "joey",
          teamName: "a",
          position: 1,
          _id: "4"
        },
        {
          name: "Carl The Man 2",
          teamName: "b",
          position: 2,
          _id: "5"
        },
        {
          name: "donald",
          teamName: "c",
          position: 3,
          _id: "6"
        }],
      _id: "5"
    }
  ];
  private races: IRace[] = [
    {
      name: "race1",
      members: [
        {
          name: "Luigi",
          teamName: "c",
          position: 1,
          _id: "7"
        },
        {
          name: "Carl The Man 3",
          teamName: "d",
          position: 2,
          _id: "8"
        },
        {
          name: "Mickey",
          teamName: "e",
          position: 3,
          _id: "9"
        }],
        coordinates:[{
          long:54,
          lat:12
        }],
      _id: "1"
    },
    {
      name: "hellorace",
      members: [
        {
          name: "mario",
          teamName: "f",
          position: 1,
          _id: "10"
        },
        {
          name: "Carl The Man 4",
          teamName: "g",
          position: 2,
          _id: "11"
        },
        {
          name: "sora",
          teamName: "h",
          position: 3,
          _id: "12"
        }],
        coordinates:[{
          long: 180,
          lat: 54
        },
      {
        long: 456,
        lat: 136
      }],
      _id: "2"
    },
    {
      name: "beginner track",
      members: [
        {
          name: "monica",
          teamName: "i",
          position: 1,
          _id: "13"
        },
        {
          name: "Carl The Man 5",
          teamName: "j",
          position: 2,
          _id: "14"
        },
        {
          name: "gollum",
          teamName: "k",
          position: 3,
          _id: "15"
        }],
        coordinates:[{
          long:360,
          lat:976
        }],
      _id: "3"
    }
  ];
  private futureraces: IFutureRace[] = [
    {
      name: "future race 2",
      members: [
        {
          name: "gandalf",
          teamName: "l",
          position: 1,
          _id: "16"
        },
        {
          name: "Carl The Man 6",
          teamName: "m",
          position: 2,
          _id: "17"
        },
        {
          name: "boromir",
          teamName: "team always dies",
          position: 3,
          _id: "18"
        }],
      _id: "6"
    },
    {
      name: "future race 3",
      members: [
        {
          name: "arthur",
          teamName: "l",
          position: 1,
          _id: "19"
        },
        {
          name: "Carl The Man 7",
          teamName: "b",
          position: 2,
          _id: "20"
        },
        {
          name: "ned",
          teamName: "team always dies",
          position: 3,
          _id: "21"
        }],
      _id: "8"
    },
    {
      name:"is to be",
      members: [
        {
          name: "merlin",
          teamName: "a",
          position: 1,
          _id: "22"
        },
        {
          name: "Carl The Man 8",
          teamName: "b",
          position: 2,
          _id: "23"
        },
        {
          name: "dumbledore",
          teamName: "c",
          position: 3,
          _id: "24"
        }],
      _id:"7"
    }
  ];
  constructor() { }
  public getRaces(): IRace[] {
    return this.races;
  }
  public getPastRaces(): IPastRace[] {
    return this.pastraces;
  }
  public getFutureRaces(): IFutureRace[] {
    return this.futureraces;
  }
  public getPastRaceById(id){
    return this.pastraces.find(race => race._id === id);
  }
  public getFutureRaceById(id){
    return this.futureraces.find(race => race._id === id);
  }
  public getRaceById(id){
    return this.races.find(race => race._id === id);
  }
}
