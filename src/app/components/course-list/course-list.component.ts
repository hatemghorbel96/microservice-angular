import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

interface CourseResponse {
 
  courseName: string;
  courseCode: string;
  durationInWeeks: number;
}
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];
  newCourse: CourseResponse = { courseName: '', courseCode: '', durationInWeeks: 0, };
  isCreatingCourse: boolean = false;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.getall();
  }

  getall(){
    this.courseService.getAllCourses().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error fetching courses', error);
      }
    );
  }

  toggleCreateCourseForm() {
    this.isCreatingCourse = !this.isCreatingCourse;
  }

  createCourse() {
    if (this.newCourse.courseName && this.newCourse.courseCode && this.newCourse.durationInWeeks) {
      this.courseService.createCourse(this.newCourse).subscribe(
        (response) => {
          /* this.courses.push(response); */
          this.getall();
          this.newCourse = {courseName: '', courseCode: '', durationInWeeks: 0 };
          /* this.isCreatingCourse = false; */
        },
        (error) => {
          console.error('Error creating course', error);
        }
      );
    }
  }
}