import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindirectoryComponent } from './admindirectory.component';

describe('AdmindirectoryComponent', () => {
  let component: AdmindirectoryComponent;
  let fixture: ComponentFixture<AdmindirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmindirectoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmindirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
