import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFooterComponent } from './ng-footer.component';

describe('NgFooterComponent', () => {
  let component: NgFooterComponent;
  let fixture: ComponentFixture<NgFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
