import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDirectoryComponent } from './employee-directory.component';

describe('EmployeeDirectoryComponent', () => {
  let component: EmployeeDirectoryComponent;
  let fixture: ComponentFixture<EmployeeDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeDirectoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
