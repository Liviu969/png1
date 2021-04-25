import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SNRComponent } from './snr.component';

describe('SNRComponent', () => {
  let component: SNRComponent;
  let fixture: ComponentFixture<SNRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SNRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SNRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
