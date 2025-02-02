import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  studentRequest = {
    firstName: '',
    lastName: '',
    email: '',
    city: '',        
    street: '',      
  };

  constructor(private studentService: StudentService, private router: Router) {}

  addStudent() {
    console.log('studentRequest before submitting:', this.studentRequest);
    this.studentService.createStudent(this.studentRequest).subscribe(
      (response) => {
        alert('Student added successfully');
        this.router.navigate(['/student-list']); 
      },
      (error) => {
        console.error('Error adding student', error);
      }
    );
  }
}
