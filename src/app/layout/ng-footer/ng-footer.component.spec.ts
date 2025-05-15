import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFooterComponent } from './ng-footer.component';
import { AppInfoService } from 'src/app/services/app-info.service';
import { of } from 'rxjs';

describe('NgFooterComponent', () => {
  let component: NgFooterComponent;
  let fixture: ComponentFixture<NgFooterComponent>;
  let mockAppInfoService: jest.Mocked<AppInfoService>;

  beforeEach(async () => {
    mockAppInfoService = {
      getApiVersion: jest
        .fn()
        .mockReturnValue(of({ success: true, version: '' })),
    } as unknown as jest.Mocked<AppInfoService>;

    await TestBed.configureTestingModule({
      declarations: [NgFooterComponent],
      providers: [{ provide: AppInfoService, useValue: mockAppInfoService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFooterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set apiVersion on successful response', () => {
    const mockResponse = { success: true, version: '1.2.3' };
    mockAppInfoService.getApiVersion.mockReturnValue(of(mockResponse));

    fixture.detectChanges();

    expect(component.apiVersion).toBe('1.2.3');
  });

  it('should not set apiVersion on failure', () => {
    const mockResponse = { success: false, version: 'should-not-set' };
    mockAppInfoService.getApiVersion.mockReturnValue(of(mockResponse));

    fixture.detectChanges();

    expect(component.apiVersion).toBe('');
  });
});
