import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FacilityService} from "../facility.service";
import {FacilityType} from "../../model/facility-type";
import {FacilityTypeService} from "../facility-type.service";
import {RentType} from "../../model/rent-type";
import {RentTypeService} from "../rent-type.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit, OnChanges {
  facilityForm: FormGroup;
  facilityType: FacilityType[];
  rentType: RentType[];
  id: number;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastrService: ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getFacility(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllFacilityType();
    this.getAllRentType();
  }

  getFacility(id: number) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id),
        facilityName: new FormControl(facility.facilityName, [Validators.required,
          Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
            '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
            '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
        facilityType: new FormControl(facility.facilityType.name, [Validators.required]),
        area: new FormControl(facility.area, [Validators.required]),
        cost: new FormControl(facility.cost, [Validators.required]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required]),
        standardRoom: new FormControl(facility.standardRoom, [Validators.required, Validators.pattern('^[1-9]+')]),
        descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience, [Validators.required]),
        poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.pattern('^[1-9]+')]),
        numberOfFloors: new FormControl(facility.numberOfFloors, [Validators.required]),
        facilityFree: new FormControl(facility.facilityFree, [Validators.required]),
        rentType: new FormControl(facility.rentType.name, [Validators.required]),
        image: new FormControl(facility.image, [Validators.required])
      });
    });
  }

  updateFacility(id: number) {
    const facility = this.facilityForm.value;
    facility.facilityType = {
      name: facility.facilityType
    };
    facility.rentType = {
      name: facility.rentType
    };
    this.facilityService.updateFacility(id, facility).subscribe(() => {
      this.toastrService.info("Update successful","Notification");
      this.router.navigate(['/facility'])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getFacility(this.id);
    this.facilityForm = new FormGroup(
      {
        id: new FormControl(this.facilityForm.value.id),
        facilityName: new FormControl(this.facilityForm.value.facilityName),
        area: new FormControl(this.facilityForm.value.area),
        cost: new FormControl(this.facilityForm.value.cost),
        maxPeople: new FormControl(this.facilityForm.value.maxPeople),
        standardRoom: new FormControl(this.facilityForm.value.standardRoom),
        descriptionOtherConvenience: new FormControl(this.facilityForm.value.descriptionOtherConvenience),
        poolArea: new FormControl(this.facilityForm.value.poolArea),
        numberOfFloors: new FormControl(this.facilityForm.value.numberOfFloors),
        facilityFree: new FormControl(this.facilityForm.value.facilityFree),
        image: new FormControl(this.facilityForm.value.image),
        facilityType: new FormControl(this.facilityForm.value.facilityType),
        rentType: new FormControl(this.facilityForm.value.rentType)
      }
    )
  }

  type = "";

  getType(event) {
    this.type = event.target.value;
  }

  getAllRentType() {
    this.rentTypeService.getAll().subscribe(rentType => {
      this.rentType = rentType;
    });
  }

  getAllFacilityType() {
    this.facilityTypeService.getAll().subscribe(facilityType => {
      this.facilityType = facilityType;
    });
  }
}
