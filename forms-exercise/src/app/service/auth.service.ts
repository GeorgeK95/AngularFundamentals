import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../model/Login';
import {Register} from '../model/Register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly AUTH_TOKEN = 'AUTH_TOKEN';
  private _authToken: string;
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
  readonly KINVEY_TYPE_HEADERS = {
    'Authorization': `Kinvey ${localStorage.getItem('AUTH_TOKEN')}`,
    'Content-Type': 'application/json'
  };

  constructor(private httpClient: HttpClient) {
  }

  register(registerModel: Register) {
    console.log(registerModel)
    return this.httpClient.post(
      this.registerUrl,
      JSON.stringify(registerModel),
      {
        headers: this.createAuthHeaders(this.TYPE_BASIC)
      }
    );
  }

  login(loginModel: Login) {
    console.log(loginModel)
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
    return this._authToken === localStorage.getItem(this.AUTH_TOKEN);
  }

  get authToken(): string {
    return this._authToken;
  }

  set authToken(value: string) {
    this._authToken = value;
  }

  private createAuthHeaders(type: string): HttpHeaders {
    if (type === this.TYPE_BASIC) {
      return new HttpHeaders(this.BASIC_TYPE_HEADERS);
    } else {
      return new HttpHeaders(this.KINVEY_TYPE_HEADERS);
    }
  }
}
