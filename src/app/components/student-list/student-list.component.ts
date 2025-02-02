import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students: any[] = []; // Store students and their addresses

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  // Get all students with addresses
  getStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (response) => {
        this.students = response;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }
}