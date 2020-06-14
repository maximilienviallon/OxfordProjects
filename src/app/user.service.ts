import { Subject } from 'rxjs';
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

  public user: User = {
    _id: 'some id',
    firstName: 'John',
    lastName: 'Doe',
    permission: Permission.ADMIN
  }

  userChange = new Subject<User>();

  constructor() {
    this.userChange.subscribe((value) => {
      this.user = value
    });
   }

  getUser(): User {
    return this.user;
  }
  logout(): void{
    this.userChange.next(undefined);
  }
  login(): void {
    this.userChange.next(
      {
        _id: 'some id',
        firstName: 'John',
        lastName: 'Doe',
        permission: Permission.ADMIN
      }
    );
  }
}