import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return empty token initially', () => {
    expect(service.getToken()).toBe('');
  });

  it('should load token and store it in memory and localStorage', async () => {
    const mockResponse = {
      success: true,
      access_token: 'test-token',
    };

    const loadTokenPromise = service.loadToken();

    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/api/v1/getAccessToken`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    await loadTokenPromise;

    expect(service.getToken()).toBe('test-token');
    expect(localStorage.getItem('token')).toBe('test-token');
  });

  it('should set empty token on invalid response', async () => {
    const mockResponse = {
      success: false,
      access_token: '',
    };

    const loadTokenPromise = service.loadToken();

    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/api/v1/getAccessToken`
    );
    req.flush(mockResponse);

    await loadTokenPromise;

    expect(service.getToken()).toBe('');
    expect(localStorage.getItem('token')).toBe('');
  });
});
