import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailComponent } from './component/student-detail/student-detail.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseDetailComponent } from './component/course-detail/course-detail.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { InstructorDetailComponent } from './component/instructor-detail/instructor-detail.component';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { InstructorCreateComponent } from './component/instructor-create/instructor-create.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { DepartmentCreateComponent } from './component/department-create/department-create.component';
import { DepartmentEditComponent } from './component/department-edit/department-edit.component';
import { DepartmentDeleteComponent } from './component/department-delete/department-delete.component';
import { InstructorOfficeassignmentsListComponent } from './component/instructor-officeassignments-list/instructor-officeassignments-list.component';

const routes: Routes = [
  { path: 'student-list', component: StudentListComponent },
  { path: 'student-detail/:id', component: StudentDetailComponent },
  { path: 'student-create', component: StudentCreateComponent },
  { path: 'student-edit/:id', component: StudentEditComponent },
  { path: 'student-delete/:id', component: StudentDeleteComponent },
  { path: 'course-list', component: CourseListComponent },
  { path: 'course-detail/:id', component: CourseDetailComponent },
  { path: 'instructor-list', component: InstructorListComponent },
  { path: 'instructor-detail/:id', component: InstructorDetailComponent },
  { path: 'department-list', component: DepartmentListComponent },
  { path: 'department-create', component: DepartmentCreateComponent },
  { path: 'department-edit/:id', component: DepartmentEditComponent },
  { path: 'department-delete/:id', component: DepartmentDeleteComponent },
  { path: 'instructor-create', component: InstructorCreateComponent },
  { path: 'instructor-edit/:id', component: InstructorEditComponent },
  { path: 'instructor-delete/:id', component: InstructorDeleteComponent },
  { path: 'instructor-officeassignments-list/:id', component: InstructorOfficeassignmentsListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
