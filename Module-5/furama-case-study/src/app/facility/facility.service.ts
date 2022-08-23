import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor( private http: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>('http://localhost:3000/facilities');
  }

  saveFacility(facility): Observable<Facility> {
    return this.http.post<Facility>('http://localhost:3000/facilities', facility);
  }

  findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(`http://localhost:3000/facilities/${id}`);
  }

  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(`http://localhost:3000/facilities/${id}`, facility);
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.http.delete<Facility>(`http://localhost:3000/facilities/${id}`);
  }

}
