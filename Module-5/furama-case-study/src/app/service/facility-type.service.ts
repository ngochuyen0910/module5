import {Injectable} from '@angular/core';
import {FacilityType} from "../model/facility-type";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor() {
  }

  facilityTypeList: FacilityType[] = [
    {id: 1, name: 'Villa'},
    {id: 2, name: 'House'},
    {id: 3, name: 'Room'}
  ];

  getALl() {
    return this.facilityTypeList;
  }

  findById(id: number) {
    return this.facilityTypeList.find(element => element.id === id);
  }
}
