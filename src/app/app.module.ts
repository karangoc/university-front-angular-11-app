import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailComponent } from './component/student-detail/student-detail.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseDetailComponent } from './component/course-detail/course-detail.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { InstructorDetailComponent } from './component/instructor-detail/instructor-detail.component';
import { FormsModule } from '@angular/forms'
import { StudentService } from './service/student.service';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { InstructorService } from './service/instructor.service';
import { InstructorCreateComponent } from './component/instructor-create/instructor-create.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { DepartmentCreateComponent } from './component/department-create/department-create.component';
import { DepartmentEditComponent } from './component/department-edit/department-edit.component';
import { DepartmentDeleteComponent } from './component/department-delete/department-delete.component';
import { DepartmentService } from './service/department.service';
import { InstructorOfficeassignmentsListComponent } from './component/instructor-officeassignments-list/instructor-officeassignments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailComponent,
    CourseListComponent,
    CourseDetailComponent,
    InstructorListComponent,
    DepartmentListComponent,
    InstructorDetailComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    InstructorCreateComponent,
    InstructorEditComponent,
    InstructorDeleteComponent,
    DepartmentCreateComponent,
    DepartmentEditComponent,
    DepartmentDeleteComponent,
    InstructorOfficeassignmentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudentService,
    InstructorService,
    DepartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
