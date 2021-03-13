import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Instructor } from 'src/app/domain/instructor';
import { OfficeAssignment } from 'src/app/domain/office-assignment';
import { InstructorService } from 'src/app/service/instructor.service';
import { OfficeassignmentService } from 'src/app/service/officeassignment.service';

@Component({
  selector: 'app-instructor-officeassignments-list',
  templateUrl: './instructor-officeassignments-list.component.html',
  styleUrls: ['./instructor-officeassignments-list.component.css']
})
export class InstructorOfficeassignmentsListComponent implements OnInit {

  public id: number = 0;
  public instructor: Instructor = new Instructor(0, '', '', new Date(), '');
  public officeAssignments: OfficeAssignment[] = [];
  public subOfficeAssignments: Subscription = new Subscription;
  public officeAssignment: OfficeAssignment = new OfficeAssignment(0, '', new Instructor(0, '', '', new Date(), ''));
  public ifOfficeAssignmentsExist: boolean = false;

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public instructorService: InstructorService,
    public officeAssignmentService: OfficeassignmentService,
    public activatedRoute: ActivatedRoute,
    public router: Router) { }

  ngOnDestroy(): void {
    this.subOfficeAssignments.unsubscribe();
  }

  ngOnInit(): void {
    this.getInstructorById();
    this.getOfficeAssignmentsByInstructorId();
  }

  getInstructorById() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    //this.instructor = this.instructorService.getById(this.id);
    this.instructorService.getById(this.id).subscribe(data => {
      this.instructor = data;
    });
  }

  //public delete(id: number) {
  //this.officeAssignmentService.delete(id).subscribe(data => {
  //this.getOfficeAssignmentsByInstructorId();
  //}, error => {
  //console.log(error);
  //this.showMsg = true;
  //this.msg = 'An error has ocurred in the procedure';
  //this.type = 'danger';
  //});
  //}

  public createOfficeAssignment() {
    this.officeAssignment.InstructorID = this.id;
    console.log(this.officeAssignment);

    this.officeAssignmentService.save(this.officeAssignment).subscribe(data => {
      this.router.navigate(['/instructor/list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

  getOfficeAssignmentsByInstructorId() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.subOfficeAssignments = this.officeAssignmentService.getAll().subscribe(data => {
      this.officeAssignments = data;
      //filtro por el id del instructor
      this.officeAssignments = this.officeAssignments.filter(x => x.InstructorID === this.id);
      if (this.officeAssignments.length > 0) {
        this.ifOfficeAssignmentsExist = true;
        this.officeAssignment = this.officeAssignments[0];
      }

    });
  }
}
