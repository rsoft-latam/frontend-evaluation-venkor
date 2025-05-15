import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgHeaderComponent } from 'src/app/layout/ng-header/ng-header.component';

describe('NgHeaderComponent', () => {
  let component: NgHeaderComponent;
  let fixture: ComponentFixture<NgHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
