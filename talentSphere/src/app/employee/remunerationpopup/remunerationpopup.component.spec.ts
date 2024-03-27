import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemunerationpopupComponent } from './remunerationpopup.component';

describe('RemunerationpopupComponent', () => {
  let component: RemunerationpopupComponent;
  let fixture: ComponentFixture<RemunerationpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemunerationpopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemunerationpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
