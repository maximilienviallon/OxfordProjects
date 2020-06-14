import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  public login(): void{
    this.userService.login();
  }
}
