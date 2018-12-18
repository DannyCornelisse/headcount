import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBubbleComponent } from './employee-bubble.component';

describe('EmployeeBubbleComponent', () => {
  let component: EmployeeBubbleComponent;
  let fixture: ComponentFixture<EmployeeBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
