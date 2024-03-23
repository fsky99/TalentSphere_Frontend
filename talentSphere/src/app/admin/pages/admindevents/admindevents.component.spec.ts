import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeventsComponent } from './admindevents.component';

describe('AdmindeventsComponent', () => {
  let component: AdmindeventsComponent;
  let fixture: ComponentFixture<AdmindeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmindeventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmindeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
