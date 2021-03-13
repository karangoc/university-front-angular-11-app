import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../domain/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public url: string = '';

  constructor(public httpClient: HttpClient) {
    this.url = 'http://localhost/University.API/api/Courses/';
    //this.url = './assets/MOCK_DATA_COURSES.json';
  }

  public getAll(): Observable<any> {
    //local
    return this.httpClient.get(this.url);
    //publica
    //return this.httpClient.get(this.url + 'GetCourses/');
  }

  public getById(id: number): Observable<any> {
    //local
    return this.httpClient.get(this.url + id);
    //publica
    //return this.httpClient.get(this.url + 'GetCourse/' + id);
  }

  public save(course: Course): Observable<any> {
    return this.httpClient.post(this.url, course);
  }

  public edit(course: Course): Observable<any> {
    return this.httpClient.put(this.url + course.CourseID, course);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

}
