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
  private registerForm: FormGroup;

  constructor(private service: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      confirm: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl('')
    });
  }

  onRegister(data: Register) {
    this.service.register(data)
      .subscribe(res => {
        this.router.navigate([this.HOME_URL]);
      });
  }

  ngOnInit() {
  }

}
