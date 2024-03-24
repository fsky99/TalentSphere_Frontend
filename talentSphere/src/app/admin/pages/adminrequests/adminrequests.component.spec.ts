import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrequestsComponent } from './adminrequests.component';

describe('AdminrequestsComponent', () => {
  let component: AdminrequestsComponent;
  let fixture: ComponentFixture<AdminrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminrequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
