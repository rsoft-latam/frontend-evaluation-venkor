import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _baseUrl: string = environment.apiBaseUrl;
  private _token: string = '';

  constructor(private _http: HttpClient) {}

  public getToken(): string {
    return this._token;
  }
  async loadToken() {
    const res = await this._http
      .get<{ success: boolean; access_token: string }>(
        `${this._baseUrl}/api/v1/getAccessToken`
      )
      .toPromise();

    this._token = res?.access_token || '';
    localStorage.setItem('token', this._token);
  }
}
