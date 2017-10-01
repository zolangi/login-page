import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';


@Component({
  selector: 'my-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
  users: User[];
  selectedUser: User;

  constructor(
    private router: Router,
    private userService: UserService) { }
)

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  add(username: string): void  {
    username = username.trim();
    if(!name) { return; }
    this.userService.create(username)
      .then(user => {
        this.users.push(user);
        this.selectedUser = null;
      });
  }

  delete(user: User): void {
    this.userService
      .delete(user.id)
      .then(() => {
        this.users = this.users.filter(h => h !== user);
        if (this.selectedUser === user) { this.selectedUser = null; }
      });
  }


  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }


}
