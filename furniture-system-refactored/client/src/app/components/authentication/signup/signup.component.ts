import {Component, OnInit} from '@angular/core';
import {SignUpModel} from '../../../core/models/input/signup.model';
import {AuthService} from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: SignUpModel;

  constructor(private authService: AuthService) {
    this.model = new SignUpModel('', '', '');
  }

  ngOnInit() {
  }

  signUp() {
    this.authService
      .register(this.model)
      .subscribe();
  }

}
