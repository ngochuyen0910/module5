import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerForm: FormGroup;
  id: number;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomer(this.id);
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        customerName: new FormControl(customer.customerName),
        customerBirthday: new FormControl(customer.customerBirthday),
        customerGender: new FormControl(customer.customerGender),
        customerIdCard: new FormControl(customer.customerIdCard),
        customerPhone: new FormControl(customer.customerPhone),
        customerEmail: new FormControl(customer.customerEmail),
        customerAddress: new FormControl(customer.customerAddress),
        customerType: new FormControl(customer.customerType),
      });
    });
  }



  ngOnInit() {
  }

  getCustomer(id: number) {
    return this.customerService.findById(id)
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id, customer);
    this.router.navigate(['/customer'])
  }
}
