import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Saving} from '../model/saving';

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Saving[]> {
    return this.http.get<Saving[]>('http://localhost:3000/saving');
  }

  saveSaving(saving: Saving): Observable<Saving> {
    return this.http.post<Saving>('http://localhost:3000/saving', saving);
  }

  findById(id: number): Observable<Saving> {
    return this.http.get<Saving>(`http://localhost:3000/saving/${id}`);
  }

  updateSaving(id: number, saving: Saving): Observable<Saving> {
    return this.http.put<Saving>(`http://localhost:3000/saving/${id}`, saving);
  }

  deleteSaving(id: number): Observable<Saving> {
    return this.http.delete<Saving>(`http://localhost:3000/saving/${id}`);
  }

  find(seachs: string, searchCustomer: string): Observable<Saving[]> {
    return this.http.get<Saving[]>(`http://localhost:3000/saving?id_like=` + seachs + '&customer.name_like=' + searchCustomer);
  }

}


