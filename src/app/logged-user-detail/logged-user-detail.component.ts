import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logged-user-detail',
  templateUrl: './logged-user-detail.component.html',
  styleUrls: ['./logged-user-detail.component.scss']
})
export class LoggedUserDetailComponent implements OnInit {
  
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }
  //part of the code that allows the header to change depending wether or not a user is logged in
  public logout(): void{
    this.userservice.logout();
  }
}
