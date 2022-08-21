import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CustomerRoutingModule } from './customer-routing.module';
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
