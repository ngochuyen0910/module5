import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MedicalRecord} from "../model/medical-record";

const API_URL = 'http://localhost:8080/api/medicalRecord/';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>(API_URL);
  }

  save(medicalRecord): Observable<MedicalRecord> {
    return this.http.post<MedicalRecord>(API_URL, medicalRecord);
  }

  findById(id: string): Observable<MedicalRecord> {
    return this.http.get<MedicalRecord>(API_URL + id);
  }

  update(id: string, medicalRecord: MedicalRecord): Observable<MedicalRecord> {
    return this.http.put<MedicalRecord>(API_URL + id, medicalRecord);
  }

  delete(id: number): Observable<MedicalRecord> {
    return this.http.delete<MedicalRecord>(API_URL + id);
  }

  find(search1: string, searchName: string): Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>(API_URL + 'medical-record?id_like=' + search1 + '&patient.name_like=' + searchName);
  }
}

