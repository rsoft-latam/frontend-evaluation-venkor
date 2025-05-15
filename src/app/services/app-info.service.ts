import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppInfoService {
  private _baseUrl: string = environment.apiBaseUrl;

  constructor(private _http: HttpClient) {}

  getApiVersion(): Observable<{ success: boolean; version: string }> {
    return this._http.get<{ success: boolean; version: string }>(
      `${this._baseUrl}/api/version`
    );
  }
}
