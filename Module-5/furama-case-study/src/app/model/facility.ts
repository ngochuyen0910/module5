import {FacilityType} from "./facility-type";
import {RentType} from "./rent-type";

export interface Facility {
  id?: number;
  facilityName?: string;
  area?: number;
  cost?: number;
  maxPeople?: number;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  facilityFree?: string;
  image?: string;
  facilityType?: FacilityType;
  rentType?: RentType;
}
