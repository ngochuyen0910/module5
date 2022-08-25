import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {SavingService} from '../../service/saving.service';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Period} from '../../model/period';
import {PeriodService} from '../../service/period.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  savingForm: FormGroup;
  id: number;

  constructor(private savingService: SavingService,
              private customerService: CustomerService,
              private periodService: PeriodService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getSaving(this.id);
    });
  }

  customer: Customer[] = [];
  period: Period[] = [];

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

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllPeriod();
  }

  getSaving(id: number) {
    return this.savingService.findById(id).subscribe(saving => {
      this.savingForm = new FormGroup({
        id: new FormControl(saving.id, [Validators.required]),
        openDate: new FormControl(saving.openDate, [Validators.required]),
        sentDate: new FormControl(saving.sentDate, [Validators.required]),
        period: new FormControl(saving.period.name, [Validators.required]),
        money: new FormControl(saving.money, [Validators.required, Validators.min(10000000)]),
        interestRate: new FormControl(saving.interestRate, [Validators.required]),
        endow: new FormControl(saving.endow, [Validators.required]),
        customer: new FormControl(saving.customer.id, [Validators.required])
      });
    });
  }

  updateSaving(id: number) {
    const saving = this.savingForm.value;
    saving.period = {
      name: saving.period
    };
    this.customerService.findById(saving.customer).subscribe(customer => {
        saving.customer = {
          id: customer.id,
          name: customer.name
        };
        this.savingService.updateSaving(id, saving).subscribe(() => {
          alert('Cập nhật thành công');
          this.router.navigate(['/saving']);
        });
      }
    );
  }
}

