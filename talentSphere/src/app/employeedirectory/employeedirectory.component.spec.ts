import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedirectoryComponent } from './employeedirectory.component';

describe('EmployeedirectoryComponent', () => {
  let component: EmployeedirectoryComponent;
  let fixture: ComponentFixture<EmployeedirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeedirectoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeedirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
