import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngingRaceComponent } from './onging-race.component';

describe('OngingRaceComponent', () => {
  let component: OngingRaceComponent;
  let fixture: ComponentFixture<OngingRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngingRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngingRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
