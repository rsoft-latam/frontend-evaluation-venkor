import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.apiBaseUrl;

  constructor(private _http: HttpClient) {}

  getToken(): Observable<{ success: boolean; access_token: string }> {
    return this._http.get<{ success: boolean; access_token: string }>(
      `${this.baseUrl}/api/v1/getAccessToken`
    );
  }
}
