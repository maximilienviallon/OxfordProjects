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
  public logout(): void{
    this.userservice.logout();
  }
}
