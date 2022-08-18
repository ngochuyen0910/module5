import {Injectable} from "@angular/core";
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  constructor() { }

  customerTypeList: CustomerType[] = [
    {id: 1, name:'Diamond'},
    {id: 2, name:'Platinium'},
    {id: 3, name:'Gold'},
    {id: 4, name:'Silver'},
    {id: 5, name:'Member'},
  ];

  getAll() {
    return this.customerTypeList;
  }
}
