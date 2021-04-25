import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OTHComponent } from './oth.component';

describe('OTHComponent', () => {
  let component: OTHComponent;
  let fixture: ComponentFixture<OTHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OTHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OTHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
