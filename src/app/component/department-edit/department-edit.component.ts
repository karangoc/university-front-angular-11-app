import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/domain/department';
import { Instructor } from 'src/app/domain/instructor';
import { DepartmentService } from 'src/app/service/department.service';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  public id: number = 0;
  public department: Department = new Department(0, '', 0, new Date(), 0, new Instructor(0, '', '', new Date(), ''));
  public instructors: Instructor[] = [];
  public subInstructors: Subscription = new Subscription;
  public instructorsFilter: Instructor[] = [];

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public activatedRoute: ActivatedRoute,
    public departmentService: DepartmentService,
    public router: Router,
    public instructorService: InstructorService) { }

  ngOnInit(): void {
    this.getById();
    this.getInstructors();
  }

  getById() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    //this.student = this.studentService.getById(this.id);
    this.departmentService.getById(this.id).subscribe(data => {
      this.department = data;
    });
  }

  public edit() {

    console.log(this.department);

    this.departmentService.edit(this.department).subscribe(

      (data) => {
        this.router.navigate(['/department-list']);
      },
      (error) => {
        console.log(error);
        this.showMsg = true;
        this.msg = 'An error has ocurred in the procedure';
        this.type = 'danger';
      }
    );
  }

  getInstructors() {
    this.subInstructors = this.instructorService.getAll().subscribe(data => {
      this.instructors = data;
      this.instructorsFilter = [];
    });
  }
}
