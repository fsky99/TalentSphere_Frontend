import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProfileComponent } from './masterprofile.component';

describe('MasterprofileComponent', () => {
  let component: MasterProfileComponent;
  let fixture: ComponentFixture<MasterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
