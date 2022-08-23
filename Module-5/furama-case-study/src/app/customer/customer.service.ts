import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customers');
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('http://localhost:3000/customers', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:3000/customers/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`http://localhost:3000/customers/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`http://localhost:3000/customers/${id}`);
  }
}
