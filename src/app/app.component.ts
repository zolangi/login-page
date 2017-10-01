import { Component } from '@angular/core';

export class Login {
  id: number;
  username: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Welcome to the Login Page';
  login: Login = {
    id: 1,
    username: 'Yellow',
    password: 'brown',
  };
}

