import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer: Customer[] = [];
  id: number;
  customerName: string;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(customer => {
      this.customer = customer;
    });
  }

  openDelete(id: number, customerName: string): void {
    this.id = id;
    this.customerName = customerName;
  }

  delete(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.getAll();
    }, e => {
      console.log(e);
    });
  }
}
