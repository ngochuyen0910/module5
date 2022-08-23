import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ContractService} from "../contract.service";
import {ToastrService} from "ngx-toastr";

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
              private router: Router,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.saveContract(contract).subscribe(() => {
      this.toastrService.info("Successfully added new", "Notification")
      this.router.navigate(['/contract']);
      this.contractForm.reset();
    }, e => console.log(e));
  }
}
