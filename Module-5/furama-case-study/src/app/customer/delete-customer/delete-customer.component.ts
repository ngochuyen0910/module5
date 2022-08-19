import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customerForm: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.findById(this.id);
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        name: new FormControl(customer.customerName)
      });
    });
  }

  ngOnInit(): void {
  }

  findById(id: number) {
    return this.customerService.findById(id);
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id);
    this.router.navigate(['/customer']);
  }
}
