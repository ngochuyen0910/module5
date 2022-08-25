import {Component, OnInit} from '@angular/core';
import {Saving} from '../../model/saving';
import {SavingService} from '../../service/saving.service';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {PeriodService} from '../../service/period.service';
import {Period} from '../../model/period';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  saving: Saving[] = [];
  id: number;
  searchCustomer: string;
  seachs: string;
  customer: Customer[] = [];
  period: Period[] = [];
  p = 1;

  constructor(private savingService: SavingService,
              private customerService: CustomerService,
              private periodService: PeriodService) {
  }

  ngOnInit() {
    this.getAll();
    this.getAllCustomer();
    this.getAllPeriod();
  }

  getAll() {
    this.savingService.getAll().subscribe(saving => {
      this.saving = saving;
    });
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(customer => {
      this.customer = customer;
    });
  }

  getAllPeriod() {
    this.periodService.getAll().subscribe(period => {
      this.period = period;
    });
  }

  openDelete(id: number): void {
    this.id = id;
  }

  delete(id: number): void {
    this.savingService.deleteSaving(id).subscribe(() => {
      this.getAll();
    }, e => {
      console.log(e);
    });
  }

  search() {
    if (this.searchCustomer === undefined) {
      this.searchCustomer = '';
    }
    if (this.seachs === undefined) {
      this.seachs = '';
    }
    this.savingService.find(this.seachs, this.searchCustomer).subscribe(saving => {
      this.saving = saving;
      this.seachs = '';
    });
  }
}
