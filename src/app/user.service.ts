import { Injectable } from '@angular/core';

export enum Permission {
  ADMIN = 'Admin',
  TEAM_MEMBER = 'Team member'
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  
  permission: Permission
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = {
    _id: 'some id',
    firstName: 'John',
    lastName: 'Doe',
    
    permission: Permission.ADMIN
  }

  constructor() { }

  getUser(): User {
    return this.user;
  }
  logout(): void{
    this.user = undefined;
    console.log(this.user);
  }
}