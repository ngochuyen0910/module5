import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ContractService} from "../contract.service";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  contractForm: FormGroup = new FormGroup(
    {
      id: new FormControl(),
      facility: new FormControl('', [Validators.required]),
      customerName: new FormControl('', [Validators.required]),
      contractStartDate: new FormControl('', [Validators.required]),
      contractEndDate: new FormControl('', [Validators.required]),
      contractDeposit: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+')])
    })

  constructor(private contractService: ContractService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.save(contract);
    this.contractForm.reset();
    this.router.navigate(['/contract'])
  }
}
