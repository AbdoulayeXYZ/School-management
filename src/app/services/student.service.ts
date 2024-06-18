import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IStudent } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:3000/api/student';

  constructor(private http: HttpClient) {}

  createStudent(student: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(`${this.baseUrl}`, student);
  }

  getAllStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${this.baseUrl}`).pipe(
      map(students => students.map(student => ({
        ...student,
        classe: student.classe || { niveau: 'N/A', serie: 'N/A' }
      }))),
      catchError(this.handleError)
    );
  }

  getStudentById(id: string): Observable<IStudent> {
    return this.http.get<IStudent>(`${this.baseUrl}/${id}`);
  }

  updateStudent(id: string, student: IStudent): Observable<IStudent> {
    return this.http.put<IStudent>(`${this.baseUrl}/${id}`, student);
  }

  deleteStudent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError('Something bad happened; please try again later');
  }
}
