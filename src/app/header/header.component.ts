import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
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