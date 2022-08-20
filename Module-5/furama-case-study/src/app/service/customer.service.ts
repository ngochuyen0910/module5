import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerTypeService} from "./customerType.service";
import {CustomerType} from "../model/customer-type";
import {element} from "protractor";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [
    {
      id: 1,
      customerName: 'Truong Ngoc Mai',
      customerBirthday: '01/01/2000',
      customerGender: 1,
      customerIdCard: '3456789022',
      customerPhone: '0987764442',
      customerEmail: 'mai@gmail.com',
      customerAddress: 'Da Nang',
      customerType: {id: 1, name: 'Diamond'}
    },
    {
      id: 2,
      customerName: 'Tran Thi Lan',
      customerBirthday: '01/12/1998',
      customerGender: 1,
      customerIdCard: '56213789022',
      customerPhone: '15543216417',
      customerEmail: 'lan@gmail.com',
      customerAddress: 'Da Nang',
      customerType: {id: 2, name: 'Platinium'}
    },
    {
      id: 3,
      customerName: 'Le Van An',
      customerBirthday: '11/12/1995',
      customerGender: 0,
      customerIdCard: '5614131231',
      customerPhone: '09843135613',
      customerEmail: 'an@gmail.com',
      customerAddress: 'Quang Nam',
      customerType: {id: 2, name: 'Platinium'}
    },
    {
      id: 4,
      customerName: 'Nguyen Van Anh',
      customerBirthday: '09/07/1985',
      customerGender: 0,
      customerIdCard: '90914131231',
      customerPhone: '09899013613',
      customerEmail: 'anh@gmail.com',
      customerAddress: 'Quang Nam',
      customerType: {id: 5, name: 'Member'}
    },
    {
      id: 5,
      customerName: 'Nguyen Thi Hoa',
      customerBirthday: '08/08/1992',
      customerGender: 1,
      customerIdCard: '683752924',
      customerPhone: '0657326153',
      customerEmail: 'hoa@gmail.com',
      customerAddress: 'Quang Nam',
      customerType: {id: 3, name: 'Gold'}
    },
    {
      id: 6,
      customerName: 'Nguyễn Duy Phúc',
      customerBirthday: '04/08/2000',
      customerGender: 0,
      customerIdCard: '683752924',
      customerPhone: '0657326153',
      customerEmail: 'phuc@gmail.com',
      customerAddress: 'Huế',
      customerType: {id: 3, name: 'Gold'}
    }]

  constructor(private customerTypeService: CustomerTypeService) {
  }

  customerTypeList: CustomerType[] = this.customerTypeService.getAll();

  getAll() {
    return this.customers;
  }

  saveCustomer(customer: Customer) {
    for (let i = 0; i < this.customerTypeList.length; i++) {
      if (this.customerTypeList[i].name == customer.customerType) {
        customer.customerType = this.customerTypeList[i];
      }
    }
    this.customers.push(customer);
  }

  findById(id: number) {
    return this.customers.find(customer => customer.id === id);
  }

  updateCustomer(id: number, customer: Customer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        this.customers[i] = customer;

      }
    }
  }

  deleteCustomer(id: number) {
    let index = this.customers.findIndex(element => element.id === id);
    this.customers.splice(index, 1);
  }
}
