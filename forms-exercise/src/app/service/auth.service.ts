import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../model/Login';
import {Register} from '../model/Register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly AUTH_TOKEN = 'authtoken';
  readonly appKey = 'kid_ByPIO8U4m'; // APP KEY HERE;
  readonly appSecret = '76db300b067e4b42b8747b04512bbd3c'; // APP SECRET HERE;
  readonly registerUrl = `https://baas.kinvey.com/user/${this.appKey}`;
  readonly loginUrl = `https://baas.kinvey.com/user/${this.appKey}/login`;
  readonly logoutUrl = `https://baas.kinvey.com/user/${this.appKey}/_logout`;
  readonly TYPE_BASIC = 'Basic';
  readonly TYPE_KINVEY = 'Kinvey';
  readonly AUTHORIZATION = 'Authorization';
  readonly BASIC_TYPE_HEADERS = {
    'Authorization': `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`,
    'Content-Type': 'application/json'
  };
  private _authToken: string;

  constructor(private httpClient: HttpClient) {
  }

  register(registerModel: Register) {
    return this.httpClient.post(
      this.registerUrl,
      JSON.stringify(registerModel),
      {
        headers: this.createAuthHeaders(this.TYPE_BASIC)
      }
    );
  }

  login(loginModel: Login) {
    return this.httpClient.post(
      this.loginUrl,
      JSON.stringify(loginModel),
      {
        headers: this.createAuthHeaders(this.TYPE_BASIC)
      }
    );
  }

  logout() {
    return this.httpClient.post(
      this.logoutUrl,
      {},
      {
        headers: this.createAuthHeaders(this.TYPE_KINVEY)
      }
    );
  }

  checkIfLoggedIn() {
    return this.authToken === localStorage.getItem(this.AUTH_TOKEN);
  }

  private createAuthHeaders(type: string): HttpHeaders {
    if (type === this.TYPE_BASIC) {
      return new HttpHeaders(this.BASIC_TYPE_HEADERS);
    } else {
      const KINVEY_TYPE_HEADERS = {
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      };
      return new HttpHeaders(KINVEY_TYPE_HEADERS);
    }
  }

  get authToken(): string {
    return this._authToken;
  }

  set authToken(value: string) {
    this._authToken = value;
  }
}
