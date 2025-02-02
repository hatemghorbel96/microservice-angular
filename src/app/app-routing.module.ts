import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ShowStudentDetailsComponent } from './components/show-student-details/show-student-details.component';
import { AffectCourseToStudentComponent } from './components/affect-course-to-student/affect-course-to-student.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:  'course-list', component: CourseListComponent},
  { path: 'student-list', component: StudentListComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'student-details/:id', component: ShowStudentDetailsComponent },
  { path: 'assign-course/:id', component: AffectCourseToStudentComponent }, 
  { path: 'custom-student-details/:id', component: ShowStudentDetailsComponent }, 
  {path:  'login', component: LoginComponent},
  { path: '', redirectTo: '/student-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
