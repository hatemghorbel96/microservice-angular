import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectCourseToStudentComponent } from './affect-course-to-student.component';

describe('AffectCourseToStudentComponent', () => {
  let component: AffectCourseToStudentComponent;
  let fixture: ComponentFixture<AffectCourseToStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AffectCourseToStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectCourseToStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
