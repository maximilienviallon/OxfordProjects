import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastRacesComponent } from './past-races.component';

describe('PastRacesComponent', () => {
  let component: PastRacesComponent;
  let fixture: ComponentFixture<PastRacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastRacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
