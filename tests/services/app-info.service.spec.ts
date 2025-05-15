import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { AppInfoService } from 'src/app/services/app-info.service';

describe('AppInfoService', () => {
  let service: AppInfoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppInfoService],
    });

    service = TestBed.inject(AppInfoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call GET /api/version and return version data', () => {
    const mockResponse = { success: true, version: '2.0.1' };

    service.getApiVersion().subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.apiBaseUrl}/api/version`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
