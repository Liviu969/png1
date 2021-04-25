import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { INCLComponent } from './incl.component';

describe('INCLComponent', () => {
  let component: INCLComponent;
  let fixture: ComponentFixture<INCLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ INCLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(INCLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
