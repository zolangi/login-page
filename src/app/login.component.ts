import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from 'user.service';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})

export class LoginComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .then(users => this.users = users.slice(1, 5));
  }
}

