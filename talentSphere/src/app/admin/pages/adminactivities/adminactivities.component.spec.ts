import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminactivitiesComponent } from './adminactivities.component';

describe('AdminactivitiesComponent', () => {
  let component: AdminactivitiesComponent;
  let fixture: ComponentFixture<AdminactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminactivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
