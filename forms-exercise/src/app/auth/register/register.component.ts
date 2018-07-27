import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {Register} from '../../model/Register';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  readonly AUTH_TOKEN = 'AUTH_TOKEN';
  readonly KMD = '_kmd';
  readonly USERNAME = 'USERNAME';
  readonly HOME_URL = '/';
  private register: Register;

  constructor(private service: AuthService, private router: Router) {
  }

  onRegister() {
    this.service.register(this.register)
      .subscribe(() => {
        this.router.navigate([this.HOME_URL]);
      });
  }

  ngOnInit() {
    this.register = new Register('', '', '', '', '');
  }

}
