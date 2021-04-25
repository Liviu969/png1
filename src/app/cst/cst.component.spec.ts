import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSTComponent } from './cst.component';

describe('CSTComponent', () => {
  let component: CSTComponent;
  let fixture: ComponentFixture<CSTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
