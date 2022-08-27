import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../model/patient";

const API_URL = 'http://localhost:8080/api/patient/';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(API_URL);
  }

  savePatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(API_URL, patient);
  }

  findById(id: number): Observable<Patient> {
    return this.http.get<Patient>(API_URL + id);
  }

}
