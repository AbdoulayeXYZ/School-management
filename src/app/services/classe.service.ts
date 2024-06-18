import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClasse } from '../models/classe.model';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private baseUrl = 'http://localhost:3000/api/classe'; // Updated URL to correct endpoint

  constructor(private http: HttpClient) {}

  createClasse(classe: IClasse): Observable<IClasse> {
    return this.http.post<IClasse>(this.baseUrl, classe);
  }

  getAllClasses(): Observable<IClasse[]> {
    return this.http.get<IClasse[]>(this.baseUrl);
  }

  getClasseById(id: string): Observable<IClasse> {
    return this.http.get<IClasse>(`${this.baseUrl}/${id}`);
  }

  updateClasse(id: string, classe: IClasse): Observable<IClasse> {
    return this.http.put<IClasse>(`${this.baseUrl}/${id}`, classe);
  }

  deleteClasse(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
