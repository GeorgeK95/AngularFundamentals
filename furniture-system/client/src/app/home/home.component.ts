import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly USERNAME = 'username';
  username: string;

  constructor() {
  }

  ngOnInit() {
    const currentUser = localStorage.getItem(this.USERNAME);
    if (currentUser) {
      this.username = currentUser;
    }
  }

}
