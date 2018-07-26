import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Login} from '../../model/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  readonly AUTH_TOKEN = 'authtoken';
  readonly KMD = '_kmd';
  readonly USERNAME = 'username';
  readonly HOME_URL = '/';
  private loginForm: FormGroup;

  constructor(private service: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onLogin(data: Login) {
    this.service.login(data)
      .subscribe(res => {
        this.service.authToken = res[this.KMD][this.AUTH_TOKEN];
        localStorage.setItem(this.AUTH_TOKEN, res[this.KMD][this.AUTH_TOKEN]);
        this.router.navigate([this.HOME_URL]);
      });
  }

  ngOnInit() {
  }

}
