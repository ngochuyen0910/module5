import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerFrom: FormGroup = new FormGroup({
    id: new FormControl(),
    customerName: new FormControl(),
    customerBirthday: new FormControl(),
    customerGender: new FormControl(),
    customerIdCard: new FormControl(),
    customerPhone: new FormControl(),
    customerEmail: new FormControl(),
    customerAddress: new FormControl(),
    customerType: new FormControl(),
  })

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {

  }

  submit() {
    const customer = this.customerFrom.value;
    console.log(this.customerFrom.value)
    this.customerService.saveCustomer(customer);
    this.customerFrom.reset();
    this.router.navigate(['/customer'])
  }
}
