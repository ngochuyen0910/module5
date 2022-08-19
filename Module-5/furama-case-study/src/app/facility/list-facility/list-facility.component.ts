import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilities: Facility[] = [];
  facilitiesDelete: Facility;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.facilities = this.facilityService.getAll()
  }

  getFacilityDelete(facility: Facility) {
    this.facilitiesDelete = facility;

  }

  delete() {
    this.facilityService.deleteFacility(this.facilitiesDelete.id);
  }
}
