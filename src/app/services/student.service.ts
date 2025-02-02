import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomStudentResponse } from '../models/custom-student-response';


interface StudentResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: { city: string; street: string };
}

interface EnrollmentResponse {
  id: number;
  studentId: number;
  courseId: number;
  student: StudentResponse;
  course: any;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = `http://localhost:3535/student/api`; 

  constructor(private http: HttpClient) {}

  createStudent(studentRequest: any): Observable<StudentResponse> {
    return this.http.post<StudentResponse>(`${this.apiUrl}/create`, studentRequest);
  }

  getStudentById(studentId: number): Observable<StudentResponse> {
    return this.http.get<StudentResponse>(`${this.apiUrl}/getById/${studentId}`);
  }

  getStudentWithCoursesById(studentId: number): Observable<StudentResponse> {
    return this.http.get<StudentResponse>(`${this.apiUrl}/getStudentWithCoursesById/${studentId}`);
  }

  assignCourseToStudent(enrollmentRequest: any): Observable<EnrollmentResponse> {
    return this.http.post<EnrollmentResponse>(`${this.apiUrl}/assignCourse`, enrollmentRequest);
  }

  getAllStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAll`);
  }

  getStudentWithCoursesAndAddress(studentId: number): Observable<CustomStudentResponse> {
    return this.http.get<CustomStudentResponse>(`${this.apiUrl}/getStudentWithCoursesById/${studentId}`);
  }
}
