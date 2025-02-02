import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface CourseResponse {
  id: number;
  courseName: string;
  courseCode: string;
  durationInWeeks: number;
}
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = `http://127.0.0.1:2500/course/api`; 

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<CourseResponse[]> {
    return this.http.get<CourseResponse[]>(`${this.apiUrl}`);
  }

  getCourseById(courseId: number): Observable<CourseResponse> {
    return this.http.get<CourseResponse>(`${this.apiUrl}/${courseId}`);
  }

  createCourse(courseRequest: any): Observable<CourseResponse> {
    return this.http.post<CourseResponse>(`${this.apiUrl}/create`, courseRequest);
  }
}
