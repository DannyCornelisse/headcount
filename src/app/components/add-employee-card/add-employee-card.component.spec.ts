import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeCardComponent } from './add-employee-card.component';

describe('AddEmployeeCardComponent', () => {
  let component: AddEmployeeCardComponent;
  let fixture: ComponentFixture<AddEmployeeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
