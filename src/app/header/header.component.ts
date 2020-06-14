import { Component, OnInit } from '@angular/core';
import { User, UserService, Permission } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentUser: User;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.currentUser = this.userService.getUser();
  }

  public isAdmin() {
    return this.currentUser.permission === Permission.ADMIN;
  }

}
