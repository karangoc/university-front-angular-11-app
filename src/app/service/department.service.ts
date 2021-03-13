import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../domain/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public url: string = '';

  constructor(public httpClient: HttpClient) {
    //local
    this.url = 'http://localhost/University.API/api/Departments/';
    //publica
    //this.url = 'https://university-api.azurewebsites.net/api/Departments/';
  }

  public getAll(): Observable<any> {
    //local
    return this.httpClient.get(this.url);
    //publica
    //return this.httpClient.get(this.url + 'Departments/');
  }

  public getById(id: number): Observable<any> {
    //local
    return this.httpClient.get(this.url + id);
    //publica
    //return this.httpClient.get(this.url + 'Departments/' + id);
  }

  public save(department: Department): Observable<any> {
    return this.httpClient.post(this.url, department);
  }

  public edit(department: Department): Observable<any> {
    return this.httpClient.put(this.url + department.DepartmentID, department);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.url + id);
  }
}
