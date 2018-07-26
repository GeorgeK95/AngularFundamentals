import {Component, OnInit} from '@angular/core';
import {Login} from '../model/Login';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  readonly HOME_URL = '/';
  readonly AUTH_TOKEN = 'authtoken';
  readonly DELETED = 'deleted';

  constructor(private service: AuthService, private router: Router) {
  }

  onLogout() {
    this.service.logout()
      .subscribe(res => {
        this.service.authToken = this.DELETED;
        localStorage.removeItem(this.AUTH_TOKEN);
        this.router.navigate([this.HOME_URL]);
      });
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.service.checkIfLoggedIn();
  }
}
