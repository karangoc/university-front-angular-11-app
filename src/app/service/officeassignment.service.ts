import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfficeAssignment } from '../domain/office-assignment';

@Injectable({
  providedIn: 'root'
})
export class OfficeassignmentService {

  public url: string = '';

  constructor(public httpClient: HttpClient) {
    //local
    this.url = 'http://localhost/University.API/api/OfficeAssignments/';
    //publica
    //this.url = 'https://university-api.azurewebsites.net/api/OfficeAssignments/';
    //this.url = './assets/MOCK_DATA_STUDENTS.json';
  }

  public getAll(): Observable<any> {
    //local
    return this.httpClient.get(this.url);
    //publica
    //return this.httpClient.get(this.url + 'OfficeAssignments/');
  }

  public getById(id: number): Observable<any> {
    //local
    return this.httpClient.get(this.url + id);
    //publica
    //return this.httpClient.get(this.url + 'OfficeAssignments/' + id);
  }

  public save(officeassignment: OfficeAssignment): Observable<any> {
    return this.httpClient.post(this.url, officeassignment);
  }

  public edit(officeassignment: OfficeAssignment): Observable<any> {
    return this.httpClient.put(this.url + officeassignment.InstructorID, officeassignment);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.url + id);
  }
}
