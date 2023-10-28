import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../_models/student';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  //Read (Get)

  private studentsUrl = 'api/students';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl).pipe(
      tap((_) => console.log('Fetched All Students')),
      catchError(this.handleErrorResponse<Student[]>('getStudents', []))
    );
  }

  getStudentById(id: number): Observable<Student> {
    const url = `${this.studentsUrl}?id = ${id}`
    return this.http.get<Student>(this.studentsUrl).pipe(
      tap((_) => console.log(`Fetched studetn by ${id} `)),
      catchError(this.handleErrorResponse<Student>(`getStudents by ${id}`))
    );
  }
  private handleErrorResponse<T>(opertaion = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${opertaion} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
  saveStudent(studet:Student): Observable<Student>{
    return this.http.post<Student>(this.studentsUrl, student, this.httpOptinos).pipe(
      tap((newStudent:Student)=> console.log(`Add new Student w/id ${newStudent} `));
      catchError(this.handleErrorResponse<Student>(`Save Student`))
    )
  }
  removeStudentById(id: number): Observable<Student> {
    const url = `${this.studentsUrl}?id = ${id}`
    return this.http.delete<Student>(this.studentsUrl).pipe(
      tap((_) => console.log(`Delete studetn by ${id} `)),
      catchError(this.handleErrorResponse<Student>(`delete students by ${id}`))
    );
  }
}
