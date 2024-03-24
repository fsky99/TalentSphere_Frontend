import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmessagesComponent } from './adminmessages.component';

describe('AdminmessagesComponent', () => {
  let component: AdminmessagesComponent;
  let fixture: ComponentFixture<AdminmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminmessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
