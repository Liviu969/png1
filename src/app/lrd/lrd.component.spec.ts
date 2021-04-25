import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LRDComponent } from './lrd.component';

describe('LRDComponent', () => {
  let component: LRDComponent;
  let fixture: ComponentFixture<LRDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LRDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LRDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
