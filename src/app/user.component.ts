import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  constructor(
     userid: number,
     username: string,
     password: string,
  ){}
}
