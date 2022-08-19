import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer: Customer[] = [];
  customerDelete: Customer;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.customer = this.customerService.getAll()
  }

  getCustomerDelete(c: Customer) {
    this.customerDelete = c;

  }

  delete() {
    this.customerService.deleteCustomer(this.customerDelete.id);
  }
}
