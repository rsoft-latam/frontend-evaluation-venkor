import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { NgTableComponent } from 'src/app/shared/ng-table/ng-table.component';
import { environment } from 'src/environments/environment';

describe('NgTableComponent', () => {
  let component: NgTableComponent;
  let fixture: ComponentFixture<NgTableComponent>;
  let sanitizer: DomSanitizer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgTableComponent);
    component = fixture.componentInstance;
    sanitizer = TestBed.inject(DomSanitizer);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a safe flag image URL', () => {
    const country = 'Germany';
    const expectedUrl = `${environment.flagApiUrl}/${encodeURIComponent(
      country
    )}.png`;

    const spy = jest.spyOn(sanitizer, 'bypassSecurityTrustResourceUrl');
    component.getFlagImage(country);
    expect(spy).toHaveBeenCalledWith(expectedUrl);
  });
});
