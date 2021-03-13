import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {

  public courses: Course[] = [];
  public subCourses: Subscription = new Subscription;

  constructor(public courseService: CourseService) { }

  ngOnDestroy(): void {
    this.subCourses.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.subCourses = this.courseService.getAll().subscribe(data => {
      this.courses = data;
    });
  }

}
