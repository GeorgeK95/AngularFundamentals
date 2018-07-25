import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  readonly AUTH_TOKEN = 'AUTH_TOKEN';
  readonly KMD = '_kmd';
  readonly USERNAME = 'USERNAME';
  readonly HOME_URL = '/home';
  private loginForm: FormGroup;

  constructor(private service: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onLogin(data) {
    // this.service.login()
    this.service.authToken = data[this.KMD][this.AUTH_TOKEN];
    localStorage.setItem('AUTH_TOKEN', data[this.USERNAME]);
    this.router.navigate([this.HOME_URL]);
  }

  ngOnInit() {
  }

}
