import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGmapComponent } from './angular-gmap.component';

describe('AngularGmapComponent', () => {
  let component: AngularGmapComponent;
  let fixture: ComponentFixture<AngularGmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularGmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularGmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
