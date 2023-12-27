import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneStudentViewComponent } from './standalone-student-view.component';

describe('StandaloneStudentViewComponent', () => {
  let component: StandaloneStudentViewComponent;
  let fixture: ComponentFixture<StandaloneStudentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneStudentViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandaloneStudentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
