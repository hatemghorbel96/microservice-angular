import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';

import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ShowStudentDetailsComponent } from './components/show-student-details/show-student-details.component';
import { AffectCourseToStudentComponent } from './components/affect-course-to-student/affect-course-to-student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StudentListComponent,
    AddStudentComponent,
    ShowStudentDetailsComponent,
    AffectCourseToStudentComponent,
    StudentDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
