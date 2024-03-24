import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDashComponent } from './employee-dash.component';

describe('EmployeeDashComponent', () => {
  let component: EmployeeDashComponent;
  let fixture: ComponentFixture<EmployeeDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
