import {Injectable} from '@angular/core';
import {RentType} from "../model/rent-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<RentType[]> {
    return this.http.get<RentType[]>('http://localhost:3000/rentTypeList');
  }

  findById(id: number): Observable<RentType> {
    return this.http.get<RentType>(`http://localhost:3000/rentTypeList/${id}`);
  }
}
