import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../facility.service";
import {FacilityTypeService} from "../facility-type.service";
import {RentTypeService} from "../rent-type.service";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilities: Facility[] = [];
  id: number;
  name: string;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  openDelete(id: number, name: string): void {
    this.id = id;
    this.name = name;
  }

  delete(id: number): void {
    this.facilityService.deleteFacility(id).subscribe(() => {
      this.getAll();
    }, e => {
      console.log(e);
    });
  }
}

