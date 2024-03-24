import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddemployeeComponent } from './adminaddemployee.component';

describe('AdminaddemployeeComponent', () => {
  let component: AdminaddemployeeComponent;
  let fixture: ComponentFixture<AdminaddemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminaddemployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminaddemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
