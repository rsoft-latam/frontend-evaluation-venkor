import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from 'src/app/services/auth.service';

describe('AuthInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let mockAuthService: { getToken: jest.Mock };

  beforeEach(() => {
    mockAuthService = {
      getToken: jest.fn(),
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should add Authorization header when token is present', () => {
    mockAuthService.getToken.mockReturnValue('test-token');

    http.get('/test').subscribe();

    const req = httpMock.expectOne('/test');
    expect(req.request.headers.has('Authorization')).toBe(true);
    expect(req.request.headers.get('Authorization')).toBe('Bearer test-token');
    req.flush({});
  });

  it('should not add Authorization header when token is empty', () => {
    mockAuthService.getToken.mockReturnValue('');

    http.get('/test').subscribe();

    const req = httpMock.expectOne('/test');
    expect(req.request.headers.has('Authorization')).toBe(false);
    req.flush({});
  });
});
