import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureRacesComponent } from './future-races.component';

describe('FutureRacesComponent', () => {
  let component: FutureRacesComponent;
  let fixture: ComponentFixture<FutureRacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureRacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
