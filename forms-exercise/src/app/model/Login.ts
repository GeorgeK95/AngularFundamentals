import {OnInit} from '@angular/core';

export class Login implements OnInit {

  constructor(
    public username: string,
    public password: string,
  ) {
  }

  ngOnInit() {
  }

}
