import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddeventComponent } from './adminaddevent.component';

describe('AdminaddeventComponent', () => {
  let component: AdminaddeventComponent;
  let fixture: ComponentFixture<AdminaddeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminaddeventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminaddeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
