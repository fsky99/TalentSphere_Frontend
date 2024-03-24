import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminremunerationsComponent } from './adminremunerations.component';

describe('AdminremunerationsComponent', () => {
  let component: AdminremunerationsComponent;
  let fixture: ComponentFixture<AdminremunerationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminremunerationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminremunerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
