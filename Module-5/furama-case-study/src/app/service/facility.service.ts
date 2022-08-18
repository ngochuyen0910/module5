import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilities: Facility[] = [
    {
      id: 1,
      facilityName: 'OCEAN SUITE',
      area: 23000,
      cost: 30000,
      maxPeople: 4,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'There is a grill',
      poolArea: 2300,
      numberOfFloors: 2,
      facilityFree: 'No',
      image: "https://poliva.vn/wp-content/uploads/2019/10/phong-ngu-khach-san-dep-nhat-the-gioi-1.jpg",
    },
    {
      id: 2,
      facilityName: 'OCEAN SUITE',
      area: 25000,
      cost: 50000,
      maxPeople: 5,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'There is a grill',
      poolArea: 2300,
      numberOfFloors: 2,
      facilityFree: 'No',
      image: "https://everon.com/upload_images/images/noi-that-phong-ngu-khach-san/phong-ngu-khach-san-2.jpg",
    },
    {
      id: 3,
      facilityName: 'OCEAN SUITE',
      area: 23000,
      cost: 30000,
      maxPeople: 4,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'There is a grill',
      poolArea: 2300,
      numberOfFloors: 2,
      facilityFree: 'No',
      image: "https://dyf.vn/wp-content/uploads/2021/12/giuong-doi-khach-san-lon.jpg",
    },
    {
      id: 4,
      facilityName: 'OCEAN SUITE',
      area: 23000,
      cost: 30000,
      maxPeople: 4,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'There is a grill',
      poolArea: 2300,
      numberOfFloors: 2,
      facilityFree: 'No',
      image: "https://menhadep.com/wp-content/uploads/thiet-ke-phong-khach-san.jpg",
    },
    {
      id: 5,
      facilityName: 'OCEAN SUITE',
      area: 23000,
      cost: 30000,
      maxPeople: 4,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'There is a grill',
      poolArea: 2300,
      numberOfFloors: 2,
      facilityFree: 'No',
      image: "https://dyf.vn/wp-content/uploads/2021/12/giuong-doi-khach-san-lon.jpg",
    },
    {
      id: 6,
      facilityName: 'OCEAN SUITE',
      area: 23000,
      cost: 30000,
      maxPeople: 4,
      standardRoom: 'Normal',
      descriptionOtherConvenience: 'There is a grill',
      poolArea: 2300,
      numberOfFloors: 2,
      facilityFree: 'No',
      image: "https://menhadep.com/wp-content/uploads/phong-ngu-khach-san.jpg",
    },
    {
      id: 7,
      facilityName: 'OCEAN SUITE',
      area: 23000,
      cost: 30000,
      maxPeople: 4,
      standardRoom: 'Normal',
      descriptionOtherConvenience: 'There is a grill',
      poolArea: 2300,
      numberOfFloors: 2,
      facilityFree: 'No',
      image: "https://noithattrevietnam.com/uploaded/2019/12/1-thiet-ke-phong-ngu-khach-san%20%282%29.jpg",
    },
    {
      id: 8,
      facilityName: 'OCEAN SUITE',
      area: 23000,
      cost: 30000,
      maxPeople: 4,
      standardRoom: 'Normal',
      descriptionOtherConvenience: 'There is a grill',
      poolArea: 2300,
      numberOfFloors: 2,
      facilityFree: 'No',
      image: "https://i.pinimg.com/736x/af/e6/68/afe668580604a3377ecf065ac86a9a5a.jpg",
    }]

  constructor() {
  }

  getAll() {
    return this.facilities;
  }

  save(facility: Facility) {
    this.facilities.push(facility);
  }
}
