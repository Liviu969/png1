import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EXCLComponent } from './excl.component';

describe('EXCLComponent', () => {
  let component: EXCLComponent;
  let fixture: ComponentFixture<EXCLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EXCLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EXCLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
