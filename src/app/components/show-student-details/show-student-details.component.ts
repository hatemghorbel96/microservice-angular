import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-show-student-details',
  templateUrl: './show-student-details.component.html',
  styleUrl: './show-student-details.component.css'
})
export class ShowStudentDetailsComponent implements OnInit {
  studentId!: number;
  studentData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    // Get the studentId from the route parameter
    this.studentId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.studentService.getStudentWithCoursesById(this.studentId).subscribe(
      (data) => {
        this.studentData = data;
      },
      (error) => {
        console.error('Error fetching student details', error);
      }
    );
  }
}