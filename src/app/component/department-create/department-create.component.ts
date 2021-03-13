import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { Department } from 'src/app/domain/department'
import { Instructor } from 'src/app/domain/instructor';
import { DepartmentService } from 'src/app/service/department.service'
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit {

  public department: Department = new Department(0, '', 0, new Date(), 0,new Instructor(0,'','',new Date(),''));
  //puede ser nulo
  //public department!: Department;
  public subInstructors: Subscription = new Subscription;
  public instructors: Instructor[] = [];
  public instructorsFilter: Instructor[] = [];

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public departmentService: DepartmentService,
    public router: Router,
    public instructorService: InstructorService,
    public activatedRoute: ActivatedRoute) { }

    ngOnDestroy(): void {
      this.subInstructors.unsubscribe();
    }

  ngOnInit(): void {
    this.department = new Department(0, '', 0, new Date(), 0, new Instructor(0,'','',new Date(),''));
      this.getInstructors() ;
  }

  public save() {

    console.log(this.department);

    
    this.departmentService.save(this.department).subscribe(data => {
      this.router.navigate(['/department-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }

  getInstructors() {
    this.subInstructors = this.instructorService.getAll().subscribe(data => {
      this.instructors = data;
      this.instructorsFilter = [];
    });
  }
}
