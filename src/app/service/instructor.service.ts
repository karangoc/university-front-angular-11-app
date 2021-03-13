import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instructor } from '../domain/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  public url: string = '';

  constructor(public httpClient: HttpClient) {
    //local
    this.url = 'http://localhost/University.API/api/Instructors/';
    //publica
    //this.url = 'https://university-api.azurewebsites.net/api/Instructors/';
   }

   public getAll(): Observable<any> {
    //local
    return this.httpClient.get(this.url);
    //publica
    //return this.httpClient.get(this.url + 'GetInstructors/');
  }

  public getById(id: number): Observable<any> {
    //local
    return this.httpClient.get(this.url + id);
    //publica
    //return this.httpClient.get(this.url + 'GetInstructor/' + id);
  }

  public save(instructor: Instructor): Observable<any> {
    return this.httpClient.post(this.url, instructor);
  }

  public edit(instructor: Instructor): Observable<any> {
    return this.httpClient.put(this.url + instructor.ID, instructor);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.url + id);
  }
}
