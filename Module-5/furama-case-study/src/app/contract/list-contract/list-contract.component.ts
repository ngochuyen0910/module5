import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contract: Contract = {};
  contracts: Contract[] = [
    {id:1,facility:'Villa',customerName:'Truong Ngoc Mai',contractStartDate:"12/12/2021",contractEndDate:'13/12/2021',contractDeposit:1200000},
    {id:2,facility:'Room',customerName:'Tran Thi Hoa',contractStartDate:"11/01/2021",contractEndDate:'13/01/2021',contractDeposit:1200000},
    {id:3,facility:'House',customerName:'Tran Thi Lan',contractStartDate:"09/09/2021",contractEndDate:'09/09/2021',contractDeposit:1000000},
    {id:4,facility:'Room',customerName:'Tran Van An',contractStartDate:"09/12/2021",contractEndDate:'09/12/2021',contractDeposit:1000000},
    {id:5,facility:'House',customerName:'Le Van Anh',contractStartDate:"12/09/2021",contractEndDate:'18/09/2021',contractDeposit:1000000},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
