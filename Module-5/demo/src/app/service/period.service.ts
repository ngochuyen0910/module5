import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Period} from '../model/period';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Period[]> {
    return this.http.get<Period[]>('http://localhost:3000/period');
  }
  savePeriod(period: Period): Observable<Period> {
    return this.http.post<Period>('http://localhost:3000/period', period);
  }

  findById(id: number): Observable<Period> {
    return this.http.get<Period>(`http://localhost:3000/period/${id}`);
  }
}
