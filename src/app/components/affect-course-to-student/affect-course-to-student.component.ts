import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { CourseService } from '../../services/course.service';
import { CustomStudentResponse } from '../../models/custom-student-response';

@Component({
  selector: 'app-affect-course-to-student',
  templateUrl: './affect-course-to-student.component.html',
  styleUrl: './affect-course-to-student.component.css'
})
export class AffectCourseToStudentComponent implements OnInit {
  studentId!: number;
  courseId!: number;
  courses: any[] = [];
 studentDetails!: CustomStudentResponse;
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private courseService: CourseService,
    private router: Router
    
  ) {}

  ngOnInit() {
    // Get the studentId from the route parameter
    this.studentId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.courseService.getAllCourses().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error fetching courses', error);
      }
    );
    
    this.studentService.getStudentWithCoursesAndAddress(this.studentId).subscribe(
      (response: CustomStudentResponse) => {
        this.studentDetails = response;
      },
      (error) => {
        console.error('Error fetching student details', error);
      }
    );
  }

  affectCourse() {
    const enrollmentRequest = {
      studentId: this.studentId,
      courseId: this.courseId,
    };
    this.studentService.assignCourseToStudent(enrollmentRequest).subscribe(
      (response) => {
        alert('Course assigned successfully');
        this.router.navigate(['/student-list']); // Navigate back to student list after assigning the course
      },
      (error) => {
        console.error('Error assigning course', error);
      }
    );
  }
}
