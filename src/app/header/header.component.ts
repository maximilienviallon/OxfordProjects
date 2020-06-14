import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
//This component adds a header on each url, the header can change based on authentication so that if a user is already logged in they cannot 
//log themselves in again without loging out first
export class HeaderComponent implements OnInit, OnDestroy {

  public currentUser: User;

  private subcription = new Subscription();

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.currentUser = this.userService.getUser();

    this.subcription.add(
      this.userService.userChange.subscribe(user => this.currentUser = user)
    )
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }



}