import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { CustomStudentResponse } from '../../models/custom-student-response';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {
  studentDetails!: CustomStudentResponse;
  studentId!: number;
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentId = +this.route.snapshot.paramMap.get('id')!; // Get student ID from URL
    this.studentService.getStudentWithCoursesAndAddress(this.studentId).subscribe(
      (response: CustomStudentResponse) => {
        this.studentDetails = response;
      },
      (error) => {
        console.error('Error fetching student details', error);
      }
    );
  }
}
