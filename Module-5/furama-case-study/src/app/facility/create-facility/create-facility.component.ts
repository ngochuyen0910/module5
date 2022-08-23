import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../facility.service";
import {Router} from "@angular/router";
import {FacilityTypeService} from "../facility-type.service";
import {RentTypeService} from "../rent-type.service";
import {FacilityType} from "../../model/facility-type";
import {RentType} from "../../model/rent-type";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit, OnChanges {
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    facilityName: new FormControl('', [Validators.required,
      Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
        '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
        '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
        '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
        '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
    facilityType: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+')]),
    descriptionOtherConvenience: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+')]),
    numberOfFloors: new FormControl('', [Validators.required]),
    facilityFree: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required])
  });
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private router: Router,
              private toastrService: ToastrService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.facilityForm = new FormGroup(
      {
        id: new FormControl(),
        facilityName: new FormControl(),
        facilityType: new FormControl(),
        area: new FormControl(),
        cost: new FormControl(),
        maxPeople: new FormControl(),
        standardRoom: new FormControl(),
        descriptionOtherConvenience: new FormControl(),
        poolArea: new FormControl(),
        numberOfFloors: new FormControl(),
        facilityFree: new FormControl(),
        image: new FormControl(),
        rentType: new FormControl()
      })
  }

  ngOnInit(): void {
    this.getAllFacilityType();
    this.getAllRentType();
  }

  submit() {
    const facility = this.facilityForm.value;
    facility.facilityType = {
      name: facility.facilityType
    };
    facility.rentType = {
      name: facility.rentType
    };
    this.facilityService.saveFacility(facility).subscribe(() => {
      this.toastrService.info("Successfully added new","Notification");
      this.router.navigate(['/facility']);
      this.facilityForm.reset();
    }, e => console.log(e));

  }

  type = "";

  getType(event) {
    this.type = event.target.value;
  }

  getAllFacilityType() {
    this.facilityTypeService.getAll().subscribe(facilityTypeList => {
      this.facilityTypeList = facilityTypeList;
    });
  }

  getAllRentType() {
    this.rentTypeService.getAll().subscribe(rentTypeList => {
      this.rentTypeList = rentTypeList;
    });
  }
}
