import {Injectable} from '@angular/core';
import {FacilityType} from "../model/facility-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<FacilityType[]> {
    return this.http.get<FacilityType[]>('http://localhost:3000/facilityTypeList');
  }

  findById(id: number): Observable<FacilityType> {
    return this.http.get<FacilityType>(`http://localhost:3000/facilityTypeList/${id}`);
  }
}
