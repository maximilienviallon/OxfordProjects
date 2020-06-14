import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedUserDetailComponent } from './logged-user-detail.component';

describe('LoggedUserDetailComponent', () => {
  let component: LoggedUserDetailComponent;
  let fixture: ComponentFixture<LoggedUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
